import axios from "axios"
import axiosInstance from "../helper/axiosInstance"
import { useState } from "react"

const useAxios = () => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const fetch = async({ url, method, data = {} , params = {} }) => {
        setLoading(true)
        
        try {
            const result = await axiosInstance({
                url, 
                method, 
                data, 
                params
            })
            setResponse(result)
        } catch (error) {
            setError(error.response ? error.responde.data: error.message)
        } finally {
            setLoading(false)
        }
    }
    return {response, error, loading, fetch}
}
export defualt useAxios