import axiosInstance from "../helper/axiosInstance"
import { useState } from "react"
import { FormDataTypes, FormRequestTypes } from "../interface/types"

const useAxios = () => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const fetch = async( { url, method, data = {}, params = {} }: FormRequestTypes) => {
        setLoading(true)
        try {
            const result = await axiosInstance({
                url, 
                method, 
                data, 
                params
            })
            setResponse(result)
        } catch (error: unknown) {
            if (error) {
                setError(error) 
            } else {
                setError(error.message)
            }
        } finally {
            setLoading(false)
        }
           
    
        }
     return {response, error, loading, fetch}
    }
    
export default useAxios