<template>
     <div class="flex justify-center items-center my-10">
          <div class="flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 h-[40px] md:h-[50px] lg:h-[60px] ">
               <div
                    class="w-[120px] md:w-[220px] lg:w-[300px] xl:w-[400px] h-[2px] md:h-[4px] lg:h-[5px] bg-[#30def5] rounded">
               </div>
               <h2 class="text-gray-800 font-bold text-[16px] md:text-[24px] lg:text-[40px] text-center">
                    ที่พักที่น่าสนใจ
               </h2>
               <div
                    class="w-[120px] md:w-[220px] lg:w-[300px] xl:w-[400px] h-[2px] md:h-[4px] lg:h-[5px] bg-[#30def5] rounded">
               </div>
          </div>
     </div>
     <div class="flex justify-center items-center">
          <div class="w-[1300px] flex justify-center items-center gap-3 my-2 ">
               <button class="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center"
                    @click="scrollPrev">
                    <Icon class="xl:w-[30px] lg:w-[18px] xl:h-[30px] lg:h-[18px] text-white"
                         name="mingcute:left-fill" />
               </button>
               <div class="slider-container overflow-hidden mx-auto w-[1200px] h-[420px] relative">
                    <div v-if="!listHome.length" class="w-[1200px] grid grid-cols-3">
                         <div
                              class="flex justify-center items-center gap-2 w-[392px] h-[404px] bg-white border-[2px] border-sky-500 rounded-lg p-3 duration-[450ms]">
                              <div
                                   class="w-20 h-20 border-8 border-t-[#22b6ed] border-gray-300 rounded-full animate-spin">
                              </div>
                         </div>
                         <div
                              class="flex justify-center items-center gap-2 w-[392px] h-[404px] bg-white border-[2px] border-sky-500 rounded-lg p-3 duration-[450ms]">
                              <div
                                   class="w-20 h-20 border-8 border-t-[#22b6ed] border-gray-300 rounded-full animate-spin">
                              </div>
                         </div>
                         <div
                              class="flex justify-center items-center gap-2 w-[392px] h-[404px] bg-white border-[2px] border-sky-500 rounded-lg p-3 duration-[450ms]">
                              <div
                                   class="w-20 h-20 border-8 border-t-[#22b6ed] border-gray-300 rounded-full animate-spin">
                              </div>
                         </div>
                    </div>
                    <div v-else class="slider flex snap-x snap-mandatory overflow-x-auto scroll-smooth gap-[10px]"
                         ref="sliderRef" @mouseenter="pauseAutoSlide" @mouseleave="startAutoSlide">
                         <div v-for="(home, index) in listHome" :key="index"
                              class="w-[392px] h-[420px] flex-shrink-0 snap-center hover:shadow-2xl rounded-lg overflow-hidden duration-300 transition-shadow">
                              <CardHome :home="home" />
                         </div>
                    </div>
               </div>
               <button class="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center"
                    @click="scrollNext">
                    <Icon class="xl:w-[30px] lg:w-[18px] xl:h-[30px] lg:h-[18px] text-white"
                         name="mingcute:right-fill" />
               </button>
          </div>
     </div>
     <div class="dots flex justify-center mt-8">
          <button v-for="index in totalPages" :key="'dot-' + index" :class="[
               'w-[14px] md:w-[18px] lg:w-[20px] h-[8px] md:h-[10px] lg:h-[13px] mx-[2px] md:mx-[3px] lg:mx-[4px] cursor-pointer rounded-[2px]',
               currentIndex === index - 1 ? 'bg-[#00AEEF]' : 'bg-[#abc5dd]'
          ]" @click="goToSlide(index - 1)"></button>
     </div>
</template>

<script lang="ts" setup>
import service from "~/service";
import Swal from "sweetalert2";
import type { House } from "~/models/home.model";
import { ref, onMounted, watch } from "vue";

const sliderRef = ref<HTMLDivElement | null>(null);
const currentIndex = ref(0);
const totalPages = ref(0);
let autoSlideInterval: NodeJS.Timeout | null = null; // ตัวแปรเก็บ setInterval

// คำนวณจำนวนหน้า
const updateTotalPages = () => {
     if (sliderRef.value && listHome.value) {
          const cardsPerPage = Math.floor(sliderRef.value.offsetWidth / 390); // 390 คือความกว้างของการ์ด
          totalPages.value = Math.ceil(listHome.value.length / cardsPerPage);
     }
};

// เลื่อนไปหน้าถัดไป (วนกลับเมื่อถึงหน้าสุดท้าย)
const scrollNext = () => {
     if (sliderRef.value) {
          const scrollLeft = sliderRef.value.scrollLeft;
          const width = sliderRef.value.offsetWidth;

          if (scrollLeft + width >= sliderRef.value.scrollWidth) {
               // ถ้าถึงหน้าสุดท้าย ให้กลับไปหน้าแรก
               sliderRef.value.scrollTo({
                    left: 0,
                    behavior: "smooth",
               });
          } else {
               // เลื่อนไปหน้าถัดไป
               sliderRef.value.scrollTo({
                    left: scrollLeft + width,
                    behavior: "smooth",
               });
          }
     }
};

// เลื่อนไปหน้าก่อนหน้า (วนกลับเมื่อถึงหน้าแรก)
const scrollPrev = () => {
     if (sliderRef.value) {
          const scrollLeft = sliderRef.value.scrollLeft;
          const width = sliderRef.value.offsetWidth;

          if (scrollLeft <= 0) {
               // ถ้าถึงหน้าแรก ให้เลื่อนไปหน้าสุดท้าย
               sliderRef.value.scrollTo({
                    left: sliderRef.value.scrollWidth - width,
                    behavior: "smooth",
               });
          } else {
               // เลื่อนไปหน้าก่อนหน้า
               sliderRef.value.scrollTo({
                    left: scrollLeft - width,
                    behavior: "smooth",
               });
          }
     }
};

// อัปเดตหน้าปัจจุบัน
const updateCurrentIndex = () => {
     if (sliderRef.value) {
          const scrollLeft = sliderRef.value.scrollLeft;
          const width = sliderRef.value.offsetWidth;
          currentIndex.value = Math.round(scrollLeft / width);
     }
};

// ไปยังสไลด์ที่ระบุ
const goToSlide = (index: number) => {
     if (sliderRef.value) {
          const width = sliderRef.value.offsetWidth;
          sliderRef.value.scrollTo({
               left: index * width,
               behavior: "smooth",
          });
     }
};

// เริ่มการเลื่อนอัตโนมัติ
const startAutoSlide = () => {
     if (!autoSlideInterval) {
          autoSlideInterval = setInterval(() => {
               if (sliderRef.value) {
                    const scrollLeft = sliderRef.value.scrollLeft;
                    const width = sliderRef.value.offsetWidth;

                    // ตรวจสอบถ้าถึงหน้าสุดท้ายแล้ว ให้กลับไปหน้าแรก
                    if (scrollLeft + width >= sliderRef.value.scrollWidth) {
                         sliderRef.value.scrollTo({ left: 0, behavior: "smooth" });
                    } else {
                         scrollNext();
                    }
               }
          }, 10000); // ตั้งเวลาเลื่อนทุก 3 วินาที
     }
};

// หยุดการเลื่อนอัตโนมัติ
const pauseAutoSlide = () => {
     if (autoSlideInterval) {
          clearInterval(autoSlideInterval);
          autoSlideInterval = null;
     }
};



const listHome = ref<House[]>([]);

const getlistHome = async () => {
     try {
          const resp1: any = await service.listhome.listHome({
               from: 0,
               size: 0,
          });

          listHome.value = resp1?.Data || null;
          // console.log("เช็ค", listHome.value);
     } catch (error: any) {
          Swal.fire({
               icon: "error",
               title: "Error",
               text: error.message,
          });
     }
};


// Lifecycle hooks
onMounted(() => {
     getlistHome();
     if (sliderRef.value) {
          sliderRef.value.addEventListener("scroll", updateCurrentIndex);
     }
     watch(listHome, updateTotalPages); // อัปเดตจำนวนหน้าเมื่อข้อมูลเปลี่ยน
     startAutoSlide(); // เริ่มเลื่อนอัตโนมัติ
});

onUnmounted(() => {
     if (sliderRef.value) {
          sliderRef.value.removeEventListener("scroll", updateCurrentIndex);
     }
     pauseAutoSlide(); // หยุดเลื่อนเมื่อ component ถูกทำลาย
});

</script>


<style scoped>
@keyframes marquee {
     0% {
          transform: translateX(100%);
     }

     100% {
          transform: translateX(-100%);
     }
}

.animate-marquee {
     animation: marquee 40s linear infinite;
}

.slider {
     scroll-snap-type: x mandatory;
     -webkit-overflow-scrolling: touch;
}

.slider-container button {
     z-index: 10;
     /* ป้องกันปุ่มโดนบัง */
}

.dots button {
     transition: background-color 0.3s;
}
</style>
