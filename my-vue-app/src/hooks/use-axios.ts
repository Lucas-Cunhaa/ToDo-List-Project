/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { AxiosError, AxiosRequestConfig } from 'axios';
import axiosInstance from '../helper/axiosInstance';
import { RequestMethod } from '../interface/types';

interface UseAxiosResponse<T> {
    data: T | null;
    loading: boolean;
    error: string;
    axiosFetch: (configs?: AxiosRequestConfig) => Promise<void>;
}

function useSAxios<T = unknown>(url: string, method: RequestMethod): UseAxiosResponse<T> {
    const [data, setData] = useState<T | null>(null); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const axiosFetch = async (configs?: AxiosRequestConfig) => {
        try {
            setLoading(true);
            const res = await axiosInstance[method]<T>(url, configs);
            setData(res.data);
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                setError(err.message);
            } else {
                setError('An unexpected error occurred.');
            }
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, axiosFetch };
}
