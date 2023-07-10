"use client"
import useSWR from "swr";
import { useEffect, useState } from 'react';
import css from './page.module.css'

const Dashboard = () => {

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);
  
  return (
    <div className={css.container}>
      
    </div>
  )
}

export default Dashboard;