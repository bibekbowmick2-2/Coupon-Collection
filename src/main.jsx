import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Statistics from './component/Statistics/Statistics';
import DashBoard from './component/DashBoard/DashBoard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainContainer from './component/mainContainer/MainContainer';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Home from './component/home/Home';
import ProductDetails from './component/ProductDetails/ProductDetails';
import Cards from './component/Cards/Cards';
import Calendar from './component/Calendar/Calendar';
import Cart from './component/DashBoard/Cart';
import Wislist from './component/DashBoard/Wislist';
import { AppProvider } from './component/contextapi/AppProvider';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import FAQ from './component/Calendar/FAQ';

import Profile from './component/Profile/Profile';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Update from './component/Profile/Update';
import Reset from './component/Login/Reset';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer/>,
    errorElement: <ErrorPage/>,
    
    
    children:[
      // {
      //   path:"/",
      //   element:<Home/>,
      // },


      {
        
        path:"/",
        element:<Home/>,
        loader: ()=> fetch('../Fakedata.json'),
        
        children:[
          {
            path: "/",
            element: <Cards></Cards>,
            loader: ()=> fetch('../Fakedata.json'),
            
          }
          
        ]
      },



      {
        
        path:"/",
        element:<Home/>,
        loader: () => fetch('../categories.json'),
        
        children:[
          {
            path: "categories/:category",
            element: <Cards></Cards>,
            loader: ()=> fetch('../Fakedata.json'),
            
          }
          
        ]
      },


    




      

      



      {
        path: "/brands",
        element: <Statistics/>,
        loader: ()=> fetch('../Fakedata.json')
      },

      {
        path: "/dashBoard",
        element: <DashBoard/>,
        children:[
          {
            path: "/dashBoard/cart",
            element: <Cart/>
            // loader: ()=> fetch('../Fakedata.json'),
            
          },

          {
            path: "/dashBoard/wislist",
            element: <Wislist/>
            // loader: ()=> fetch('../Fakedata.json'),
            
          }
          
        ]
      },


      {
        path: "/dashBoard",
        element: <DashBoard/>,
        children:[
          {
            path: "/dashBoard/wislist",
            element: <Wislist/>
            // loader: ()=> fetch('../Fakedata.json'),
            
          }
          
        ]
      },


      {
        path: "/error",
        element: <ErrorPage></ErrorPage>
      },



      {
        path: "/calendar",
        element: <Calendar/>
      },


      {
        path: "/faq",
        element: <FAQ/>
      },


      {
        path: "/login",
        element: <Login/> 
      },

     


      
      {
        path: "/profile",
        element:  <PrivateRoute> 
                   <Profile/> 
                   </PrivateRoute>
      },

      {
        path: "/update",
        element:<Update/>
                  
      },


      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/reset",
        element: <Reset/>
      },

      
      {
        path: "/brands/:id",
        element: <PrivateRoute>  <ProductDetails></ProductDetails> </PrivateRoute>,
        loader: ()=> fetch('../Fakedata.json'),
      }
      
      

    ]
  },


  


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <HelmetProvider>
  
  <AppProvider>
     <RouterProvider router={router} />
     <ToastContainer
    autoClose={1300}
    theme="dark"
  />
     </AppProvider>
     </HelmetProvider>
    
  </StrictMode>,
)
