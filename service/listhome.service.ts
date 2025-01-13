import { client } from "./httpClient";

export function listHome(params?: any) {
  return client("/api/user/house/show", {
    method: "GET",
    params: params,
  });
}

export function listHomeID(query?: any) {
  return client(`/api/user/house/show/${query.id}`, {
    method: "GET",
  });
}

export function delhouse(query?: any) {
  return client(`/api/user/house/delete/${query?.id}`, {
    method: "DELETE",
  });
}

export function updateByEditHome(body?: any, id?: string) {
  return client(`/api/user/house/update/${id}`, {
    method: "PATCH",
    body: body,
  });
}


// export function getListZoneID(body?: any, id?: string) {
//   return client(`/api/user/house/show/search_by_zone${id}`, {
//     method: "PATCH",
//     body: body,
//   });
// }

export function getListZoneID(params?: any) {
  return client("/api/user/house/show", {
    method: "GET",
    params: params,
  });
}

export function listPrice(params?: any) {
  return client("/api/user/house/getprice", {
    method: "GET",
    params: params,
  });
}

// export function StatusHouse(body?: any) {
//   return client(`/api/admin/house/update/rec/${body.id}`, {
//     method: "PATCH",
//     body: JSON.stringify({
//       is_recommend: body.is_recommend,
//     }),
//   });
// }
