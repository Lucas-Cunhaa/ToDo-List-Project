import axiosInstance from "../helper/axiosInstance"
import { useState } from "react"
import { FormRequestTypes } from "../interface/types"
import { AxiosError, AxiosResponse } from "axios"

const useAxios = () => {
    const [response, setResponse] = useState<AxiosResponse | null>(null)
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState(false)

    const fetch = async ({ url, method, data = {}, params = {} }: FormRequestTypes) => {
        setLoading(true)
        try {
            const result = await axiosInstance({
                url,
                method,
                data,
                params,
            })
            setResponse(result.data) 
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                setError(err.message);
            } else {
                setError('An unexpected error occurred.');
            }
        } finally {
            setLoading(false)
        }
    }

    return { response, error, loading, fetch }
}

export default useAxios
