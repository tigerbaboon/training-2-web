<template>
     <div class="flex justify-center items-center lg:my-6">
          <div class="flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 h-[40px] md:h-[50px] lg:h-[60px] lg:my-6">
               <div
                    class="w-[120px] md:w-[220px] lg:w-[300px] xl:w-[400px] h-[2px] md:h-[4px] lg:h-[5px] bg-[#30def5] rounded">
               </div>
               <h2 class="text-gray-800 font-bold text-[16px] md:text-[24px] lg:text-[40px] text-center">พื้นที่แต่ละโซน
               </h2>
               <div
                    class="w-[120px] md:w-[220px] lg:w-[300px] xl:w-[400px] h-[2px] md:h-[4px] lg:h-[5px] bg-[#30def5] rounded">
               </div>
          </div>
     </div>
     <!-- <pre>{{ listZone }}</pre> -->
     <div v-if="!listZone.length" class="flex justify-center items-center">
          <div
               class="flex justify-center items-center gap-2 w-[1200px] h-[210px] bg-white border-[2px] border-sky-500 rounded-lg p-3 duration-[450ms]">
               <div class="w-20 h-20 border-8 border-t-[#22b6ed] border-gray-300 rounded-full animate-spin">
               </div>
          </div>
     </div>
     <div v-else>
          <div class="flex justify-center md:my-3">
               <div class="grid grid-cols-4 gap-x-6 gap-y-7 place-items-center">
                    <!-- แสดงรูปภาพสำหรับ 4 โซนแรก -->
                    <div v-for="(zone, index) in listZone?.slice(0, 4)" :key="index" class="w-[180px] h-[120px]">
                         <nuxt-link :to="`/list-zone/${zone?.id}`">
                              <img class="w-full h-full" :src="zone?.images?.url" alt="Img Zone">
                         </nuxt-link>
                    </div>
               </div>
          </div>
          <div class="flex justify-center my-10">
               <div class="grid grid-cols-5 gap-x-6 gap-y-7 place-items-center">
                    <div v-for="(zone, index) in listZone.slice(4)" :key="`zone-button-${index}`" class="">
                         <nuxt-link :to="`/list-zone/${zone.id}`"
                              class="w-[130px] flex items-center justify-center bg-[#053c65] px-2 py-2 rounded-md border-transparent border-[3px] hover:bg-[#0d4a77] hover:border-white transition-all ease-in duration-200">
                              <span class="text-zinc-200 font-medium text-md">{{ zone.zone_name }}</span>
                         </nuxt-link>
                    </div>
               </div>

          </div>
     </div>



</template>

<script lang="ts" setup>
import service from '~/service';
import Swal from 'sweetalert2';


const listZone = ref<any>([]);

const getZone = async () => {
     try {
          const resp: any = await service.travel.zone({
               page: 1,
               limit: 10,
          });
          listZone.value = resp?.Data || null;
     } catch (error: any) {
          Swal.fire({
               icon: "error",
               title: "Error",
               text: error.message,
          });
     }
};



onMounted(() => {
     getZone();
});
</script>