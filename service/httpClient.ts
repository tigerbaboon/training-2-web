import { $fetch, type FetchOptions } from "ofetch";
import { setCookie } from "~/composables/useCookie";
import type { Response } from "~/models/http.model";

export function client<T, R extends Response<T> = Response<T>>(url: string, opts?: FetchOptions<"json">) {
   // const config = useRuntimeConfig()
   const { $router } = useNuxtApp()

   const controller = new AbortController()
   setTimeout(() => {
      controller.abort()
   }, 60000);

   const token = setCookie('token')
   const headers: any = {
      Authorization: token.value && `Bearer ${token.value}`,
      'ngrok-skip-browser-warning': 'true',
      ...opts?.headers
   }

   const config = useRuntimeConfig() as unknown as { public: { webApi: string } };


   return $fetch<R>(url, {
      baseURL: config?.public?.webApi || "http://localhost:3000",
      signal: controller.signal,
      method: opts?.method?.toUpperCase(),
      headers,
      ...opts,
      onResponseError({ response }) {
         if (response?.status == 403 || response?.status === 401) {
            token.value = undefined
            setTimeout(() => {
               $router.push('/login')
            }, 500);
         }
      }
   })
}





// import { $fetch, type FetchOptions } from "ofetch";
// import { setCookie } from "~/composables/useCookie";
// import type { Response } from "~/models/http.model";

// export function client<T, R extends Response<T> = Response<T>>(url: string, opts?: FetchOptions<"json">) {
//    // const config = useRuntimeConfig()
//    const { $router } = useNuxtApp()

//    const controller = new AbortController()
//    setTimeout(() => {
//       controller.abort()
//    }, 60000);

//    const token = setCookie('token')
//    const headers: any = {
//       Authorization: token.value && `Bearer ${token.value}`,
//       'ngrok-skip-browser-warning': 'true',
//       ...opts?.headers
//    }

//    return $fetch<R>(url, {
//       baseURL: "https://b271-183-88-242-252.ngrok-free.app",
//       signal: controller.signal,
//       method: opts?.method?.toUpperCase(),
//       headers,
//       ...opts,
//       onResponseError({ response }) {
//          if (response?.status == 403 || response?.status === 401) {
//             token.value = undefined
//             setTimeout(() => {
//                $router.push('/login')
//             }, 500);
//          }
//       }
//    })
// }