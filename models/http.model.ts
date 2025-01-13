export interface Response<T> {
   [x: string]: any
   status: ResponseMessage
   data?: T
}

export interface ResponseMessage {
   code: string,
   message: string
}

export interface ResponseWithPagination<T> extends Response<T> {
   paginate: Paginate
}

export interface Paginate {
   page: number,
   limit: number,
   count?: number
}