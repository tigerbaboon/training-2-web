<template>
    <TopNav/>
    <div class="w-full bg-slate-300 flex justify-center" v-for="(list, index) in lists" :key="index">
        <div class="flex w-[1400px] ">
            <div class="w-[550px] bg-slate-400">
                <div class="w-full h-[60px] bg-blue-300 grid grid-cols-4 items-center" >    
                    <div class="flex justify-center items-center" v-for="heads in list.head">
                        <nuxt-link :to="heads.link">
                        {{ heads.title}}
                        </nuxt-link>
                    </div>
                </div>
                <slot></slot>
                <!-- <div class="w-full h-[60px] bg-gray-100 grid grid-cols-4 items-center text-center" v-for="(heads, index) in lists.head" :key="index">
                    {{ heads.title }}       
                </div> -->
                <!-- <div class="w-full flex flex-col items-center">
                    <h1 class="text-[25px] py-2">กรอกข้อมูลที่พัก</h1>
                    <div>
                        <label for="ประเภทการขาย" class="block mb-2  text-gray-900 text-[18px]">ประเภทการขาย</label>
                        <select id="ประเภทการขาย" class="w-[270px] bg-gray-50 text-gray-800">
                            <option v-for="(categoryItem, i) in list.category" :key="i" :value="categoryItem.sell"
                                class="text-black">
                                {{ categoryItem.sell }}
                            </option>
                        </select>
                    </div>
                </div> -->
            </div>
            <div class="w-full bg-slate-800"></div>
        </div>
    </div>
    <FootTer/>
</template>

<script lang="ts" setup>
const lists = ref<any>([
    {
        head: [
            { title: "ข้อมูล", link: "/fromhome/fromdetailhome", },
            { title: "รูปภาพ", link: "", },
            { title: "แผนที่", link: "", },
            { title: "ยืนยันข้อมูล", link: "", },
        ],
        category: [
            { sell: "เช่า" },
            { sell: "ขาย" },
            { sell: "ขายและเช่า" },
        ],
        categoryhome: [
            { homelist: "บ้านพัก" },
            { homelist: "คอนโด" },
            { homelist: "บ้านเดียว" },
            { homelist: "บ้านแฝด" },
        ],
        zone: [
            { listzone: "บึงแก่นนคร" },
            { listzone: "มอภาค" },
            { listzone: "หลังมอ" },
            { listzone: "กังสดาน" },
        ],
        device: [
            { select: "เตียง" },
            { select: "ตู้เสื้อผ้า" },
            { select: "โต๊ะเครื่องแป้ง" },
            { select: "โต๊ะทำงาน" },
            { select: "แอร์" },
            { select: "พัดลม" },
            { select: "ตู้เย็น" },
            { select: "ลานจอดรถ" },
            { select: "เครื่องทำน้ำอุ่น" },
            { select: "เคเบิ้ล" },
            { select: "ทีวี" },
            { select: "เครื่องกรองน้ำ" },
            { select: "ซิงค์ล้างจาน" },
        ],
    },
]);
</script>