import { useState,useEffect } from "react";
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
  });
  
  //api.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  //api.defaults.headers.common["Access-Control-Allow-Methods"] = "GET,POST,PUT,DELETE,OPTIONS";
  //api.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With";
  

export function useFetch<T = unknown>(endpoint: string) {
    // Const with api Data
    const [data, setData] = useState<T | null>(null);
    // State of Fetch
    const [isFetching, setIsFetching] = useState(true);
    // State of Error
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
            api.get(endpoint)
                .then(response => { 
                    setData(response.data)
                })
                .catch(err => {
                    setError(err);
                })
                .finally(() => {
                    setIsFetching(false);
                })
        }, []);

    return { data, error, isFetching }
}