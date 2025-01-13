<template>
    <div class="flex justify-center items-center">
        <div class="flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 h-[40px] md:h-[50px]">
            <div class="w-[120px] md:w-[220px] lg:w-[300px] xl:w-[400px] h-[2px] md:h-[4px] lg:h-[5px] bg-[#30def5] rounded"></div>
            <h2 class="text-gray-800 font-bold text-[16px] md:text-[24px] lg:text-[40px] text-center">
                ที่พักที่น่าสนใจ
            </h2>
            <div class="w-[120px] md:w-[220px] lg:w-[300px] xl:w-[400px] h-[2px] md:h-[4px] lg:h-[5px] bg-[#30def5] rounded"></div>
        </div>
    </div>

    <div class="flex justify-center items-center">
        <div class="lg:w-[930px] xl:w-[1300px] flex justify-center items-center my-2">
            <!-- ปุ่มเลื่อนซ้าย -->
            <button class="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center" @click="scrollPrev">
                <Icon class="xl:w-[30px] lg:w-[18px] xl:h-[30px] lg:h-[18px] text-white" name="mingcute:left-fill" />
            </button>

            <!-- สไลเดอร์คอนเทนเนอร์ -->
            <div
                class="slider-container lg:overflow-hidden mx-auto lg:w-[808px] xl:w-[1200px] lg:h-[400px] xl:h-[420px] relative">
                <!-- สไลเดอร์ -->
                <div
                    class="slider flex snap-x snap-mandatory overflow-x-auto scroll-smooth gap-[10px]"
                    ref="sliderRef"
                    @mouseenter="pauseAutoSlide"
                    @mouseleave="startAutoSlide">
                    <!-- การ์ด -->
                    <div v-if="listHome && listHome.length > 0">
                        <div
                            v-for="(home, index) in listHome"
                            :key="index"
                            class="flex-shrink-0 snap-center hover:shadow-2xl rounded-lg overflow-hidden transition-shadow duration-300"
                            :class="screenClass">
                            <CardHome :home="home" />
                        </div>
                    </div>
                    <div v-else>
                        <p class="text-center text-gray-500">ไม่มีข้อมูลที่พัก</p>
                    </div>
                </div>
            </div>

            <!-- ปุ่มเลื่อนขวา -->
            <button class="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center" @click="scrollNext">
                <Icon class="xl:w-[30px] lg:w-[18px] xl:h-[30px] lg:h-[18px] text-white" name="mingcute:right-fill" />
            </button>
        </div>
    </div>

    <div class="dots hidden xl:flex justify-center mt-2">
        <button
            v-for="index in totalPages"
            :key="'dot-' + index"
            :class="[
                'w-[14px] md:w-[18px] lg:w-[20px] h-[8px] md:h-[10px] lg:h-[13px] mx-[2px] md:mx-[3px] lg:mx-[4px] cursor-pointer rounded-[2px]',
                currentIndex === index - 1 ? 'bg-[#00AEEF]' : 'bg-[#abc5dd]'
            ]"
            @click="goToSlide(index - 1)"></button>
    </div>
</template>

<script lang="ts" setup>
import service from "~/service";
import Swal from "sweetalert2";
import type { House } from "~/models/home.model";
import { ref, computed, onMounted, onUnmounted } from "vue";

// Refs
const sliderRef = ref<HTMLDivElement | null>(null);
const $screen = ref<number | null>(null); // Screen width tracker
const currentIndex = ref(0);
const totalPages = ref(0);
const cardsPerPage = ref(1);
let autoSlideInterval: NodeJS.Timeout | null = null;

// Homes List
const listHome = ref<House[]>([]);

// ฟังก์ชันอัปเดตจำนวนการ์ดต่อหน้า
const updateCardsPerPage = () => {
    if (typeof window !== "undefined" && sliderRef.value) {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1280) {
            cardsPerPage.value = 3; // XL
        } else if (screenWidth >= 1024) {
            cardsPerPage.value = 2; // LG
        } else if (screenWidth >= 768) {
            cardsPerPage.value = 2; // MD
        } else {
            cardsPerPage.value = 1; // ต่ำกว่า MD
        }
        totalPages.value = Math.ceil(listHome.value.length / cardsPerPage.value);
    }
};

// ฟังก์ชันเลื่อนสไลด์ถัดไป
const scrollNext = () => {
    if (sliderRef.value) {
        const scrollLeft = sliderRef.value.scrollLeft;
        const width = sliderRef.value.offsetWidth;

        if (scrollLeft + width >= sliderRef.value.scrollWidth) {
            sliderRef.value.scrollTo({ left: 0, behavior: "smooth" });
        } else {
            sliderRef.value.scrollTo({ left: scrollLeft + width, behavior: "smooth" });
        }
    }
};

// ฟังก์ชันเลื่อนสไลด์ก่อนหน้า
const scrollPrev = () => {
    if (sliderRef.value) {
        const scrollLeft = sliderRef.value.scrollLeft;
        const width = sliderRef.value.offsetWidth;

        if (scrollLeft <= 0) {
            sliderRef.value.scrollTo({ left: sliderRef.value.scrollWidth - width, behavior: "smooth" });
        } else {
            sliderRef.value.scrollTo({ left: scrollLeft - width, behavior: "smooth" });
        }
    }
};

// ฟังก์ชันเริ่มการเลื่อนอัตโนมัติ
const startAutoSlide = () => {
    if (!autoSlideInterval) {
        autoSlideInterval = setInterval(() => {
            scrollNext();
        }, 10000); // 10 วินาที
    }
};

// ฟังก์ชันหยุดการเลื่อนอัตโนมัติ
const pauseAutoSlide = () => {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
};

const goToSlide = (index: number) => {
    if (sliderRef.value) {
        const width = sliderRef.value.offsetWidth;
        sliderRef.value.scrollTo({
            left: index * width,
            behavior: "smooth",
        });
    }
};

// ฟังก์ชันดึงข้อมูลบ้าน
const getlistHome = async () => {
    try {
        const resp1: any = await service.listhome.listHome({ from: 0, size: 0 });
        listHome.value = resp1?.Data || [];
    } catch (error: any) {
        Swal.fire({ icon: "error", title: "Error", text: error.message });
    }
};

const screenClass = computed(() => {
    if ($screen.value === null) return {}; // Return empty object if $screen is null
    const width = $screen.value;
    if (width < 768) return { 'w-full': true };
    if (width >= 768 && width < 1024) return { 'w-1/2': true };
    if (width >= 1024 && width < 1280) return { 'lg:w-1/2': true };
    if (width >= 1280) return { 'xl:w-1/3': true };
    return {};
});

// Lifecycle Hooks
onMounted(() => {
    getlistHome();
    if (typeof window !== "undefined") {
        $screen.value = window.innerWidth;
        updateCardsPerPage();
        window.addEventListener("resize", updateCardsPerPage);
    }
    startAutoSlide(); // Start auto-slide on mount
});

onUnmounted(() => {
    if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateCardsPerPage);
    }
    pauseAutoSlide(); // Clear auto-slide interval on unmount
});
</script>

<style scoped>
.slider {
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
}

.slider-container button {
    z-index: 10;
}

.dots button {
    transition: background-color 0.3s;
}
</style>
