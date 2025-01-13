<template>
  <div class="bg-gray-100 flex w-full h-screen items-center justify-center">
    <div class="w-[1340px] h-[750px]">
      <div class="grid grid-cols-2">
        <div
          class="bg-rose-500 h-[650px] bg-[url('/assets/login/IMG_3037.JPEG')] bg-cover rounded-r-[170px]"
        ></div>
        <div class="flex items-center justify-center">
          <div class="bg-white w-[600px] h-[600px]">
            <div class="text-center text-[30px] text-gray-900">เข้าสู่ระบบ</div>
            <div class="flex p-2 justify-center">
              <div class="flex flex-col text-[20px]">
                ชื่อผู้ใช้
                <input
                  class="w-[300px] h-[40px] p-2 border border-gray-400"
                  type="text"
                  v-model="input_username"
                  placeholder="ป้อนชื่อผู้ใช้ของคุณ"
                />
              </div>
            </div>
            <div class="flex justify-center">
              <div class="flex flex-col text-[20px]">
                รหัสผ่าน
                <input
                  class="w-[300px] h-[40px] p-2 border border-gray-400"
                  type="password"
                  v-model="input_password"
                  placeholder="ป้อนรหัสผ่านของคุณ"
                />
              </div>
            </div>
            <div class="p-8 flex ml-[115px] text-gray-400">
              <button>ลืมรหัสผ่าน</button>
            </div>
            <div class="flex justify-center">
              <button
                @click="checkLogin"
                class="bg-[#00AEEF] w-[300px] rounded-full p-2 text-white"
              >
                ยืนยัน
              </button>
            </div>
            <div
              v-if="errormessage"
              :class="{
                'text-green-500': logincorrect,
                'text-red-500': !logincorrect,
              }"
              class="text-center mt-4"
            >
              {{ errormessage }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "login",
});
const input_username = ref<string>("");
const input_password = ref<string>("");
const errormessage = ref<string | null>(null);
const logincorrect = ref<boolean>(false);
const userpassword = ref<boolean>(true);

const user = ref<{ alluser: string; password: any }[]>([
  { alluser: "zero", password: 1234 },
  { alluser: "preme", password: 5678 },
]);

const checkLogin = () => {
  const foundUser = user.value.find(
    (u) =>
      u.alluser === input_username.value && u.password == input_password.value
  );
  if (!input_username.value || !input_password.value) {
    logincorrect.value = false;
    errormessage.value = "กรุณากรอกข้อมูล.";
  } else {
    if (foundUser) {
      logincorrect.value = true;
      errormessage.value = "ล็อคอินสำเร็จ";
    } else {
      logincorrect.value = false;
      errormessage.value = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
    }
  }
};
</script>
