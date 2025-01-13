<template>
    <div class="w-full ">
        <div v-if="!promoteBanner.length" class="flex items-center justify-center gap-1 mt-6">
            <div
                class="flex justify-center items-center gap-2 w-[1200px] h-[175px] bg-white border-[2px] border-sky-500 rounded-lg p-3 duration-[450ms]">
                <div class="w-20 h-20 border-8 border-t-[#22b6ed] border-gray-300 rounded-full animate-spin">
                </div>
            </div>
        </div>
        <div v-else class="flex items-center justify-center gap-1 mt-6">
            <!-- ปุ่มกดเปลี่ยนหน้า -->
            <!-- <div @click="prevPage"
            class="h-[50px] w-[35px] bg-gray-400 hover:bg-gray-600 flex items-center justify-center cursor-pointer rounded-lg transition duration-200 "
            title="Previous Page">
            <Icon class="w-[20px] h-[20px] text-white" name="mingcute:left-fill" />
        </div> -->
            <div class="" v-for="bander in promoteBanner" key="index">
                <img v-for="photo in bander.images" key="p" class="w-[1200px] h-[175px]" :src="photo.url"
                    alt="PhotoBanner">
            </div>
            <!-- ปุ่มกดเปลี่ยนหน้า -->
            <!-- <div @click="nextPage"
            class="h-[50px] w-[35px] bg-gray-400 hover:bg-gray-600 flex items-center justify-center cursor-pointer rounded-lg transition duration-200 "
            title="Next Page">
            <Icon class="w-[20px] h-[20px] text-white" name="mingcute:right-fill" />
        </div> -->
        </div>

        <div class="xl:h-[30px] lg:h-[20px]  flex justify-center items-center ">
            <div v-for="(banner, index) in listPromote" :key="index" @click="setSlide(index)"
                class="xl:w-[20px] lg:w-[10px] xl:h-[13px] lg:h-[7px] mx-[4px] cursor-pointer rounded-[2px]"
                :class="{ 'bg-[#abc5dd]': currentPage !== index, 'bg-[#00AEEF]': currentPage === index }">
            </div>
        </div>


        <div class="w-full h-[170px] flex justify-center">
            <div class="w-[960px] flex items-center gap-5" v-for="img in listZoneID?.image" key="i">
                <!-- <div v-if="!listZoneID.length" class="w-[150px]">
                    <div
                        class="flex justify-center items-center gap-2 w-full h-full bg-white border-[2px] border-sky-500 rounded-lg p-3 duration-[450ms]">
                        <div class="w-[70px] h-[70px] border-8 border-t-[#22b6ed] border-gray-300 rounded-full animate-spin">
                        </div>
                    </div>
                </div> -->
                <div class="w-[150px]">
                    <img class="w-full h-full" :src="img.url" alt="Zone">
                </div>
                <p class="text-[20px] pb-6">ที่พักในโซน " <span class="text-gray-800 font-semibold ">{{
                    listZoneID?.zone_name }}</span> "</p>
            </div>
        </div>

        <!-- <div v-if="getHouse.length === 0" class="flex justify-center m-8">
            <div
                class="flex justify-center items-center gap-2 w-[1200px] h-[404px] bg-white border-[2px] border-sky-500 rounded-lg p-3 duration-[450ms]">
                <div class="w-20 h-20 border-8 border-t-[#22b6ed] border-gray-300 rounded-full animate-spin">
                </div>
            </div>
        </div>

        <div v-else-if="getHouse.length > 0" class="flex justify-center m-8">
            <div class="w-[1200px] grid grid-cols-3 gap-3 transition duration-1000 ">
                <div v-for="(home, index) in getHouse" :key="index"
                    class="hover:shadow-2xl duration-300 transition-shadow">
                    <CardHome :home="home" />
                </div>
            </div>
        </div>
        <div v-else>
            ไม่มีที่พักในโซนนี้
        </div> -->
        <div>
            <div v-if="!getHouse.length" class="flex justify-center m-8">
                <div
                    class="flex justify-center items-center gap-2 w-[1200px] h-[404px] bg-white border-[2px] border-sky-500 rounded-lg p-3 duration-[450ms]">
                    <div class="w-20 h-20 border-8 border-t-[#22b6ed] border-gray-300 rounded-full animate-spin"></div>
                    <p class="text-[#22b6ed] font-semibold text-lg">กำลังโหลดข้อมูล...</p>
                </div>
            </div>
            <div v-if="getHouse.length >= 1" class="flex justify-center m-8">
                <div class="w-[1200px] grid grid-cols-3 gap-3 transition duration-1000">
                    <div v-for="(home, index) in getHouse" :key="index"
                        class="hover:shadow-2xl duration-300 transition-shadow">
                        <CardHome :home="home" />
                    </div>
                </div>
            </div>
            <div v-if="getHouse.length < 0" class="flex justify-center m-8">
                <div
                    class="flex justify-center items-center w-[1200px] h-[404px] bg-white border-[2px] border-red-500 rounded-lg p-3">
                    <p class="text-red-500 font-semibold text-lg">ไม่มีที่พักในโซนนี้</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import service from '~/service';
import Swal from 'sweetalert2';

const route = useRoute();
const refId = ref<any>(route.params.id);
const listZoneID = ref<any>([]);
const listPromote = ref<any>([]);
const itemsPerPage = ref<number>(1);
const currentPage = ref<number>(0);
const getHouse = ref<any>([]);

// const query = ref<queryHome>({
//     search_by_zone: "",
// });


const promoteBanner = computed(() => {
    const start = currentPage.value * itemsPerPage.value;
    return listPromote.value.slice(start, start + itemsPerPage.value);
});
// คำนวณจำนวนหน้าทั้งหมด
const totalPages = computed(() => Math.ceil(listPromote.value.length / itemsPerPage.value));

// ฟังก์ชันเปลี่ยนหน้าไปยังหน้าถัดไป (วนรอบเมื่อถึงหน้าสุดท้าย)
const nextPage = () => {
    currentPage.value = (currentPage.value + 1) % totalPages.value;
};

// ฟังก์ชันเปลี่ยนหน้ากลับไปยังหน้าก่อนหน้า (วนรอบเมื่อถึงหน้าแรก)
const prevPage = () => {
    currentPage.value = (currentPage.value - 1 + totalPages.value) % totalPages.value;
};

const setSlide = (index: number) => {
    currentPage.value = index;
};

const nextSlide = () => {
    currentPage.value = (currentPage.value + 1) % listPromote.value.length;
};


//Auto-slide 
let slideInterval: any;

const startAutoSlide = () => {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 10000); // 1000 ตือ 1 วิ
};

const stopAutoSlide = () => {
    clearInterval(slideInterval);
};

const getListZoneID = async () => {
    try {
        const resp: any = await service.travel.listZoneID({
            id: refId.value,
        });
        console.log(resp);
        listZoneID.value = resp?.Data || null;
    } catch (error: any) {
        console.log(error);
    }
}
const getlistPromote = async () => {
    try {
        const resp1: any = await service.promote.listPromote({
            from: 0,
            size: 999,
            search: "",
            type: "ส่วนย่อย",
        });
        console.log(resp1);
        listPromote.value = resp1?.Data || null;
    } catch (error: any) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message,
        });
    }
};

// const getListZoneID = async () => {
//     try {
//         const resp: any = await service.listhome.getListZoneID({
//             id: refId.value,
//         });
//         getHouse.value = resp2?.Data;
//         console.log("resp", resp);
//         console.log("get", getHouse);
//     } catch (error: any) {
//         console.log(error);
//     }
// };

const getListZone = async () => {
    try {
        const resp2: any = await service.listhome.getListZoneID({
            from: 0,
            size: 0,
            search_by_zone: refId.value,

        });

        getHouse.value = resp2?.Data || null;
        console.log("resp", resp2);
    } catch (error: any) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message,
        });
    }
};


onMounted(() => {
    getListZoneID();
    getlistPromote();
    startAutoSlide();
    getListZone();
});

onBeforeUnmount(() => {
    stopAutoSlide();
});
</script>