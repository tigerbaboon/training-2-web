<template>
     <div v-if="!listPromote.length"
          class="flex justify-center items-center gap-2 w-full h-[590px] bg-white border-[2px] border-sky-500 rounded-lg duration-[450ms]">
          <div class="w-20 h-20 border-8 border-t-[#22b6ed] border-gray-300 rounded-full animate-spin">
          </div>
     </div>
     <div v-else v-for="(banner, i) in promoteBanner" :key="i">
          <div class="relative w-full h-[150px] md:h-[320px] lg:h-[400px] xl:h-[590px]">
           
               <a :href="banner?.link" target="_blank">
                    <img class="w-full h-full " :src="banner?.image?.url" alt="Promot Banner" />
               </a>

               <div class="absolute top-[62px] md:top-[150px] lg:top-[190px] xl:top-[260px] left-2 md:left-4 lg:left-3 w-[20px] md:w-[30px] lg:w-[40px] h-[20px] md:h-[30px] lg:h-[40px] bg-gray-800 hover:bg-gray-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-all duration-200 ease-in-out"
                    title="Previous Page">
                    <Icon @click="prevPage"
                         class="w-[12px] md:w-[18px] lg:w-[20px] h-[12px] md:h-[18px] lg:h-[20px] text-white"
                         name="mingcute:left-fill" />
               </div>

               <div class="absolute top-[62px] md:top-[150px] lg:top-[190px] xl:top-[260px] right-2 md:right-4 lg:right-3 w-[20px] md:w-[30px] lg:w-[40px] h-[20px] md:h-[30px] lg:h-[40px] bg-gray-800 hover:bg-gray-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-all duration-200 ease-in-out"
                    title="Next Page">
                    <Icon @click="nextPage"
                         class="w-[12px] md:w-[18px] lg:w-[20px] h-[12px] md:h-[18px] lg:h-[20px] text-white"
                         name="mingcute:right-fill" />
               </div>
          </div>
       
     </div>
     <div class="h-[18px] md:h-[25px] lg:h-[30px] flex justify-center items-center ">
          <div v-for="(banner, index) in listPromote" :key="index" @click="setSlide(index)"
               class="w-[14px] md:w-[18px] lg:w-[20px] h-[8px] md:h-[10px] lg:h-[13px] mx-[2px] md:mx-[3px] lg:mx-[4px] cursor-pointer rounded-[2px]"
               :class="{ 'bg-[#abc5dd]': currentPage !== index, 'bg-[#00AEEF]': currentPage === index }">
          </div>
     </div>
</template>

<script lang="ts" setup>
import service from '~/service';
import Swal from 'sweetalert2';

const listPromote = ref<any>([]);
const itemsPerPage = ref<number>(1);
const currentPage = ref<number>(0);

//สไลด์รูปโฆษณา
const promoteBanner = computed(() => {
     const start = currentPage.value * itemsPerPage.value;
     return listPromote.value.slice(start, start + itemsPerPage.value);
});
const totalPages = computed(() => Math.ceil(listPromote.value.length / itemsPerPage.value));
const nextPage = () => {
     currentPage.value = (currentPage.value + 1) % totalPages.value;
};
const prevPage = () => {
     currentPage.value = (currentPage.value - 1 + totalPages.value) % totalPages.value;
};
const setSlide = (index: number) => {
     currentPage.value = index;
};
const nextSlide = () => {
     currentPage.value = (currentPage.value + 1) % listPromote.value.length;
};
// Auto-slide 
let slideInterval: any;

const startAutoSlide = () => {
     slideInterval = setInterval(() => {
          nextSlide();
     }, 5000); // 1000 ตือ 1 วิ
};

const stopAutoSlide = () => {
     clearInterval(slideInterval);
};

const getlistPromote = async () => {
     try {
          const resp1: any = await service.promote.listPromote({
               from: 0,
               size: 999,
               search: "",
               type: "หน้าหลัก",
          });
          // console.log(resp1);
          listPromote.value = resp1?.Data || null;
     } catch (error: any) {
          Swal.fire({
               icon: "error",
               title: "Error",
               text: error.message,
          });
     }
};

onMounted(() => {
     getlistPromote();
     startAutoSlide();
});

onBeforeUnmount(() => {
     stopAutoSlide();
});
</script>