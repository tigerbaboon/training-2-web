<template>
    <div class="flex justify-center m-8">
        <div class="w-[1200px]">
            <p class="ml-10">ผลการค้นหาสำหรับ : <span>{{ query.search_by_name }}</span></p>
        </div>
    </div>

    <div class="flex justify-center m-8 h-auto">
        <div v-if="!listHome.length" class="w-[1200px] h-[640px]">
            <div class="flex justify-center items-center gap-2 h-full">
                <div class="w-4 h-4 rounded-full bg-[#22b6ed] animate-bounce"></div>
                <div class="w-4 h-4 rounded-full bg-[#22b6ed] animate-bounce [animation-delay:-.3s]"></div>
                <div class="w-4 h-4 rounded-full bg-[#22b6ed] animate-bounce [animation-delay:-.5s]"></div>
            </div>
        </div>
        <div v-else class="w-[1200px] grid grid-cols-3 gap-3 transition duration-1000 ">
            <div v-for="(home, index) in listHome" :key="index" class="hover:shadow-2xl duration-300 transition-shadow">
                <CardHome :home="home" />
            </div>
        </div>
    </div>
    <!-- <pre>{{ listHome }}</pre> -->
</template>

<script lang="ts" setup>
import service from "~/service";
import Swal from "sweetalert2";
import type { House } from "~/models/home.model";
import type { queryHome } from "~/models/search.model";
definePageMeta({
    layout: "default",
});
const listHome = ref<House[]>([]);
const route = useRoute();
const query = ref<queryHome>({
    search_by_name: "",
    search_by_zone: "",
    price_start: 0,
    price_end: 0,
});


const getlistHome = async () => {
    try {
        const resp1: any = await service.listhome.listHome({
            from: 0,
            size: 0,
            search_by_name: query.value.search_by_name,
            search_by_zone: query.value.search_by_zone,
            price_start: query.value.price_start,
            price_end: query.value.price_end,
        });

        listHome.value = resp1?.Data || null;
    } catch (error: any) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message,
        });
    }
};

watch(
    () => route.query,
    () => {
        query.value = {
            search_by_name: route.query.search as string,
            search_by_zone: route.query.zone_Id as string,
            price_start: parseInt(route.query.minPrice as string),
            price_end: parseInt(route.query.maxPrice as string),
        };
        getlistHome();
    },
    { immediate: true }
)

onMounted(() => {
    query.value = {
        search_by_name: route.query.search as string,
        search_by_zone: route.query.zone_Id as string,
        price_start: parseInt(route.query.minPrice as string),
        price_end: parseInt(route.query.maxPrice as string),
    };
    getlistHome();
});

</script>