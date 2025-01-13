<template>
    <div class="flex flex-col items-center ">
        <div class="flex items-center gap-6 xl:h-[60px] lg:h-[45px] xl:my-6 lg:my-4">
            <div class="xl:w-[400px] lg:w-[180px] h-[3px] xl:h-[5px] bg-[#30def5] rounded"></div>
            <h2 class="text-gray-800 font-bold xl:text-[40px] lg:text-[30px] text-center">สถานที่น่าสนใจ</h2>

            
            <div class="xl:w-[400px] lg:w-[180px] h-[3px] xl:h-[5px] bg-[#30def5] rounded"></div>
        </div>
        <!-- แสดงสถานที่น่าสนใจ -->
        <div class="flex justify-center items-center">
            <div class="w-[1300px] h-[300px] flex justify-center items-center gap-3 my-2">
                <button class=" bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center"
                    @click="scrollPrev">
                    <Icon class="xl:w-[30px] lg:w-[18px] xl:h-[30px] lg:h-[18px] text-white"
                        name="mingcute:left-fill" />
                </button>
                <div class="slider-container overflow-hidden mx-auto w-full relative">
                    <div v-if="!listTravel.length" class="w-[1200px] grid grid-cols-3">
                        <div
                            class="flex justify-center items-center gap-2 w-[392px] h-[290px] bg-white border-[2px] border-sky-500 rounded-lg p-3 duration-[450ms]">
                            <div
                                class="w-20 h-20 border-8 border-t-[#22b6ed] border-gray-300 rounded-full animate-spin">
                            </div>
                        </div>
                        <div
                            class="flex justify-center items-center gap-2 w-[392px] h-[290px] bg-white border-[2px] border-sky-500 rounded-lg p-3 duration-[450ms]">
                            <div
                                class="w-20 h-20 border-8 border-t-[#22b6ed] border-gray-300 rounded-full animate-spin">
                            </div>
                        </div>
                        <div
                            class="flex justify-center items-center gap-2 w-[392px] h-[290px] bg-white border-[2px] border-sky-500 rounded-lg p-3 duration-[450ms]">
                            <div
                                class="w-20 h-20 border-8 border-t-[#22b6ed] border-gray-300 rounded-full animate-spin">
                            </div>
                        </div>
                    </div>
                    <div class="slider flex snap-x snap-mandatory overflow-x-scroll gap-3 hide-scrollbar"
                        ref="sliderRef">
                        <div v-for="(travl, index) in listTravel?.filter((e: any) => e.status == true)" :key="index"
                            
                            class="w-[392px] h-[290px] flex-shrink-0 snap-center hover:shadow-2xl rounded-lg overflow-hidden duration-[450ms] transition-shadow border-[2px] border-sky-400/50 hover:border-sky-500  p-3">
                            <nuxt-link :to="`/list-location/${travl.id}`">
                                <div class="w-[364px] h-[200px]">
                                    <img class="w-full h-full object-cover rounded-lg mb-3"
                                        :src="travl?.image_main?.url" alt="สถานที่น่าสนใจ" />
                                </div>
                                <div class="text-gray-800">
                                    <p class="text-gray-800 font-semibold text-[20px] mb-1 truncate">
                                        {{ travl.travel_title }}
                                    </p>
                                    <p class="text-[18px] text-gray-600">โซน: ยังไม่ระบุ</p>
                                </div>
                            </nuxt-link>
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
        <div class="dots flex justify-center my-2">
            <button v-for="index in totalPages" :key="'dot-' + index" :class="[
                'w-[14px] md:w-[18px] lg:w-[20px] h-[8px] md:h-[10px] lg:h-[13px] mx-[2px] md:mx-[3px] lg:mx-[4px] cursor-pointer rounded-[2px]',
                currentIndex === index - 1 ? 'bg-[#00AEEF]' : 'bg-[#abc5dd]'
            ]" @click="goToSlide(index - 1)"></button>
        </div>
    </div>
    <!-- <pre>{{ listTravel }}</pre> -->
</template>

<script lang="ts" setup>


import service from '~/service';
import Swal from 'sweetalert2';

definePageMeta({
    layout: "default",
});

const sliderRef = ref<HTMLDivElement | null>(null);
const currentIndex = ref(0);
const totalPages = ref(0);
let autoSlideInterval: NodeJS.Timeout | null = null; // ตัวแปรเก็บ setInterval

// คำนวณจำนวนหน้า
const updateTotalPages = () => {
    if (sliderRef.value && listTravel.value) {
        const cardsPerPage = Math.floor(sliderRef.value.offsetWidth / 390); // 390 คือความกว้างของการ์ด
        totalPages.value = Math.ceil(listTravel.value.length / cardsPerPage);
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

        // อัปเดตตำแหน่งสไลด์
        sliderRef.value.scrollTo({
            left: index * width,
            behavior: "smooth",
        });

        // ตั้งค่า currentIndex ให้ตรงกับ index ที่ถูกกด
        currentIndex.value = index;
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




const listTravel = ref<any>([]);
const getList = async () => {
    try {
        const resp: any = await service.travel.list({
            from: 0,
            size: 8,
            search: "",
        });
        // console.log(resp);
        listTravel.value = resp?.Data || null;
    } catch (error: any) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message,
        });
    }
};

onMounted(() => {
    getList();
    if (sliderRef.value) {
        sliderRef.value.addEventListener("scroll", updateCurrentIndex);
    }
    watch(listTravel, updateTotalPages); // อัปเดตจำนวนหน้าเมื่อข้อมูลเปลี่ยน
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

.hide-scrollbar {
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari, and Edge */
}
</style>