<template>
    <div class="flex justify-center w-full " v-for="(list, x) in lists" :key="x">
        <div class="flex xl:w-[1600px] lg:w-full">
            <div class="xl:w-[470px] border-x shadow-lg">
                <div class="grid grid-cols-3 ">
                    <div @click="switchTab('fromDetail')" :class="{
                        'bg-blue-400 text-white': activeTab === 'fromDetail',
                        'bg-white text-black': activeTab !== 'fromDetail',
                    }" class="xl:h-[60px] lg:h-[40px] cursor-pointer flex items-center justify-center">ข้อมูล</div>
                    <div @click="switchTab('inputImage')" :class="{
                        'bg-blue-400 text-white': activeTab === 'inputImage',
                        'bg-white text-black': activeTab !== 'inputImage',
                    }" class="xl:h-[60px] lg:h-[40px] cursor-pointer  flex items-center justify-center">รูปภาพ
                    </div>
                    <div @click="switchTab('inputMap')" :class="{
                        'bg-blue-400 text-white': activeTab === 'inputMap',
                        'bg-white text-black': activeTab !== 'inputMap',
                    }" class="xl:h-[60px] lg:h-[40px] cursor-pointer flex items-center justify-center">แผนที่</div>
                    <!-- <div @click="switchTab('confirmDetail')" :class="{
                        'bg-blue-400 text-white': activeTab === 'confirmDetail',
                        'bg-white text-black': activeTab !== 'confirmDetail',
                    }" class="xl:h-[60px] lg:h-[40px] cursor-pointer flex items-center justify-center">ยืนยันข้อมูล</div> -->
                </div>
                <div class="w-full flex justify-center lg:px-2">
                    <!-- กรองข้อมูลที่พัก -->
                    <div class="xl:py-6  " v-if="activeTab === 'fromDetail'">
                        <h1 class="xl:text-[30px] lg:text-[22px] text-center py-2">กรอกข้อมูลที่พัก</h1>
                        <div class="space-y-3 flex flex-col items-center">
                            <div>
                                <label for="ชื่อโครงการ"
                                    class="block text-gray-900 xl:text-[24px] lg:text-[18px]">ชื่อโครงการ</label>
                                <input id="ชื่อโครงการ" type="text" v-model="nameHome" placeholder="ระบุชื่อโครงการ..."
                                    class="xl:w-[390px] lg:w-[320px] xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-200 border-[1px] rounded-md border-gray-200 xl:text-[20px] lg:text-[16px] xl:px-2 lg:px-1">
                            </div>
                            <div>
                                <label for="ประเภทการขาย"
                                    class="block  text-gray-900 xl:text-[24px] lg:text-[18px]">ประเภทการขาย</label>
                                <select v-model="saleType" id="ประเภทการขาย"
                                    class="xl:w-[390px] lg:w-[320px] xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 xl:text-[20px] lg:text-[16px] px-2">
                                    <option v-for="(categoryItem, i) in list.category" :key="i"
                                        :value="categoryItem.sell" class="text-black ">
                                        {{ categoryItem.sell }}
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label for="ประเภทที่พัก"
                                    class="block  text-gray-900 xl:text-[24px] lg:text-[18px]">ประเภทที่พัก</label>
                                <select id="ประเภทที่พัก" v-model="homeType"
                                    class="xl:w-[390px] lg:w-[320px] xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 xl:text-[20px] lg:text-[16px] px-2">
                                    <option v-for="(categoryItem, i) in list.categoryhome" :key="i"
                                        :value="categoryItem.homelist" class="text-black ">
                                        {{ categoryItem.homelist }}
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label for="โซนที่พัก"
                                    class="block  text-gray-900 xl:text-[24px] lg:text-[18px]">โซนที่พัก</label>
                                <select id="โซนที่พัก" v-model="zoneType"
                                    class="xl:w-[390px] lg:w-[320px] xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 xl:text-[20px] lg:text-[16px] px-2">
                                    <option v-for="(zones, i) in list.zone" :key="i" :value="zones.listzone"
                                        class="text-black ">
                                        {{ zones.listzone }}
                                    </option>
                                </select>
                            </div>
                            <div class="grid grid-cols-2 gap-x-4 gap-y-2 xl:w-[390px] lg:w-[320px]">
                                <div class="">
                                    <label for="พื้นที่ใช้สอย (ตร.ม.)"
                                        class="block  text-gray-900 xl:text-[18px] lg:text-[14px]">พื้นที่ใช้สอย(ตร.ม.)</label>
                                    <input id="พื้นที่ใช้สอย (ตร.ม.)" v-model="area" type="number" min="0"
                                        placeholder="ตร.ม."
                                        class="w-full xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 xl:text-[20px] lg:text-[16px] px-2">
                                </div>
                                <div>
                                    <label for="ชั้น"
                                        class="block  text-gray-900 xl:text-[18px] lg:text-[14px]">ชั้น</label>
                                    <input id="ชั้น" v-model="floor" type="number" min="0" placeholder="จำนวนชัั้น"
                                        class="w-full xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 xl:text-[20px] lg:text-[16px] px-2">
                                </div>
                                <div class="">
                                    <label for="จำนวนห้องนอน"
                                        class="block  text-gray-900 xl:text-[18px] lg:text-[14px]">จำนวนห้องนอน</label>
                                    <input id="จำนวนห้องนอน (ตร.ม.)" v-model="bedRoom" type="number" min="0"
                                        placeholder="ระบุจำนวนห้อง"
                                        class="w-full xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 xl:text-[20px] lg:text-[16px] px-2">
                                </div>
                                <div>
                                    <label for="จำนวนห้องน้ำ"
                                        class="block  text-gray-900 xl:text-[18px] lg:text-[14px]">จำนวนห้องน้ำ</label>
                                    <input id="จำนวนห้องน้ำ" v-model="bathRoom" type="number" placeholder="จำนวนห้องนอน"
                                        min="0"
                                        class="w-full xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 xl:text-[20px] lg:text-[16px] px-2">
                                </div>
                                <div>
                                    <label for="การแนะนำบ้านพัก"
                                        class="block  text-gray-900 xl:text-[18px] lg:text-[14px]">การแนะนำบ้านพัก</label>
                                    <input id="การแนะนำบ้านพัก" type="text" placeholder="......" min="0"
                                        class="w-full xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 xl:text-[20px] lg:text-[16px] px-2">
                                </div>
                            </div>
                            <div>
                                <label for="product_details"
                                    class="block  text-gray-900 xl:text-[24px] lg:text-[18px]">รายละเอียดบ้านเช่า</label>
                                <textarea placeholder="ใส่ข้อมูลบ้านเช่าของคุณ" v-model="description"
                                    class="xl:w-[390px] lg:w-[320px] h-[250px]  shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 xl:text-[18px] px-2"
                                    id="product_details"></textarea>
                            </div>
                            <div>
                                <label for="address"
                                    class="block  text-gray-900 xl:text-[24px] lg:text-[18px]">ที่อยู่</label>
                                <textarea placeholder="ใส่ที่อยู่บ้านเช่าของคุณ" v-model="address"
                                    class="xl:w-[390px] lg:w-[320px] h-[60px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 text-[18px] px-2"
                                    id="address"></textarea>
                            </div>
                            <div class="grid grid-cols-2 gap-x-4 xl:w-[390px] lg:w-[320px]">
                                <div>
                                    <label for="อัตราค่าไฟ บาท/ต่อหน่วย"
                                        class="block  text-gray-900 xl:text-[16px] lg:text-[14px]">อัตราค่าไฟ
                                        บาท/ต่อหน่วย</label>
                                    <input id="อัตราค่าไฟ บาท/ต่อหน่วย" v-model="electricity" type="number" min="0"
                                        placeholder="ระบุค่าไฟ"
                                        class="w-full xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 text-[20px] px-2">
                                </div>
                                <div class="">
                                    <label for="อัตราค่าน้ำ บาท/ต่อหน่วย"
                                        class="block  text-gray-900 xl:text-[16px] lg:text-[14px]">อัตราค่าน้ำ
                                        บาท/ต่อหน่วย</label>
                                    <input id="อัตราค่าน้ำ บาท/ต่อหน่วย" v-model="waterBill" type="number" min="0"
                                        placeholder="ระบุค่าน้ำ"
                                        class="w-full xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 text-[20px] px-2">
                                </div>
                            </div>
                            <div class="xl:w-[390px] lg:w-[320px]">
                                <label for="#"
                                    class="block  text-gray-900 xl:text-[24px] lg:text-[18px]">สิ่งอำนวยความสะดวก</label>
                                <div class=" grid grid-cols-2 gap-2">
                                    <div v-for="(device, i) in list.devices" :key="i">
                                        <div class="flex items-center">
                                            <input id="checkboxdevice" type="checkbox" v-model="selectedDevices"
                                                :value="device.select"
                                                class="appearance-none w-6 h-6 border-2 border-gray-300 rounded-md checked:border-[#00aeef] relative">
                                            <label for="checkboxdevice" class="ml-2 text-gray-700">{{ device.select
                                                }}</label>
                                        </div>
                                        <!-- <input v-model="selectedDevices" type="checkbox" id="#" :value="device.select"
                                    class="appearance-none w-6 h-6 border-2 border-orange-500 rounded-sm checked:bg-orange-500 checked:border-orange-500 focus:ring-0 focus:outline-none">
                                {{ device.select }} -->
                                    </div>
                                </div>
                            </div>

                            <div class="xl:w-[390px] lg:w-[320px]">
                                <label for="name"
                                    class="block  text-gray-900 xl:text-[24px] lg:text-[18px]">ชื่อ-นามสกุลผู้ลงประกาศ</label>
                                <input id="name" type="text" v-model="nameDetail" placeholder="ชื่อ-นามสกุล"
                                    class="w-full xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 text-[18px] px-2">
                            </div>
                            <div class="grid grid-cols-2 gap-x-4 gap-y-3 xl:w-[390px] lg:w-[320px]">
                                <div>
                                    <label for="homenumber"
                                        class="block  text-gray-900 xl:text-[18px] lg:text-[14px]">บ้านเลขที่</label>
                                    <input id="homenumber" type="text" placeholder="โปรดระบุ"
                                        class="w-full xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 text-[20px] px-2">
                                </div>
                                <div class="">
                                    <label for="อัตราค่าน้ำ บาท/ต่อหน่วย"
                                        class="block  text-gray-900 xl:text-[18px] lg:text-[14px]">เลขที่ห้อง</label>
                                    <input id="อัตราค่าน้ำ บาท/ต่อหน่วย" type="text" placeholder="โปรดระบุ"
                                        class="w-full xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 text-[20px] px-2">
                                </div>
                                <div>
                                    <label for="phone"
                                        class="block  text-gray-900 xl:text-[18px] lg:text-[14px]">เบอร์ติดต่อ</label>
                                    <input id="phone" type="tel" v-model="telNumber" placeholder="โปรดระบุ"
                                        class="w-full xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 text-[20px] px-2">
                                </div>
                                <div class="">
                                    <label for="lineid" class="block  text-gray-900 xl:text-[18px] lg:text-[14px]">Line
                                        ID</label>
                                    <input id="lineid" type="text" v-model="lineID" placeholder="โปรดระบุ"
                                        class="w-full xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 text-[20px] px-2">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- อัพโหลดรูป -->
                    <div class="flex flex-col gap-5 mt-5" v-if="activeTab === 'inputImage'">
                        <div class=" border-[2px] border-sky-400 rounded-md xl:p-6 lg:p-3 xl:w-[390px] lg:w-[320px] shadow-xl">
                            <p class="xl:text-[24px] lg:text-[18px] text-center ">
                                อัพโหลดรูปหน้าปก
                            </p>
                            <label
                                class="cursor-pointer relative group  border-2 border-dashed border-gray-700 rounded-lg p-4 flex flex-col items-center justify-center  hover:border-sky-400 transition-all ">
                                <input class="text-sm cursor-pointer hidden" type="file" multiple
                                    @change="handleMultipleImageUpload" />
                                <div class="absolute top-2 left-2 bg-sky-400 text-white  px-2 py-1 rounded-tr-lg">
                                    รูปหน้าปก
                                </div>
                                <Icon class="w-[50px] group-hover:text-sky-400 transition-all h-[50px] text-gray-500"
                                    name="fluent:image-add-32-light" />
                                <p class="text-gray-500 mt-2">เพิ่มรูป</p>
                                <p class="text-xs text-gray-600">(ไฟล์ jpg, png)</p>
                            </label>
                        </div>
                        <div class=" border-[2px] border-green-400  rounded-md xl:p-6 lg:p-3 xl:w-[390px] lg:w-[320px] shadow-xl">
                            <p class="xl:text-[24px] lg:text-[18px] text-center ">
                                อัพโหลดรูปประกอบเพิ่มเติม</p>
                            <label
                                class="cursor-pointer relative group border-2 border-dashed border-gray-700 rounded-lg p-4 flex flex-col items-center justify-center  hover:border-green-400 transition-all ">
                                <input class="text-sm cursor-pointer  hidden" type="file" multiple
                                    @change="handleMultipleImageUpload2" />
                                <div class="absolute top-2 left-2 bg-green-400 text-white  px-2 py-1 rounded-tr-lg">
                                    รูปประกอบ
                                </div>
                                <Icon class="w-[50px] group-hover:text-green-400 transition-all h-[50px] text-gray-500"
                                    name="fluent:image-add-32-light" />
                                <p class="text-gray-500 mt-2">เพิ่มรูป</p>
                                <p class="text-xs text-gray-600">(ไฟล์ jpg, png)</p>
                            </label>
                        </div>
                    </div>
                    <!-- ใส่ข้อมูลแผนที่ -->
                    <div class="py-6" v-if="activeTab === 'inputMap'">
                        <!-- <h1 class="text-[30px] text-center py-2">ที่ตั้งที่พักของคุณ</h1>
                        <div class="w-[390px] space-y-4">
                            <div class="flex justify-between">
                                <input
                                    class="w-[340px] h-[40px] shadow-lg outline-sky-200 border-[1px] rounded-md border-gray-200 text-[20px] px-2"
                                    placeholder="ค้นหาที่อยู่" type="text">
                                <button
                                    class="w-[40px] h-[40px] bg-sky-400 rounded-md shadow-lg flex items-center justify-center">
                                    <Icon class="w-[25px] h-[25px]" name="ic:twotone-search" />
                                </button>
                            </div>
                            <div class="grid grid-cols-2 gap-x-4">
                                <div class="">
                                    <label for="#" class="block  text-gray-900 text-[18px]">ละติจูด</label>
                                    <input id="#" type="number" min="0" placeholder="ตำแหน่งละติจูด"
                                        class="w-full h-[40px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 text-[20px] px-2">
                                </div>
                                <div>
                                    <label for="##" class="block  text-gray-900 text-[18px]">ลองติจูด</label>
                                    <input id="##" type="number" min="0" placeholder="ตำแหน่งลองติจูด"
                                        class="w-full h-[40px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 text-[20px] px-2">
                                </div>
                            </div>
                            <div class="w-full flex justify-end">
                                <div class="flex gap-5 pt-4">
                                    <div class="w-[110px] h-[35px] bg-red-500 content-center text-center rounded-md shadow-lg ">
                                        ยกเลิก
                                    </div>
                                    <div class="w-[110px] h-[35px] bg-green-500 content-center text-center rounded-md shadow-lg">
                                        ตกลง
                                    </div>
                                </div>

                            </div>
                        </div> -->
                        <h1 class="xl:text-[30px] lg:text-[22px] text-center py-2">ที่ตั้งที่พักของคุณ</h1>
                        <div class="xl:w-[390px] lg:w-[320px] xl:space-y-4 lg:space-y-2">
                            <div class="flex">
                                <input id="addressInput"
                                    class="w-full xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-200 border-[1px] rounded-l-md border-gray-200 xl:text-[20px] lg:text-[14px] px-2"
                                    placeholder="ค้นหาที่อยู่" type="text">
                                <button onclick="searchLocation()"
                                    class="w-[40px] xl:h-[40px] lg:h-[32px] bg-sky-400 rounded-r-md shadow-lg flex items-center justify-center">
                                    <Icon class="w-[25px] h-[25px]" name="ic:twotone-search" />
                                </button>
                            </div>
                            <div class="grid grid-cols-2 gap-x-4">
                                <div>
                                    <label for="latitudeInput"
                                        class="block text-gray-900 xl:text-[18px] lg:text-[16px]">ละติจูด</label>
                                    <input id="latitudeInput" type="number" placeholder="ตำแหน่งละติจูด"
                                        class="w-full xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 xl:text-[20px] lg:text-[14px] px-2">
                                </div>
                                <div>
                                    <label for="longitudeInput"
                                        class="block text-gray-900 xl:text-[18px] lg:text-[16px]">ลองติจูด</label>
                                    <input id="longitudeInput" type="number" placeholder="ตำแหน่งลองติจูด"
                                        class="w-full xl:h-[40px] lg:h-[32px] shadow-lg outline-sky-300 border-[1px] rounded-md border-gray-200 xl:text-[20px] lg:text-[14px] px-2">
                                </div>
                            </div>
                            <div class="w-full flex justify-end">
                                <div class="flex xl:gap-5 lg:gap-2 pt-4">
                                    <button
                                        class="xl:w-[110px] lg:w-[70px] xl:h-[35px] lg:h-[28px] bg-red-500 content-center text-center lg:text-[14px] text-white rounded-md shadow-lg">ยกเลิก</button>
                                    <button @click="updateMap()"
                                        class="xl:w-[110px] lg:w-[70px] xl:h-[35px] lg:h-[28px] bg-green-500 content-center text-center lg:text-[14px] text-white rounded-md shadow-lg">ตกลง</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- แสดงรายละเอียดต่างๆที่ใส่ใน input -->
            <div class="w-[1130px]  bg-white my-5 ">
                <div class="border ml-10 my-3  p-4 rounded-md  shadow-lg">
                    <div>
                        <span class=" text-gray-800 text-[24px] ">ชื่อบ้านเช่า : </span>
                        <span class="text-[#2eb840] font-semibold text-[30px]  break-words">{{ nameHome
                            }}</span>
                    </div>
                    <div>
                        <span class="text-gray-800 text-[24px] ">ประเภทการขาย : </span>
                        <span class="text-[#2eb840] text-[28px] ">{{ saleType }}</span>
                    </div>
                    <div>
                        <span class="text-gray-800 text-[24px] ">ประเภทที่พัก : </span>
                        <span class="text-[#2eb840] text-[28px] ">{{ homeType }}</span>
                    </div>
                    <div>
                        <span class="text-gray-800 text-[24px] ">โซนที่พัก : </span>
                        <span class="text-[#2eb840] text-[28px] ">{{ zoneType }}</span>
                    </div>
                </div>
                <!-- เเสดงรูปที่ต้องการอัพโหลด -->
                <div class="border rounded-md ml-10  my-3  p-3 shadow-lg">
                    <p class="text-[24px]  py-3">รูปภาพ</p>
                    <div class="flex   gap-2  h-[408px] ">
                        <div v-if="uploadedImages.length" class="w-[710px] relative">
                            <button @click="delimg()" class="absolute top-2 right-6 text-rose-600 hover:text-red-500">
                                <Icon class="w-[30px] h-[30px]" name="mdi:close-thick" />
                            </button>
                            <img class=" w-full h-[408px]  rounded-xl object-cover"
                                :src="uploadedImages[0]" alt="Uploaded" />
                        </div>
                        <!-- รูปโชว์ตอนยังไม่ได้เลือกไฟล์รูป -->
                        <div v-if="!uploadedImages.length" class="w-[710px] h-[400px] ">
                            <div
                                class="w-[700px]  h-[400px]  flex justify-center  border-4 border-gray-500 rounded-xl border-dashed">
                                <div class="flex flex-col justify-center items-center ">
                                    <Icon class="w-[300px] h-[300px]  text-gray-500 "
                                        name="fa-regular:images" />
                                    <p class="text-[50px]  text-gray-500 font-bold">No images</p>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-1 overflow-auto h-auto ">
                            <div v-if="uploadedImages2.length" v-for="(image, index) in uploadedImages2.slice(0)"
                                :key="index" class="relative">
                                <button @click="delimg2(index)"
                                    class="absolute top-1 right-2 text-rose-600 hover:text-red-500">
                                    <Icon class="w-[20px] h-[20px]" name="mdi:close-thick" />
                                </button>
                                <img class="w-[340px] h-[202px]  rounded-xl object-cover "
                                    :src="image" alt="Uploaded">

                            </div>
                            <!-- รูปโชว์ตอนยังไม่ได้เลือกไฟล์รูป -->
                            <div v-else class="w-[340px] grid grid-cols-1 gap-1">
                                <div
                                    class=" w-full h-[196px]  flex justify-center items-center border-4  border-gray-500 rounded-xl border-dashed">
                                    <div class="flex flex-col items-center">
                                        <Icon class="w-[100px] h-[100px] text-gray-500" name="fa-regular:images" />
                                        <p class="text-[30px] text-gray-500 font-bold">No images</p>
                                    </div>
                                </div>
                                <div
                                    class=" w-full h-[196px]  flex justify-center items-center border-4  border-gray-500 rounded-xl border-dashed">
                                    <div class="flex flex-col items-center">
                                        <Icon class="w-[100px] h-[100px] text-gray-500" name="fa-regular:images" />
                                        <p class="text-[30px] text-gray-500 font-bold">No images</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border rounded-md ml-10  my-3  p-4  shadow-lg">
                    <p class="text-[24px] ">ข้อมูลที่พัก</p>
                    <div class="grid grid-cols-4  ">
                        <div class="flex items-center justify-center gap-2 h-[40px]">
                            <Icon class="text-sky-900 w-[30px] h-[30px]" name="ion:bed-outline" />
                            <p class="text-[24px]  text-[#2eb840]">{{ bedRoom }}</p>
                            <p class="text-[24px] ">ห้องนอน</p>
                        </div>
                        <div class="flex items-center justify-center gap-2 h-[40px]">
                            <Icon class="text-sky-900 w-[30px] h-[30px]" name="mdi:bathroom" />
                            <p class="text-[24px]  text-[#2eb840]">{{ bathRoom }}</p>
                            <p class="text-[24px] ">ห้องน้ำ</p>
                        </div>
                        <div class="flex items-center justify-center gap-2 h-[40px]">
                            <Icon class="text-sky-900 w-[30px] h-[30px]" name="ri:stairs-line" />
                            <p class="text-[24px]  text-[#2eb840]">{{ floor }}</p>
                            <p class="text-[24px] ">ชั้น</p>
                        </div>
                        <div class="flex items-center justify-center gap-2 h-[40px]">
                            <Icon class="text-sky-900 w-[30px] h-[30px]"
                                name="material-symbols-light:background-grid-small-outline" />
                            <p class="text-[24px]  text-[#2eb840]">{{ area }}</p>
                            <p class="text-[24px] ">ตร.ม.</p>
                        </div>
                    </div>
                </div>
                <div class="border rounded-md ml-10  my-3  p-4  shadow-lg">
                    <p class="text-[24px] ">อัตราค่าน้ำและค่าไฟ</p>
                    <div class="grid grid-cols-2  ">
                        <div class="flex items-center justify-center gap-2 h-[40px]">
                            <Icon class="text-sky-900 w-[30px] h-[30px]" name="iconoir:light-bulb-on" />
                            <span class="text-[24px] ">ค่าไฟ</span>
                            <p class="text-[24px]  text-[#2eb840]">{{ electricity }}</p>
                            <p class="text-[24px] ">บาท/ต่อหน่วย</p>
                        </div>
                        <div class="flex items-center justify-center gap-2 h-[40px]">
                            <Icon class="text-sky-900 w-[30px] h-[30px]" name="healthicons:running-water-outline" />
                            <span class="text-[24px] ">ค่าน้ำ</span>
                            <p class="text-[24px]  text-[#2eb840]">{{ waterBill }}</p>
                            <p class="text-[24px] ">บาท/ต่อหน่วย</p>
                        </div>
                    </div>
                </div>
                <div class="border rounded-md ml-10 -2 my-3  p-4 h-auto shadow-lg">
                    <label for="inputtext" class="text-[24px] ">รายละเอียดบ้านเช่า : </label>
                    <div :class="description == '' && 'hidden'"
                        class="w-full h-auto text-[18px] p-2 border rounded-md break-words whitespace-pre-line"
                        :v-html="formattedMessage">
                        {{ description }}
                    </div>
                </div>
                <div class="border rounded-md ml-10  my-3  p-4 h-auto shadow-lg">
                    <label for="inputaddress" class="text-[24px] ]">ที่อยู่ : </label>
                    <div :class="address == '' && 'hidden'"
                        class="w-full h-auto text-[18px] p-2 border rounded-md break-words whitespace-pre-line"
                        :v-html="formattedMessage">
                        {{ address }}
                    </div>
                </div>
                <div class=" border rounded-md ml-10  my-3  p-4 shadow-lg ">
                    <p class="text-[24px]  ">สิ่งอำนวยความสะดวก</p>
                    <div class=" grid grid-cols-4  gap-x-11  gap-y-3 "
                        v-if="selectedDevices.length">
                        <li class="text-[22px]  custom-bullet" v-for="device in selectedDevices"
                            :key="device"> &nbsp;{{
                                device }}</li>

                    </div>
                </div>
                <div class="border rounded-md ml-10  my-3  shadow-lg p-5">
                    <p class="text-[24px] ">ที่ตั้ง :</p>

                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.8614909871076!2d102.80536777471988!3d16.489558792316206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228a9920cec07b%3A0x272578cc2ddadf6d!2zR3JpdCBDb25zdWx0YW50IENvLixMdGQuIOC4muC4o-C4tOC4qeC4seC4lyDguIHguKPguLTguJcg4LiE4Lit4LiZ4LiL4Lix4Lil4LmB4LiX4LiZ4LiX4LmMIOC4iOC4s-C4geC4seC4lA!5e0!3m2!1sen!2sth!4v1729756030487!5m2!1sen!2sth"
                            class="w-full h-[430px]  rounded-md" style="border:0;" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div class="border rounded-md ml-10  my-3  p-4 shadow-lg">
                    <p class="text-[24px] ">ข้อมูลผู้ลงประกาศ</p>
                    <div class="grid grid-cols-1 gap-y-6">
                        <div class="flex gap-4  items-center">
                            <Icon class="text-sky-900 w-[30px] h-[30px]" name="icon-park-solid:edit-name" />
                            <p class="text-[24px] ">ชื่อ :</p>
                            <p class="text-[24px]  text-[#2eb840] break-words whitespace-pre-line">
                                {{ nameDetail }}
                            </p>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="flex gap-4  items-center">
                                <Icon class="text-sky-900 w-[30px] h-[30px]" name="icon-park-outline:phone-call" />
                                <p class="text-[24px] ">เบอร์โทร :</p>
                                <p class="text-[24px]  text-[#2eb840] break-words whitespace-pre-line">
                                    {{ telNumber }}
                                </p>
                            </div>
                            <div class="flex gap-4  items-center">
                                <Icon class="text-sky-900 w-[30px] h-[30px]" name="ri:line-line" />
                                <p class="text-[24px] ">ID Line :</p>
                                <p class="text-[24px]  text-[#2eb840] break-words whitespace-pre-line">
                                    {{ lineID }}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="border rounded-md ml-10 my-3 shadow-lg h-[80px] ">
                    <p>การแนะนำบ้านพัก</p>
                    ....................
                </div>
                <div class="ml-10">
                    <button
                        class="w-[180px] h-[50px] bg-[#00AEEF] text-white text-[18px] rounded-md">ส่งข้อมูลลงประกาศ</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
const activeTab = ref<string>("fromDetail");
const nameHome = ref<string>("");
const bedRoom = ref<number>(0);
const bathRoom = ref<number>(0);
const electricity = ref<number>(0);
const waterBill = ref<number>(0);
const floor = ref<number>(0);
const area = ref<number>(0);
// const description = ref<string>("");
const saleType = ref<string>("");
const homeType = ref<string>("");
const zoneType = ref<string>("");
const nameDetail = ref<string>("");
const telNumber = ref<string>("");
const lineID = ref<string>("");
const selectedDevices = ref<string[]>([]);

const description = ref<string>("");
const address = ref<string>("");
// ฟังชั้นการกด Enter เเล้วเว้นบรรทัด
const formattedMessage = computed(() => {
    return description.value.replace(/\n/g, '<br>');
});

const switchTab = (tab: string) => {
    activeTab.value = tab;
};

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


const uploadedImages = ref<string[]>([]);
const handleMultipleImageUpload = (event: Event) => {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = () => {
                uploadedImages.value.push(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    }
};



const uploadedImages2 = ref<string[]>([]);
const handleMultipleImageUpload2 = (event: Event) => {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = () => {
                uploadedImages2.value.push(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    }
};

// ฟังก์ชันสำหรับลบรูปภาพออกจาก uploadedImages2
const removeImage = (index: number) => {
    uploadedImages2.value.splice(index, 1);
};
const delimg = () => {
    uploadedImages.value = []; // ล้างข้อมูลรูปภาพทั้งหมด
};
const delimg2 = (index: number) => {
    uploadedImages2.value.splice(index, 1);
    // uploadedImages2.value = []; // ล้างข้อมูลรูปภาพทั้งหมด
};


//map




function updateMap(): void {
    const lat = (document.getElementById('latitudeInput') as HTMLInputElement).value;
    const lng = (document.getElementById('longitudeInput') as HTMLInputElement).value;

    if (lat && lng) {
        const mapFrame = document.getElementById('mapFrame') as HTMLIFrameElement;
        const src = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${lat},${lng}&zoom=14&maptype=satellite`;
        mapFrame.src = src;
    } else {
        alert("กรุณากรอกละติจูดและลองติจูดให้ครบถ้วน");
    }
}
</script>

<style >
input[type="checkbox"]:checked::after {
    content: '◉';
    position: absolute;
    right: 1px;
    bottom: -3px;
    font-size: 20px;
    color: #00aeef;
}

.custom-bullet::marker {
    content: '★';
    /* ใช้สัญลักษณ์อื่นแทนจุดกลม */
    color: #00aeef;
    /* กำหนดสีของ bullet */
    font-size: 22px;
    /* กำหนดขนาดของ bullet */
}

</style>