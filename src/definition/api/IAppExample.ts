

export interface IApiExample {
    params?: { [key:string]: string}; 
    query?: { [key:string]: string}; 
    headers?: { [key: string]: string}; 
    content?: any
}



export const Example = (options: IApiExample) => {
    return (target:any, propertyKey:string, descriptor:PropertyDescriptor) => {
        target.example = target.example || {}; 
        target.example[propertyKey] = options
    }
}