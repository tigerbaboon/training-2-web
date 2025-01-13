import { client } from './httpClient';

export function info(query?: any) {
   return client(`/api/user/travel/show/${query.id}`, { method: "GET" });
}

export function list(params?: any) {
   return client("/api/user/travel/show", { 
      method: "GET", 
      params: params 
   });
}
export function create(body?: any) {
   return client("/api/user/house/create", {
      method: "POST",
      body: body,
   });
}
export function login(body?: any) {
   return client("/api/v1/user/login", {
      method: "POST",
      body: body,
   });
}

export function updateById(body?: any) {
   return client(`/example/${body.id}/update`, {
      method: "PATCH",
      body: body,
   });
}

export function update(body?: any) {
   return client(`/example/update`, {
      method: "PATCH",
      body: body,
   });
}

export function destroy(query?: any) {
   return client(`/example/delete/${query?.id}`, {
      method: "DELETE",
   });
}
