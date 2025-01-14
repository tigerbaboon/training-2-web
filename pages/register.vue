<template>
    <div class="bg-gray-100 flex w-full h-screen  items-center justify-center">
        <div class="w-[1340px] bg-white shadow-2xl">
            <div class="grid grid-cols-2 bg-white shadow-2xl">
                <div class="flex items-center justify-center ">
                    <div class=" flex w-[560px] items-center justify-center rounded-lg  overflow-hidden">
                        <div class="w-full p-8">
                            <h1 class="text-center text-4xl font-semibold text-gray-900 mb-8">ลงทะเบียน</h1>
                            <form @submit.prevent="onSubmit" class="space-y-3">
                                <div>
                                    <label class="block text-lg text-gray-700" for="username">ชื่อผู้ใช้</label>
                                    <input v-model="username"
                                        class="w-full h-12 px-4 mt-2 border  border-gray-300 rounded-md shadow-md focus:border-[#00AEEF] focus:outline-none"
                                        type="text" id="username" placeholder="ป้อนชื่อผู้ใช้ของคุณ" />
                                </div>
                                <div>
                                    <label class="block text-lg text-gray-700 " for="password">รหัสผ่าน</label>
                                    <input v-model="password"
                                        class="w-full h-12 px-4 mt-2 border border-gray-300 rounded-md shadow-md focus:border-[#00AEEF] focus:outline-none"
                                        type="password" id="password" placeholder="ป้อนรหัสผ่านของคุณ" />
                                </div>
                                <div>
                                    <label class="block text-lg text-gray-700" for="email">ที่อยู่อีเมล</label>
                                    <input v-model="email"
                                        class="w-full h-12 px-4 mt-2 border border-gray-300 rounded-md shadow-md focus:border-[#00AEEF] focus:outline-none"
                                        type="email" id="email" placeholder="ป้อนอีเมลของคุณ" />
                                </div>
                                <div>
                                    <label class="block text-lg text-gray-700" for="firstname">ชื่อจริง</label>
                                    <input v-model="firstname"
                                        class="w-full h-12 px-4 mt-2 border border-gray-300 rounded-md shadow-md focus:border-[#00AEEF] focus:outline-none"
                                        type="text" id="firstname" placeholder="ป้อนชื่อจริงของคุณ" />
                                </div>
                                <div>
                                    <label class="block text-lg text-gray-700" for="lastname">นามสกุล</label>
                                    <input v-model="lastname"
                                        class="w-full h-12 px-4 mt-2 border border-gray-300 rounded-md shadow-md focus:border-[#00AEEF] focus:outline-none"
                                        type="text" id="lastname" placeholder="ป้อนนามสกุลของคุณ" />
                                </div>
                                <div class="flex items-center gap-2 text-sm text-gray-600 mt-6">
                                    <p>ต้องการเข้าสู่ระบบใช่ไหม?</p>
                                    <nuxt-link to="/login" class="text-blue-500 hover:underline">เข้าสู่ระบบ</nuxt-link>
                                </div>
                                <button type="submit"
                                    class="w-full h-12 mt-6 bg-[#00AEEF] text-white rounded-md shadow-md flex items-center justify-center hover:bg-[#00afefe8] transition-colors">
                                    <span v-if="isLoading" class="loader"></span>
                                    <span v-else>ลงทะเบียน</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="bg-white ">
                    <div
                        class=" bg-[url('/assets/logo/photologin.jpg')] bg-cover rounded-l-[170px] flex items-center justify-center h-full shadow-xl">
                        <div class="w-[330px] h-[430px] bg-white opacity-75 rounded-xl shadow-2xl">
                            <div class="mt-10">
                                <nuxt-link to="/">
                                    <!-- <img class="w-[160px] m-5 " src="/assets/logo/new.png" alt="zzz"> -->
                                    <span class="fontlogo  text-[32px] font-extrabold text-gray-700 ml-6 ">
                                        KK-Space.com</span>
                                </nuxt-link>
                            </div>

                            <div class="space-y-2">
                                <p class="text-[25px] text-gray-800 ml-5">ยินดีต้อนรับ สู่ <br>จังหวัด ขอนแก่น</p>
                                <p class="text-[16px] text-gray-900 ml-5">เราดีใจที่ได้พบคุณอีกครั้ง
                                    <br>เข้าถึงสิ่งที่อยากได้และคำแนะนำ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import service from '~/service';
import Swal from "sweetalert2";

definePageMeta({
    layout: "loginpage",
});

const router = useRouter()
const isLoading = ref<boolean>(false);
// const loading = ref<boolean>(false);
const username = ref<string>("");
const password = ref<string>("");
const email = ref<string>("");
const firstname = ref<string>("");
const lastname = ref<string>("");


// const onSubmit = async () => {
//     try {
//         const resp: any = await service.auth.register({
//             username: username.value,
//             password: password.value,
//             email: email.value,
//             firstname: firstname.value,
//             lastname: lastname.value,
//         });

//         if (resp.Code == "200") {
//             await Swal.fire({
//                 icon: "success",
//                 title: "ลงทะเบียนเรียบร้อย",
//             });
//             router.push('/login')
//         }
//     } catch (error: any) {
//         Swal.fire({
//             icon: "error",
//             title: "เกิดข้อผิดพลาด",
//             text: error || "เกิดข้อผิดพลาด",
//         });
//     }
// };

const onSubmit = async () => {
    isLoading.value = true;
    try {
        const resp: any = await service.auth.register({
            username: username.value,
            password: password.value,
            email: email.value,
            firstname: firstname.value,
            lastname: lastname.value,
        });
        console.log(resp);
        if (resp.Code == "200") {
            await Swal.fire({
                icon: "success",
                title: "ลงทะเบียนเรียบร้อย",
            });
            router.push('/login');
        }
    } catch (error: any) {
        Swal.fire({
            icon: "error",
            title: "เกิดข้อผิดพลาด",
            text: error || "เกิดข้อผิดพลาด",
        });
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    // Swal.fire({
    //     icon: "success",
    //     title: "เกิดข้อผิดพลาด",
    //     text: "เกิดข้อผิดพลาด",
    // });
});

// const onSubmit = async () => {
//     if (loading.value) return; // ป้องกันการกดปุ่มซ้ำ

//     loading.value = true; // ตั้งสถานะเป็นกำลังโหลด

//     try {
//         const resp: any = await service.auth.register({
//             username: username.value,
//             password: password.value,
//             email: email.value,
//             firstname: firstname.value,
//             lastname: lastname.value,
//         });
//         console.log(resp);
//     } catch (error: any) {
//         // แสดงข้อความแจ้งข้อผิดพลาด (ต้องแน่ใจว่า SweetAlert ทำงานถูกต้อง)
//         $swal.fire({
//             icon: "error",
//             title: "เกิดข้อผิดพลาด",
//             text: error.message || "เกิดข้อผิดพลาด",
//         });
//     } finally {
//         loading.value = false; // รีเซ็ตสถานะเมื่อเสร็จสิ้นการทำงาน
//     }
// };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Dancing+Script:wght@400..700&family=Oleo+Script:wght@400;700&family=Shrikhand&family=Sriracha&family=Yellowtail&display=swap');

.fontlogo {
  font-family: 'Shrikhand';
}
.loader {
    border: 3px solid #f3f3f3;
    border-top: 3px solid #00AEEF;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
}
</style>