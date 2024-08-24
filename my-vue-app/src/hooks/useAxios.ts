import axiosInstance from "../helper/axiosInstance"
import { useState } from "react"
import { FormDataTypes, FormRequestTypes } from "../interface/types"

const useAxios = () => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const fetch = async(p0: string, p1: string, p2: { formData: FormDataTypes; "": any }, p3: { data: any }, { url, method, data = {}, params = {} }: FormRequestTypes) => {
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
export default useAxios