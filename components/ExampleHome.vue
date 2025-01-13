<template>
     <div class="w-[1200px]  grid grid-cols-3 gap-4     transition duration-1000">
               <div v-for="(home, index) in homes" :key="index" class="hover:shadow-2xl cursor-pointer duration-200">
                    <div class="bg-white border-[2px] rounded-lg p-3    ">
                         <img class="w-full h-[240px]  object-cover rounded-md" :src="home.img" alt="Home Image" />
                         <p class="text-gray-800 font-semibold xl:text-[22px] lg:text-[14px]  truncate hover:text">
                              {{ home.nameHome }}</p>
                         <p class="text-gray-600 text-[15px] truncate">
                              {{ home.address }}
                         </p>
                         <p class="text-[#0D8F0B] font-bold xl:text-[18px] ">
                              {{ home.price }}บาท/เดือน
                         </p>
                         <div class="xl:flex lg:hidden gap-2 text-[12px] text-gray-600 my-1">
                              <div class="bg-gray-200 rounded-sm p-[3px] ">
                                   <p>{{ home.bedRoom }} ห้องนอน</p>
                              </div>
                              <div class="bg-gray-200 rounded-sm p-[3px]">
                                   <p>{{ home.bathRoom }} ห้องน้ำ</p>
                              </div>
                              <div class="bg-gray-200 rounded-sm p-[3px] ">
                                   <p>{{ home.areaSize }} ตร.ม.</p>
                              </div>
                         </div>
                         <div
                              class="w-10 hover:w-[142px] h-[26px] bg-sky-400 flex justify-center items-center rounded-[3px] text-white font-medium overflow-hidden transition-all duration-500 group">
                              <Icon class="w-[15px] h-[15px] group-hover:block transition-opacity duration-300"
                                   name="ic:baseline-phone" />
                              <span
                                   class="text-[14px]  pl-2 hidden group-hover:block group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
                                   {{ home.phone }}
                              </span>
                         </div>
                         <div class="grid grid-cols-2  ">
                              <div class="">
                                   <p class="text-[14px] text-sky-500">ผู้ประกาศเช่า:</p>
                                   <p class="text-[14px] text-gray-700 truncate">{{ home.user }}</p>
                              </div>
                              <div class="flex justify-end items-end ">
                                   <nuxt-link to="/homedetail"
                                        class="px-3 z-30 py-1 bg-[#00AEEF] rounded-[3px] text-white relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-sky-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-400 transition-all duration-700  text-md">
                                        รายละเอียด
                                   </nuxt-link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
</template>

<script lang="ts" setup>
const homes = ref<any>([
     {
          nameHome: "กรีเน่ ไพร์ม ดอนเมือง-สรงประภา (Grene Prime Donmuang-Songprapha)",
          img: "https://storage.googleapis.com/zmyhome-bucket/project/V16708/12-09-2022-11-25-411579044367.jpg",
          address: "ถ.สรงประภา สีกัน ดอนเมือง จ.กรุงเทพมหานคร 10210",
          bedRoom: 5,
          bathRoom: 2,
          phone: "099-999-9999",
          price: "34,000",
          user: "เลิทศักดิ์ คงควรครอง",
          areaSize: 380,
          zone: "https://cdn.discordapp.com/attachments/1088551599133167706/1295681847753445447/341f12081d0976a8.png?ex=670f8941&is=670e37c1&hm=9227e2aef236cd7d03a02879cdd630ff37ab5473323834f74d5e6d6202952e9b&",
     },
     {
          nameHome: "อภิทาวน์ ขอนแก่น (Apitown Khon Kaen)",
          img: "https://th1-cdn.pgimgs.com/listing/11548842/UPHO.124394283.V800/Baan-Klang-Muang-S-Sense-Srinakarin-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A7%E0%B8%A8-Thailand.jpg",
          address: "999/27 Tambon Sira, ศิลา, เมืองขอนแก่น, ขอนแก่น",
          bedRoom: 4,
          bathRoom: 3,
          phone: "099-999-9999",
          price: "20,000",
          user: "ศิลา วิเศษวรเวษณ์",
          areaSize: 125,
          zone: "https://cdn.discordapp.com/attachments/1088551599133167706/1295681848084660224/30c8dceae9aaebce.png?ex=670f8941&is=670e37c1&hm=fc751b45eb495161776e7180be105779f35cf6a3c5bda61fc1f8c235dedeba54&",
     },
     {
          nameHome: "อภิทาวน์ ขอนแก่น (Apitown Khon Kaen)",
          img: "https://th1-cdn.pgimgs.com/listing/11548842/UPHO.124394283.V800/Baan-Klang-Muang-S-Sense-Srinakarin-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A7%E0%B8%A8-Thailand.jpg",
          address: "999/27 Tambon Sira, ศิลา, เมืองขอนแก่น, ขอนแก่น",
          bedRoom: 4,
          bathRoom: 3,
          phone: "099-999-9999",
          price: "20,000",
          user: "ศิลา วิเศษวรเวษณ์",
          areaSize: 125,
          zone: "https://cdn.discordapp.com/attachments/1088551599133167706/1295681848407756830/446771caaaaecf4b.png?ex=670f8941&is=670e37c1&hm=5c030b9b50b0bd139f057f22aa9e24adbfed93f95f59b8dbf36ccae05c54e8af&",
     },
     {
          nameHome: "อภิทาวน์ ขอนแก่น (Apitown Khon Kaen)",
          img: "https://th1-cdn.pgimgs.com/listing/11548842/UPHO.124394283.V800/Baan-Klang-Muang-S-Sense-Srinakarin-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A7%E0%B8%A8-Thailand.jpg",
          address: "999/27 Tambon Sira, ศิลา, เมืองขอนแก่น, ขอนแก่น",
          bedRoom: 4,
          bathRoom: 3,
          phone: "099-999-9999",
          price: "20,000",
          user: "ศิลา วิเศษวรเวษณ์",
          areaSize: 125,
          zone: "https://cdn.discordapp.com/attachments/1088551599133167706/1295681848407756830/446771caaaaecf4b.png?ex=670f8941&is=670e37c1&hm=5c030b9b50b0bd139f057f22aa9e24adbfed93f95f59b8dbf36ccae05c54e8af&",
     },
     {
          nameHome: "กรีเน่ ไพร์ม ดอนเมือง-สรงประภา (Grene Prime Donmuang-Songprapha)",
          img: "https://storage.googleapis.com/zmyhome-bucket/project/V16708/12-09-2022-11-25-411579044367.jpg",
          address: "ถ.สรงประภา สีกัน ดอนเมือง จ.กรุงเทพมหานคร 10210",
          bedRoom: 5,
          bathRoom: 2,
          phone: "099-999-9999",
          price: "34,000",
          user: "เลิทศักดิ์ คงควรครอง",
          areaSize: 380,
          zone: "https://cdn.discordapp.com/attachments/1088551599133167706/1295681847753445447/341f12081d0976a8.png?ex=670f8941&is=670e37c1&hm=9227e2aef236cd7d03a02879cdd630ff37ab5473323834f74d5e6d6202952e9b&",
     },
     {
          nameHome: "อภิทาวน์ ขอนแก่น (Apitown Khon Kaen)",
          img: "https://th1-cdn.pgimgs.com/listing/11548842/UPHO.124394283.V800/Baan-Klang-Muang-S-Sense-Srinakarin-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A7%E0%B8%A8-Thailand.jpg",
          address: "999/27 Tambon Sira, ศิลา, เมืองขอนแก่น, ขอนแก่น",
          bedRoom: 4,
          bathRoom: 3,
          phone: "099-999-9999",
          price: "20,000",
          user: "ศิลา วิเศษวรเวษณ์",
          areaSize: 125,
          zone: "https://cdn.discordapp.com/attachments/1088551599133167706/1295681848407756830/446771caaaaecf4b.png?ex=670f8941&is=670e37c1&hm=5c030b9b50b0bd139f057f22aa9e24adbfed93f95f59b8dbf36ccae05c54e8af&",
     },
     {
          nameHome: "อภิทาวน์ ขอนแก่น (Apitown Khon Kaen)",
          img: "https://th1-cdn.pgimgs.com/listing/11548842/UPHO.124394283.V800/Baan-Klang-Muang-S-Sense-Srinakarin-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A7%E0%B8%A8-Thailand.jpg",
          address: "999/27 Tambon Sira, ศิลา, เมืองขอนแก่น, ขอนแก่น",
          bedRoom: 4,
          bathRoom: 3,
          phone: "099-999-9999",
          price: "20,000",
          user: "ศิลา วิเศษวรเวษณ์",
          areaSize: 125,
          zone: "https://cdn.discordapp.com/attachments/1088551599133167706/1295681848407756830/446771caaaaecf4b.png?ex=670f8941&is=670e37c1&hm=5c030b9b50b0bd139f057f22aa9e24adbfed93f95f59b8dbf36ccae05c54e8af&",
     },
     {
          nameHome: "กรีเน่ ไพร์ม ดอนเมือง-สรงประภา (Grene Prime Donmuang-Songprapha)",
          img: "https://storage.googleapis.com/zmyhome-bucket/project/V16708/12-09-2022-11-25-411579044367.jpg",
          address: "ถ.สรงประภา สีกัน ดอนเมือง จ.กรุงเทพมหานคร 10210",
          bedRoom: 5,
          bathRoom: 2,
          phone: "099-999-9999",
          price: "34,000",
          user: "เลิทศักดิ์ คงควรครอง",
          areaSize: 380,
          zone: "https://cdn.discordapp.com/attachments/1088551599133167706/1295681847753445447/341f12081d0976a8.png?ex=670f8941&is=670e37c1&hm=9227e2aef236cd7d03a02879cdd630ff37ab5473323834f74d5e6d6202952e9b&",
     },
     {
          nameHome: "ให้เช่าบ้านเดี่ยว มบ.ชลพฤกษ์วิลล่า เหล่านาดี : เจ้าของให้เช่าเอง",
          img: "https://storage.googleapis.com/zmyhome-bucket/property/H95893/600cdc26bdf27.jpg",
          address: "ถ.สรงประภา สีกัน ดอนเมือง จ.กรุงเทพมหานคร 10210",
          bedRoom: 4,
          bathRoom: 4,
          phone: "099-999-9999",
          price: "34,000",
          user: "เลิทศักดิ์ คงควรครอง",
          areaSize: 220,
          zone: "https://cdn.discordapp.com/attachments/1088551599133167706/1295681847753445447/341f12081d0976a8.png?ex=670f8941&is=670e37c1&hm=9227e2aef236cd7d03a02879cdd630ff37ab5473323834f74d5e6d6202952e9b&",
     },
]);
</script>