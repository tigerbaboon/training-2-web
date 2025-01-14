<template>
  <div class="flex justify-center bg-gray-200">
    <div class="w-[1200px] pt-2">
      <div class="w-full  bg-white rounded-lg shadow-md p-4 mb-2">
        <div class="text-center mb-8">
          <!-- <img src="/assets/logo/new.png" alt="Profile Picture" class="w-[250px] py-5 mx-auto" /> -->
          <span class="fontlogo text-[30px] font-extrabold text-gray-700 ml-6 "> KK-Space.com</span>
          <div class="flex justify-center items-center gap-1">
            <Icon name="lets-icons:user-alt-fill" size="25px" />
            <p class="text-xl font-bold">{{ profile.username }}</p>
          </div>
        </div>
        <div></div>
        <!-- <div class="grid grid-cols-3">
          <div @click="switchTab('phofile')" :class="{
            'bg-blue-400 text-white': activeTab === 'phofile',
            'bg-white text-black hover:bg-gray-200': activeTab !== 'phofile',
          }" class="flex gap-1 items-center p-2 text-gray-700 rounded-md cursor-pointer">
            <Icon name="lets-icons:user-alt-fill" size="20px" />
            ข้อมูลส่วนตัว
          </div>
          <div @click="switchTab('post')" :class="{
            'bg-blue-400 text-white': activeTab === 'post',
            'bg-white text-black hover:bg-gray-200': activeTab !== 'post',
          }" class="flex gap-1 items-center p-2 text-gray-700 rounded-md cursor-pointer">
            <Icon name="mdi:announcement" size="20px" /> ประกาศของฉัน
          </div>
          <div @click="onLogout"
            class="flex gap-1 items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md cursor-pointer">
            <Icon name="mdi:logout" size="20px" />
            ออกจากระบบ
          </div>
        </div> -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div @click="switchTab('phofile')" :class="{
            'bg-blue-500 text-white shadow-md': activeTab === 'phofile',
            'bg-gray-200 text-gray-700 hover:bg-gray-100 shadow-sm': activeTab !== 'phofile',
          }"
            class="flex gap-2 items-center justify-center p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out">
            <Icon name="lets-icons:user-alt-fill" size="20px" />
            <span>ข้อมูลส่วนตัว</span>
          </div>

          <div @click="switchTab('post')" :class="{
            'bg-blue-500 text-white shadow-md': activeTab === 'post',
            'bg-gray-200 text-gray-700 hover:bg-gray-100 shadow-sm': activeTab !== 'post',
          }"
            class="flex gap-2 items-center justify-center p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out">
            <Icon name="mdi:announcement" size="20px" />
            <span>ประกาศของฉัน</span>
          </div>

          <div @click="onLogout"
            class="flex gap-2 items-center justify-center p-3 text-gray-700 bg-gray-200 hover:bg-gray-100 shadow-sm rounded-lg cursor-pointer transition-all duration-200 ease-in-out">
            <Icon name="mdi:logout" size="20px" />
            <span>ออกจากระบบ</span>
          </div>
        </div>
      </div>
      <!-- หน้าข้อมูลส่วนตัว -->
      <div v-if="activeTab === 'phofile'" class="flex justify-center  bg-white rounded-lg shadow-md px-10 py-8">
        <div class="p-7 w-full h-[489px] rounded-lg">
          <h2 class="text-3xl font-semibold text-gray-800 mb-6">
            ข้อมูลส่วนตัว
          </h2>
          <div class="flex items-center space-x-6 mb-8">
            <img src="/assets/user/user1.jpg" alt="Profile" class="rounded-full object-cover w-24 h-24" />
            <div>
              <p class="text-lg text-gray-500">User Profile</p>
              <p class="text-2xl font-bold text-gray-700">
                {{ profile.username }}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4 text-gray-700 text-xl">
            <p>
              อีเมล:
              <span class="font-semibold text-gray-800">{{
                profile.email
              }}</span>
            </p>
            <p>
              ชื่อจริง:
              <span class="font-semibold text-gray-800">{{
                profile.firstname
              }}</span>
            </p>
            <p>
              นามสกุล:
              <span class="font-semibold text-gray-800">{{
                profile.lastname
              }}</span>
            </p>
            <p>เบอร์: <span class="font-semibold text-gray-800">-----</span></p>
          </div>
        </div>
      </div>

      <!-- หน้าประกาศของฉัน -->
      <div v-if="activeTab === 'post'" class=" bg-white rounded-lg shadow-md px-[50px] py-8">
        <h2 class="text-2xl font-semibold">ประกาศของฉัน</h2>
        <div class="p-7 rounded-lg">
          <div v-if="!homes.length"
            class="flex justify-center items-center gap-2 w-full h-[400px]  bg-white rounded-lg p-3 duration-[450ms]">
            <div class="w-20 h-20 border-8 border-t-[#22b6ed] border-gray-300 rounded-full animate-spin">
            </div>
          </div>
          <div v-else class="grid grid-cols-2 gap-4">
            <!-- <nuxt-link to="/from/fromnew">
              <button class="bg-blue-500 w-full text-white px-3 py-1 rounded-lg shadow-lg hover:bg-blue-600">
                + เพิ่มประกาศ
              </button>
            </nuxt-link> -->
            <div class="shadow-sm " v-for="(home, index) in homes" :key="index">
              <div class="border rounded-lg shadow-lg w-full bg-white">
                <div class="relative">
                  <div class="w-full h-[260px] p-4">
                    <img :src="home?.images_main?.url" alt="Home Image" class="w-full h-full object-cover" />
                  </div>
                  <div class="absolute top-6 right-6 space-y-2">
                    <span
                      class="bg-red-500 text-white px-3 py-1 rounded shadow-lg hover:bg-red-600 flex items-center gap-1 cursor-pointer"
                      @click="deletehouse(home.id)">
                      <Icon name="fluent:delete-48-regular" size="18px" />ลบ
                    </span>
                    <span
                      class="bg-yellow-500 text-white px-3 py-1 rounded shadow-lg hover:bg-yellow-600 flex items-center gap-1 cursor-pointer"
                      @click="router.push(`/user/${home.id}`)">
                      <Icon name="akar-icons:edit" size="18px" /> แก้ไข
                    </span>
                    <div class="flex items-center justify-center h-8 w-[78px] bg-gray-950 bg-opacity-80 rounded">
                      <label
                        class="relative flex items-center w-[50px] h-[15px] rounded-full bg-gradient-to-r from-red-700  to-green-600 cursor-pointer group ">
                        <input type="checkbox"
                          class="peer appearance-none w-[100px] absolute opacity-0 cursor-pointer" />
                        <span
                          class="absolute w-[32px] h-[15px] rounded-full bg-gray-50 shadow-inner transition-all duration-300 peer-checked:translate-x-[20px] peer-checked:bg-white"></span>
                      </label>
                    </div>
                  </div>

                </div>
                <div class="px-4">
                  <h2 class="text-xl font-semibold mb-1 truncate">
                    {{ home?.house_name }}
                  </h2>
                  <p class="text-gray-600 text-sm truncate">{{ home?.address }}</p>
                  <!-- <p class="text-gray-600 text-sm mb-2">ขนาดพื้นที่: {{ home.areaSize }} ตร.ม</p> -->

                  <div class="text-gray-500 text-sm flex justify-end gap-1 my-1">
                    <span class="w-[75px] text-center bg-gray-200 rounded-sm p-[3px]">{{ home.number_of_rooms }}
                      ห้องนอน</span>
                    <span class="w-[75px] text-center bg-gray-200 rounded-sm p-[3px]">{{ home.number_of_bathrooms }}
                      ห้องน้ำ</span>
                    <span class="w-[75px] text-center bg-gray-200 rounded-sm p-[3px]">{{ home.size }} ตร.ม</span>
                    <span class="w-[75px] text-center bg-gray-200 rounded-sm p-[3px]">{{ home.floor }} ชััน</span>
                  </div>

                  <p class="text-green-400 font-bold text-lg text-end">
                    {{ formatNumber(home?.price), 0 }} บาท/เดือน
                  </p>
                </div>
                <div class="flex gap-2 items-center justify-between px-4 py-2 bg-gray-50 border-t">
                  <div class="">
                    <div class="text-sm text-sky-400">
                      ชื่อที่ในประกาศ :
                      <span class="text-sm text-gray-700">{{ home.contact_info.first_name }} {{
                        home.contact_info.last_name }}</span>
                    </div>
                    <div class="text-[14px]">
                      ลงประกาศเมื่อ :
                      <span class="text-sm text-sky-700">{{
                        formatUnixTime(home?.created_at)
                      }}</span>
                    </div>
                  </div>
                  <div>
                    <div class="ml-auto text-blue-500 text-sm">
                      เบอร์โทร : {{ home.contact_info.phone_number }}
                    </div>
                    <div class="ml-auto text-green-500 text-sm">
                      Line ID : {{ home.contact_info.line_id }}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <pre>{{ homes }}</pre> -->
</template>

<script lang="ts" setup>
import Swal from "sweetalert2";
import service from "~/service";
const activeTab = ref<string>("phofile");
const routes = useRouter();

definePageMeta({
  middleware: "auth",
});
const profile = ref<any>([]);
const router = useRouter();
const homes = ref<any>([]);
const getProfile = async () => {
  try {
    const resp: any = await service.user.listProfile({});
    profile.value = resp?.Data || null;
  } catch (error: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  }
};

const UserHomme = async () => {
  try {
    const resp: any = await service.user.ProfileUserHomme({});
    homes.value = resp?.Data || null;
  } catch (error: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  }
};

const deletehouse = (id: string) => {
  Swal.fire({
    icon: "info",
    title: "ลบรายการ",
    text: "ต้องการที่จะลบหรือไม่",
    showCancelButton: true,
    confirmButtonText: "ลบ",
    cancelButtonText: "ยกเลิก",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        console.log("id", id);
        const resp: any = await service.listhome.delhouse({
          id: id,
        });
        if (resp.Code == "200") {
          await Swal.fire({
            icon: "success",
            title: "ลบสำเร็จ",
          });
          UserHomme();
        }
      } catch (error: any) {
        Swal.fire({
          title: "The Error",
          icon: "question",
        });
      }
    }
  });
};

// const statusHouse = async (result: any) => {
//   try {
//     const newstatus = result.status;
//     const resp: any = await service.listhome.UpdateHouse({
//       id: result.id,
//       status: newstatus,
//     });
//     if (resp.Code == "200") {
//       await Swal.fire({
//         icon: "success",
//         title: "อัพเดทสำเร็จ",
//       });
//       UserHomme();
//     } else {
//       throw new Error("Failed to update status");
//     }
//   } catch (error: any) {
//     Swal.fire({
//       icon: "error",
//       title: "Error",
//       text: error.message || "เกิดข้อผิดพลาด",
//     });
//   }
// };

const switchTab = (tab: string) => {
  activeTab.value = tab;
};

onMounted(() => {
  getProfile();
  UserHomme();
});

const onLogout = () => {
  removeCookie("token");
  removeCookie("title_page");
  removeCookie("username");
  routes.push("/");
  location.reload();
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Dancing+Script:wght@400..700&family=Oleo+Script:wght@400;700&family=Shrikhand&family=Sriracha&family=Yellowtail&display=swap');

.fontlogo {
  font-family: 'Shrikhand';
}
</style>