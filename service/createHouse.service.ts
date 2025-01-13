import { client } from "./httpClient";

export function createhome(body?: any) {
  return client("/api/admin/house/create", {
    method: "POST",
    body: body,
  });
}

export function listzone(params?: any) {
  return client("/api/user/zone/show", { method: "GET", params: params });
}

export function listamenity(params?: any) {
  return client("/api/user/amenity/show", { method: "GET", params: params });
}
