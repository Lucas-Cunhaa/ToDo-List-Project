import { axios } from 'axios'

 const axiosInstance = axios.create(
    {
        baseURL: 'http://localhost:3011/todo/'
    }
) 

export default axiosInstance