<template>
  <div class="bg-gray-100 flex w-full h-screen items-center justify-center">
    <div class="w-[1340px] bg-white shadow-2xl">
      <div class="grid grid-cols-2 bg-white shadow-2xl">
        <div class="bg-white">
          <div
            class="h-[696px] bg-[url('/assets/logo/photologin.jpg')] bg-cover rounded-r-[170px] flex items-center justify-center shadow-xl">
            <div class="w-[330px] h-[430px] bg-white opacity-75 rounded-xl shadow-2xl flex flex-col justify-between">
              <div class="my-10">
                <nuxt-link to="/" >
                  <!-- <img class="w-[160px] m-5" src="/assets/logo/new.png" alt="zzz" /> -->
                  <span class="fontlogo  text-[32px] font-extrabold text-gray-700 ml-6 "> KK-Space.com</span>
                </nuxt-link>
                <div class="space-y-2">
                  <p class="text-[25px] text-gray-800 ml-5">
                    ยินดีต้อนรับ สู่ <br />จังหวัด ขอนแก่น
                  </p>
                  <p class="text-[16px] text-gray-900 ml-5">
                    เราดีใจที่ได้พบคุณอีกครั้ง
                    <br />เข้าถึงสิ่งที่อยากได้และคำแนะนำ
                  </p>
                </div>
              </div>
              <div class="mb-4">
                <nuxt-link to="/register">
                  <button class="ml-5 hover:text-green-400 text-[20px]">
                    ลงทะเบียน
                  </button>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white w-full h-[696px] flex items-center justify-center">
          <div class="w-[560px] p-8 space-y-6">
            <h2 class="text-3xl font-semibold text-center text-gray-900">
              เข้าสู่ระบบ
            </h2>
            <div>
              <label class="block text-lg text-gray-700" for="username">ชื่อผู้ใช้</label>
              <input v-model="input_username" @keyup.enter="onSubmit"
                class="w-full h-12 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#00AEEF] mt-2"
                type="text" id="username" placeholder="ป้อนชื่อผู้ใช้ของคุณ" />
            </div>
            <div>
              <label class="block text-lg text-gray-700" for="password">รหัสผ่าน</label>
              <input v-model="input_password" @keyup.enter="onSubmit"
                class="w-full h-12 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#00AEEF] mt-2"
                type="password" id="password" placeholder="ป้อนรหัสผ่านของคุณ" />
            </div>
            <div class="flex justify-end items-center gap-2 text-sm text-gray-500">
              <button class="text-gray-500 hover:text-sky-500 transition-colors">
                ลืมรหัสผ่าน
              </button>
              <p>ยังไม่มีบัญชีใช่ไหม?</p>
              <nuxt-link to="/register" class="text-blue-500 hover:underline">ลงทะเบียน</nuxt-link>
            </div>

            <div class="flex justify-center">
              <button type="submit" @click="onSubmit"
                class="w-full h-12 bg-[#00AEEF] text-white rounded-md shadow-md flex items-center justify-center text-lg font-semibold hover:bg-[#00afefe8] transition-colors">
                เข้าสู่ระบบ
              </button>
            </div>
            <!-- อัพเดทในอนาคตอันแสนยาวไกล -->
            <!-- <div class="flex items-center space-x-4">
                            <hr class="w-full border-gray-300">
                            <span class="text-gray-500">หรือ</span>
                            <hr class="w-full border-gray-300">
                        </div>   
                        <div class="flex gap-4">
                            <button
                                class="w-full h-12 bg-white border border-gray-300 rounded-md shadow-md flex items-center justify-center text-gray-700 text-lg hover:bg-gray-100 transition-colors">
                                <img src="/assets/logo-login/google.png" alt="Google Icon" class="w-6 h-6 mr-2">
                                เข้าสู่ระบบด้วย Google
                            </button>
                            <button
                                class="w-full h-12 bg-[#1877F2] text-white rounded-md shadow-md flex items-center justify-center text-lg hover:bg-[#155ccf] transition-colors">
                                <img src="/assets/logo-login/facebook.png" alt="Facebook Icon" class="w-6 h-6 mr-2">
                                เข้าสู่ระบบด้วย Facebook
                            </button>
                        </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import service from "~/service";
import Swal from "sweetalert2";
definePageMeta({
  layout: "loginpage",
});

const loading = ref<boolean>(false);
const input_username = ref<string>("");
const input_password = ref<string>("");
const errormessage = ref<string | null>(null);
const logincorrect = ref<boolean>(false);
const router = useRouter();
const { $swal }: any = useNuxtApp();
// const refToken: any = useStatefulCookie('token')

// const onSubmit = async () => {

//     try {
//         const resp: any = await service.auth.login({
//             username: input_username.value,
//             password: input_password.value,
//         });

//         const refToken = setCookie('token');
//         refToken.value = resp?.Data?.token || "";
//         const refUsername = setCookie('username');
//         refUsername.value = resp?.Data?.username || "";

//         router.push("/home");
//     } catch (error: any) {
//         Swal.fire({
//             icon: "error",
//             title: "เกิดข้อผิดพลาด",
//             text: error || "เกิดข้อผิดพลาด",
//         });

//     }

// };

const onSubmit = async () => {
  try {
    const resp = await service.auth.login({
      username: input_username.value,
      password: input_password.value,
    });
    if (resp?.Code === "200" && resp?.Data?.username === input_username.value) {
      const refUsername = setCookie("username");
      refUsername.value = resp.Data.username || "";
      const refToken = setCookie("token");
      refToken.value = resp?.Data?.token || "";
      refUsername.value = resp?.Data?.username || "";
      router.push("/");
    } else {
      throw new Error("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      text: "กรุณาตรวจสอบชื่อผู้ใช้หรือรหัสผ่านให้ถูกต้อง",
    });
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Dancing+Script:wght@400..700&family=Oleo+Script:wght@400;700&family=Shrikhand&family=Sriracha&family=Yellowtail&display=swap');

.fontlogo {
  font-family: 'Shrikhand';
}
</style>
