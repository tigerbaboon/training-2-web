<template>
    <div class="w-full flex flex-col items-center" v-for="(list, d) in lists" :key="d">
        <h1 class="text-[25px] py-2">กรอกข้อมูลที่พัก</h1>
        <div>
            <label for="ประเภทการขาย" class="block  text-gray-900 text-[18px]">ประเภทการขาย</label>
            <select id="ประเภทการขาย" class="w-[320px] h-[30px] text-[18px] bg-gray-50 text-gray-800 ">
                <option v-for="(categoryItem, i) in list.category" :key="i" :value="categoryItem.sell"
                    class="text-black ">
                    {{ categoryItem.sell }}
                </option>
            </select>
            <label for="ประเภทที่พัก" class="block  text-gray-900 text-[18px]">ประเภทที่พัก</label>
            <select id="ประเภทที่พัก" class="w-[320px] h-[30px] text-[18px] bg-gray-50 text-gray-800 ">
                <option v-for="(categoryItem, i) in list.categoryhome" :key="i" :value="categoryItem.homelist"
                    class="text-black ">
                    {{ categoryItem.homelist }}
                </option>
            </select>
            <label for="โซนที่พัก" class="block  text-gray-900 text-[18px]">โซนที่พัก</label>
            <select id="โซนที่พัก" class="w-[320px] h-[30px] text-[18px] bg-gray-50 text-gray-800 ">
                <option v-for="(zones, i) in list.zone" :key="i" :value="zones.listzone" class="text-black ">
                    {{ zones.listzone }}
                </option>
            </select>
            <label for="ชื่อโครงการ" class="block  text-gray-900 text-[18px]">ชื่อโครงการ</label>
            <input id="ชื่อโครงการ" type="text" placeholder="ระบุชื่อโครงการ..." class="w-[320px] h-[30px]">
        </div>
        <div class="grid grid-cols-2 gap-x-4  w-[320px]">
            <div class="">
                <label for="พื้นที่ใช้สอย (ตร.ม.)" class="block  text-gray-900 text-[18px]">พื้นที่ใช้สอย(ตร.ม.)</label>
                <input id="พื้นที่ใช้สอย (ตร.ม.)" type="number" min="0" placeholder="ตร.ม." class="w-full h-[30px]">
            </div>
            <div>
                <label for="ชั้น" class="block  text-gray-900 text-[18px]">ชั้น</label>
                <input id="ชั้น" type="number" min="0" placeholder="จำนวนชัั้น" class="w-full h-[30px]">
            </div>
            <div class="">
                <label for="จำนวนห้องนอน" class="block  text-gray-900 text-[18px]">จำนวนห้องนอน</label>
                <input id="จำนวนห้องนอน (ตร.ม.)" type="number" min="0" placeholder="ระบุจำนวนห้อง"
                    class="w-full h-[30px]">
            </div>
            <div>
                <label for="จำนวนห้องน้ำ" class="block  text-gray-900 text-[18px]">จำนวนห้องน้ำ</label>
                <input id="จำนวนห้องน้ำ" type="number" placeholder="จำนวนห้องนอน" min="0" class="w-full h-[30px]">
            </div>
            <div>
                <label for="การแนะนำบ้านพัก" class="block  text-gray-900 text-[18px]">การแนะนำบ้านพัก</label>
                <input id="การแนะนำบ้านพัก" type="text" placeholder="......" min="0" class="w-full h-[30px]">
            </div>
        </div>
        <div class="w-[320px]">
            <div>
                <label for="การแนะนำบ้านพัก" class="block  text-gray-900 text-[18px]">การแนะนำบ้านพัก</label>
                <textarea placeholder="ใส่ข้อมูลบ้านเช่าของคุณ" class="w-full h-[250px]"
                    id="Product details"></textarea>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-x-4  w-[320px]">
            <div class="">
                <label for="อัตราค่าน้ำ บาท/ต่อหน่วย" class="block  text-gray-900 text-[15px]">อัตราค่าน้ำ
                    บาท/ต่อหน่วย</label>
                <input id="อัตราค่าน้ำ บาท/ต่อหน่วย" type="number" min="0" placeholder="ระบุค่าน้ำ"
                    class="w-full h-[30px]">
            </div>
            <div>
                <label for="อัตราค่าไฟ บาท/ต่อหน่วย" class="block  text-gray-900 text-[15px]">อัตราค่าไฟ
                    บาท/ต่อหน่วย</label>
                <input id="อัตราค่าไฟ บาท/ต่อหน่วย" type="number" min="0" placeholder="ระบุค่าไฟ"
                    class="w-full h-[30px]">
            </div>
        </div>
        <div class="w-[320px] text-[20px]" >สิ่งอำนวยความสะดวก</div>
        <!-- <label for="#" class="block  text-gray-900 text-[18px]">สิ่งอำนวยความสะดวก</label> -->
        <div class="w-[320px] grid grid-cols-3 gap-2">
            <div  v-for="(device, i) in list.devices" :key="i">
                <input type="checkbox" id="#" :value="device.select">{{ device.select }}
            </div>
        </div>


    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: "from",
});
const lists = ref<any>([
    {
        head: [
            { title: "ข้อมูล", link: "", },
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
        devices: [
            { select: "เตียง",is:false },
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

// const onCreateHaveImage = async () => {
//   try {
//     const formdata = new FormData();
//     formdata.append("img", img.value, img.value.name);
//     // formdata.append("img[]", imgs.value, imgs.value.name);
//     formdata.append("name", "Example");
//     formdata.append("des", "Example");

//     const resp: any = await service.example.list(formdata);
//     console.log(resp);
//   } catch (error: any) {
//     Swal.fire({
//       icon: "error",
//       title: "Error",
//       text: error.message,
//     });
//   }
// };
</script>
