import { client } from "./httpClient";

export function info(query?: any) {
  return client(`/api/user/travel/show/${query.id}`, { method: "GET" });
}

export function list(params?: any) {
  return client("/api/user/travel/show", {
    method: "GET",
    params: params,
  });
}

export function create(body?: any) {
  return client("/api/user/travel/create", {
    method: "POST",
    body: body,
  });
}

export function zone(params?: any) {
  return client("/api/user/zone/show", {
    method: "GET",
    params: params,
  });
}

export function listZoneID(query?: any) {
  return client(`/api/user/zone/show/${query.id}`, {
    method: "GET",
  });
}
