import axiosInstance from "../helper/axiosInstance"
import { useState } from "react"
import { FormRequestTypes } from "../interface/types"
import { AxiosError, AxiosResponse } from "axios"

const useAxios = () => {
    const [response, setResponse] = useState<AxiosResponse| null>(null)
    const [error, setError] = useState<AxiosError>()
    const [loading, setLoading] = useState(false)

    const fetch = async({ url, method, data = {}, params = {} }: FormRequestTypes) => {
        setLoading(true)
        try {
            const result = await axiosInstance({
                url,
                method,
                data,
                params,
            })
            setResponse(result.data) 
        } catch (err) {
            console.log(err)
            if (err instanceof AxiosError) {
                setError(err);
            } 
        } finally {
            setTimeout( () => {setLoading(false)} , 1000)
            
        }
    }

    return { response, error, loading, fetch }
}

export default useAxios
