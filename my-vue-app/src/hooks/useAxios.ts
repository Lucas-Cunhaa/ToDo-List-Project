import axiosInstance from "../helper/axiosInstance"
import { useState } from "react"
import { FormRequestTypes } from "../interface/types"
import { AxiosError } from "axios"

const useAxios = () => {
    const [error, setError] = useState<AxiosError>()
    const [loading, setLoading] = useState(false)

    const fetch = async({ url, method, data = {}, params = {} }: FormRequestTypes) => {
        setLoading(true)
        try {
            const result = await axiosInstance({
                url,
                method,
                data,
                params
               
            })
           return result.data

        } catch (err) {
            console.log(err)
            if (err instanceof AxiosError) {
                setError(err);
            } 
        } finally {
            setTimeout( () => {setLoading(false)} , 1500)  
        }
    }

    return { error, loading, fetch }
}

export default useAxios
