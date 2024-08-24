
export type RequestMethod = 'get' | 'post' | 'put' | 'delete'; 

export interface FormDataTypes {
    username?: string, 
    email: string, 
    password: string
}

export interface FormRequestTypes { 
    url : string, 
    method: RequestMethod, 
    data?: object, 
    params?: object

}