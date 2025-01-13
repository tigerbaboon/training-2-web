import { client } from './httpClient';


export function listPromote(params?: any) {
   return client("/api/user/promote/show", { 
      method: "GET", 
      params: params 
   });
}

