// src/context/AppContext.js
import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,updateProfile,signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";



// Create the context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [additem, setAddItem] = useState([]);
  const [addwislist, setAddWishlist] = useState([]);
  const [disabledItems, setDisabledItems] = useState([]);
  


  const [user, setuser] = useState(null);
  const provider = new GoogleAuthProvider(); 
  const [passwordError, setPasswordError] = useState("");
  

  // Fetch data for categories and products
  useEffect(() => {
    fetch('../categories.json')
      .then(response => response.json())
      .then(data => setCategories(data));

    fetch('../Fakedata.json')
      .then(response => response.json())
      .then(data => setProducts(data));


      const unsubscribe = onAuthStateChanged(auth, (current_user) => {
        console.log("Current User",current_user);
        setuser(current_user);
        
      });
      return ()=>{
        unsubscribe();
      }


  }, []);

  const handleChoosePlayer = (each_item) => {
    const new_item = [...additem, each_item];
    setAddItem(new_item);
    toast.success("Item Added to Cart Successfully");
  };

  const handleWislist = (each_item) => {
    const new_item = [...addwislist, each_item];
    setAddWishlist(new_item);
    setDisabledItems(prevState => [...prevState, each_item.id]);
    toast.success("Item Added to Wishlist Successfully");
  };

  const handleDelete = (current_id, listType) => {
    if (listType === "cart") {
      const filteredItems = additem.filter(p => p.id !== current_id);
      setAddItem(filteredItems);
    } else if (listType === "wishlist") {
      const filteredItems = addwislist.filter(p => p.id !== current_id);
      setAddWishlist(filteredItems);
    }
    toast.error("Item Deleted Successfully");
  };



  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;

    if (!hasUppercase) {
      return "Password must have at least one uppercase letter.";
    }
    if (!hasLowercase) {
      return "Password must have at least one lowercase letter.";
    }
    if (!isValidLength) {
      return "Password must be at least 6 characters long.";
    }

    return ""; // No errors
  };

  const handleSubmit = async (e,navigate) => {
    e.preventDefault();
   
    
    // Extract form values
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const url = e.target.url.value;

    const error = validatePassword(password);

    if (error) {
      setPasswordError(error); // Set the error message
      return; // Stop form submission
    }

    setPasswordError(""); // Clear errors if the password is valid
  
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Update user profile with additional data
      await updateProfile(user, {
        displayName: name,
        photoURL: url,
      });
  
      console.log("Signed up User", user);
      navigate("/");
  
    
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage);
      console.error("Error during sign-up", errorCode, errorMessage);
    }
  };
  



  const handleSubmit2 = (e,navigate) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const error = validatePassword(password);
    if (error) {
      setPasswordError(error); // Set the error message
      return; // Stop form submission
    }

    setPasswordError("");
    
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Signed in  User",user);
    navigate("/");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorMessage);
  });


  }




  const handleSubmit3 = (e,navigate) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const url = e.target.url.value;
    
    updateProfile(user, {
      displayName: name, photoURL: url
    }).then(() => {
      toast.success("Updated Successfully");
      navigate("/");
    }).catch((error) => {
      console.log("Error Successfully",error)
    });


  }

  const handleReset = () => {
    // Log out the user
    signOut(auth)
      .then(() => {
        toast.success("Successfully logged out!");
        // Redirect to Gmail
        window.location.href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox";
      })
      .catch((error) => {
        console.error("Error during sign-out:", error);
        toast.error("Failed to log out. Please try again.");
      });
  };

  const handleGoogle = (navigate) =>{
    
    signInWithPopup(auth, provider)
    .then((result) => {
      setuser(result.user);
      navigate("/");
      
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
     
      
    });
  }



  

  return (
    <AppContext.Provider value={{ 
      categories, 
      products, 
      additem, 
      handleChoosePlayer, 
      handleDelete, 
      addwislist, 
      handleWislist,
      disabledItems,
      handleSubmit,
      handleSubmit2,
      user,
      handleGoogle,
      handleSubmit3,
      passwordError,
      handleReset
    }}>
      {children}
    </AppContext.Provider>
  );
};
