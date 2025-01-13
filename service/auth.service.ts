import type { LoginRequest, RegisterRequest } from "@/models/auth.model";
import { client } from './httpClient';


export function register(body: RegisterRequest) {
   return client("/api/user/user/create", {
      method: "POST",
      body: body,
   });
}


export function login(body: LoginRequest) {
   return client("/api/user/user/login", {
      method: "POST",
      body: body,
   });
}

export function logout() {
   return client("/auth/logout", {
      method: "POST",
   });
}