import React from 'react';
import StatisticBar from './StatisticBar';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Card from '../Card/Card';

const Statistics = () => {
    const data = useLoaderData();
    return (
        <div>
        <Helmet>
        <title>Statistic</title>
      </Helmet>
      <h1 className="text-4xl lg:text-5xl">All coupons</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mr-40 relative left-48">
            {
                data.map(d => <Card key={d.id} card={d} ></Card>)
            }
        </div>
        </div>
    );
};

export default Statistics;