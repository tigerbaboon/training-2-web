<template>
    <div class="bg-white  border-[2px] border-sky-400/50 hover:border-sky-500 rounded-lg p-3 duration-[450ms]">
        <nuxt-link class="relative" :to="`/homedetail/${home?.id}`">
            <div class="w-[364px] h-[200px]">
               <img class="w-full h-full object-cover rounded-md" :src="home?.images_main?.url" alt="Home Image" /> 
            </div>
            
            <div class="grid grid-cols-2 mt-2">
                <div class="grid grid-cols-1 gap-1">
                    <div class="absolute top-[135px] right-0 w-10 hover:w-[200px] h-[30px] bg-sky-400 flex justify-center items-center rounded-[3px] text-white font-medium overflow-hidden transition-all duration-700 group"
                        style="transform-origin: left">
                        <Icon
                            class="w-[20px] h-[20px] font-semibold group-hover:flex group-hover:justify-end transition-opacity duration-700 "
                            name="line-md:phone-call-loop" />
                        <span
                            class="text-[16px] font-semibold pl-2 hidden group-hover:flex group-hover:justify-end group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap">
                            {{ home.contact_info?.phone_number }}
                        </span>
                    </div>
                    <div class="absolute top-[170px] right-0 w-10 hover:w-[200px] h-[30px] bg-[#0ac857] flex justify-center items-center rounded-[3px] text-white font-medium overflow-hidden transition-all duration-700 group"
                        style="transform-origin: left">
                        <Icon
                            class="w-[20px] h-[20px] group-hover:flex group-hover:justify-end transition-opacity duration-700 "
                            name="fontisto:line" />
                        <span
                            class="text-[16px] font-semibold pl-2 hidden group-hover:flex group-hover:justify-end group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap">
                            {{ home.contact_info?.line_id }}
                        </span>
                    </div>
                    <div :class="[
                        'flex justify-end items-end absolute left-0 top-9',
                        { hidden: !home.is_recommend },
                    ]">
                        <p class="flex items-center gap-1 text-white bg-gradient-to-r from-[#ca5a50] via-[#db7843] to-[#f09f33] px-2 py-[2px] text-sm">
                            <Icon class="text-[#f0f336] w-[18px] h-[18px]" name="heroicons-solid:star" />
                            แนะนำ
                        </p>
                    </div>
                    <span
                        :class="[
                            'flex items-center text-white font-extrabold text-[16px] px-3 py-1 rounded-sm absolute left-0 top-0',
                            home?.sell_type === 'ขาย' ? 'bg-[#34cf32] ' : home?.sell_type === 'เช่า' ? 'bg-orange-500' : home?.sell_type === 'ขายและเช่า' ? 'bg-sky-500' : '',]">
                        <Icon class="mr-1 w-[18px] h-[18px]" name="iconoir:home-sale" />
                        {{ home?.sell_type }}
                    </span>
                </div>
            </div>
        </nuxt-link>
        <p class="text-gray-800 font-semibold text-[20px]  truncate hover:text">
            {{ home?.house_name }}
        </p>
        <p class="text-gray-600 text-[14px] truncate">
            {{ home?.address }}
        </p>
        <div class="flex gap-1 mt-1">
            <span class="px-1 py-[1px] flex items-center border-[#00AEEF] border rounded-[4px]  text-[#00AEEF]">
                <Icon class="w-4 h-4 mr-1" name="ix:zone" />
                <span class="text-[12px] font-semibold">{{ home?.zone?.zone_name }} </span>
            </span>
            <span class="px-1 py-[1px] flex items-center border-[#00AEEF] border rounded-[4px]  text-[#00AEEF]">
                <Icon v-if="home?.house_type === 'คอนโด'" class="w-4 h-4 mr-1" name="ix:building2" />
                <Icon v-if="home?.house_type === 'บ้านพัก'" class="w-4 h-4 mr-1" name="typcn:home-outline" />
                <Icon v-if="home?.house_type === 'บ้านเดียว'" class="w-4 h-4 mr-1" name="hugeicons:house-03" />
                <span class="text-[12px] font-semibold">{{ home?.house_type }} </span>
            </span>
        </div>

        <div class="flex gap-2  text-gray-600 text-[12px] my-1 mt-1">
            <div
                class="flex items-center justify-center gap-1 text-sky-900 font-bold text-[12px]">
                <Icon class=" w-[16px] h-[16px]" name="ion:bed-outline" />
                <p>{{ home?.number_of_rooms }} ห้องนอน</p>
            </div> |
            <div
                class="flex items-center justify-center gap-1 text-sky-900 font-bold text-[12px]">
                <Icon class=" w-[16px] h-[16px]" name="mdi:bathroom" />
                <p>{{ home?.number_of_bathrooms }} ห้องน้ำ</p>
            </div> |
            <div
                class="flex items-center justify-center gap-1 text-sky-900 font-bold text-[12px]">
                <Icon class=" w-[16px] h-[16px]" name="material-symbols-light:background-grid-small-outline" />
                <p>{{ home?.size }} ตร.ม.</p>
            </div> |
            <div
                class="flex items-center justify-center gap-1 text-sky-900 font-bold text-[12px]">
                <Icon class=" w-[16px] h-[16px]" name="ri:stairs-line" />
                <p>{{ home?.floor }} ชััน</p>
            </div>
        </div>
        <div class="grid grid-cols-2">
            <div class="flex items-end">
                <div>
                    <p class="text-[14px] text-sky-500">ผู้ลงประกาศ :</p>
                    <p class="text-[16px] text-gray-700 truncate">
                        {{ home.contact_info?.first_name }}
                        {{ home.contact_info?.last_name }}
                    </p>
                </div>
            </div>
            <div>
                <div class="flex justify-end items-end">
                    <p v-if="home.sell_type === 'ขาย'" class="text-[#34cf32] font-bold text-[22px]">
                        <span class="t">{{ formatNumber(home?.price, 0) }}</span> <span
                            class="font-bold text-[16px]">บาท</span>
                    </p>
                    <p v-if="home.sell_type === 'เช่า' || home?.sell_type === 'ขายและเช่า'"
                        class="text-[#34cf32] font-bold text-[22px]">
                        <span class="t">{{ formatNumber(home?.price, 0) }}</span> <span
                            class="font-bold text-[15px]">บาท/เดือน</span>
                    </p>
                </div>
                <div class="flex justify-end">
                    <nuxt-link :to="`/homedetail/${home?.id}`"
                        class="px-3 z-30 py-1 bg-[#00AEEF] rounded-[3px] text-white font-semibold relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-sky-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-md">
                        รายละเอียด
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { House } from '~/models/home.model';



const props = defineProps({
    home: {
        type: Object as PropType<House>,
        required: true,
    },
})

</script>