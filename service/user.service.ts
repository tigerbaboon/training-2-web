import { client } from "./httpClient";

export function info(query?: any) {
  return client(`/api/v1/user/show/${query.id}`, { method: "GET" });
}

export function listProfile(params?: any) {
  return client("/api/user/user/show", {
    method: "GET",
    params: params,
  });
}

export function ProfileUserHomme(params?: any) {
  return client("/api/user/house/get", {
    method: "GET",
    params: params,
  });
}

export function create(body?: any) {
  return client("/api/v1/user/create", {
    method: "POST",
    body: body,
  });
}

export function updateById(body?: any) {
  return client(`/api/v1/user/${body.id}/update`, {
    method: "PATCH",
    body: body,
  });
}

export function update(body?: any) {
  return client(`/api/v1/user/update`, {
    method: "PATCH",
    body: body,
  });
}

export function destroy(query?: any) {
  return client(`/api/v1/user/${query?.id}`, {
    method: "DELETE",
  });
}

export function listPromote(arg0: { page: number; limit: number }): any {
  throw new Error("Function not implemented.");
}

export function apimap(params?: any) {
  return client("/api/user/house/getnearby", {
    method: "GET",
    params: params,
  });
}
