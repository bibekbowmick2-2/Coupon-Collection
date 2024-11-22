import React from "react";
import StatisticBar from "./StatisticBar";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Card from "../Card/Card";

const Statistics = () => {
  const data = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Statistic</title>
      </Helmet>
      <h1 className="text-4xl lg:text-5xl ">All coupons</h1>
      <label class="input input-bordered flex items-center gap-2 mt-3 w-2/3 mx-auto">
        <input type="text" class="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </label>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-5 mr-40 relative left-0 lg:left-28 mt-7">
        {data.map((d) => (
          <Card key={d.id} card={d}></Card>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
