/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { AxiosError } from 'axios';
import axiosInstance from '../helper/axiosInstance';
import { RequestMethod } from '../interface/types';

export default function useAxios(url: string, method: RequestMethod ) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState('');

        const axiosFetch = async (configs: object) => {
            console.log(configs)
            try {
                setLoading(true)
                const res = await axiosInstance[method](url,{
                    ...configs, 
                });
                setData(res.data);
            } catch (err: unknown) { 
                if (err instanceof AxiosError) {
                    setError(err.message)
                } else {
                    setError('An unexpected error occurred.');
                }
                
            } finally {
                setLoading(false);
            }
        };

    return { data, loading, error, axiosFetch }

}
