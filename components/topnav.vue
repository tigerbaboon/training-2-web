<template>
  <div
    class="w-full h-[50px] md:h-[80px] lg:h-[110px] bg-gradient-to-r from-[#00cbef] via-[#26b7ec] to-[#00AEEF] flex justify-between items-center">
    <nuxt-link class="w-[80px] md:w-[120px] lg:w-[190px] h-[40px] md:h-[60px] lg:h-[80px] flex items-center" to="/">
      <img class="w-full h-full ml-3 lg:ml-5" src="/assets/logo/new.png" alt="Logo" />
    </nuxt-link>
    <div class="flex md:gap-[1px] lg:gap-1">
      <div class="flex items-center gap-1 md:gap-2 lg:gap-4">
        <!-- <nuxt-link to="/mymap/mymap"
          class=" relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base">
          <span
            class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"></span>
          <span
            class="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"></span>
          <div
            class="relative flex items-center justify-between py-2 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
            <span class="">ค้นหาที่พักใกล้ฉัน</span>
          </div>
        </nuxt-link> -->

        <nuxt-link to="/mymap/mymap"
          class="px-4 py-2 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#22b6ed] transition duration-300 ease-in-out">
          ค้นหาที่พักใกล้ฉัน
        </nuxt-link>

        <!-- <nuxt-link to="/from-home/fromnew"
          class=" relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base">
          <span
            class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"></span>
          <span
            class="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"></span>
          <div
            class="relative flex items-center justify-between py-2 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-500/90 gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
            <span class="">ลงทะเบียนบ้านฟรี</span>
          </div>
        </nuxt-link> -->

        <nuxt-link to="/from-home/fromnew"
          class="px-4 py-2 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#22b6ed] transition duration-300 ease-in-out">
          ลงทะเบียนบ้านฟรี
        </nuxt-link>

        <!-- <nuxt-link to="/login" v-if="!token"
          class=" relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base">
          <span
            class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"></span>
          <span
            class="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"></span>
          <div
            class="relative flex items-center justify-between py-2 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-500/90 gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
            <span class="">เข้าสู่ระบบ</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/user/" v-else
          class=" relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light text-base">
          <span
            class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"></span>
          <span
            class="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"></span>
          <div
            class="relative flex items-center justify-center py-2 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-500/90 gap-1 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
            <Icon name="tabler:user-filled" />
            <span class="font-bold">{{ username }}</span>
          </div>
        </nuxt-link> -->

        <nuxt-link to="/login" v-if="!token"
          class="px-4 py-2 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#22b6ed] transition duration-300 ease-in-out">
          เข้าสู่ระบบ
        </nuxt-link>
        <nuxt-link to="/user/" v-else
          class="flex justify-center items-center gap-1 px-4 py-2 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#22b6ed] transition duration-300 ease-in-out">
          <Icon name="tabler:user-filled" />
          <span class="font-bold">{{ username }}</span>
        </nuxt-link>

        <!-- <div @click="toggleShow"
          class="w-[60px] h-full relative group bg-transparent cursor-pointer font-mono font-light text-base mr-4">
          <span
            class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"></span>
          <span
            class="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"></span>
          <div
            class="w-full h-full relative rounded-lg flex items-center justify-center  text-white  transform -translate-y-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-500/90  transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
            <Icon class="w-8 h-8 " name="ic:sharp-search" />
          </div>
        </div> -->

        <div @click="toggleShow"
          class="flex items-center justify-center px-4 py-2 cursor-pointer border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#22b6ed] transition duration-300 ease-in-out mr-5">
          <Icon class="w-6 h-6" name="ic:sharp-search" />
        </div>
      </div>
    </div>
  </div>
  <div :class="[
    'flex justify-center items-center overflow-hidden transition-all duration-700 ease-in-out',
    show
      ? 'h-[190px] md:h-[210px] lg:h-[240px] xl:h-[250px] bg-slate-200'
      : 'h-0',
  ]">
    <div>
      <div class="w-full md:w-full lg:w-[1200px] flex justify-center items-center gap-1 md:gap-3 lg:gap-4">
        <input v-model="search.search" @keyup.enter="linkTo()"
          class="input-focus text-black text-center text-[12px] md:text-[16px] lg:text-[22px] w-[254px] md:w-[505px] lg:w-[660px] xl:w-[930px] h-[24px] md:h-[35px] lg:h-[40px] rounded-[4px] focus:outline-sky-400"
          type="text" placeholder="ค้นหา" />
        <select id="id_zone" name="zone" @change="selectZone"
          class="text-gray-500 w-[70px] md:w-[120px] lg:w-[140px] h-[24px] md:h-[35px] lg:h-[40px] text-center text-[12px] md:text-[16px] lg:text-[22px] rounded-[4px] focus:outline-sky-400">
          <option value="" selected>โซนทั้งหมด</option>
          <option v-for="(selectZone, index) in listZone" :key="index" :value="selectZone.id">
            {{ selectZone.zone_name }}
          </option>
        </select>
        <button @click="linkTo"
          class="w-[50px] md:w-[90px] lg:w-[100px] h-[24px] md:h-[35px] lg:h-[40px] text-[12px] md:text-[16px] lg:text-[22px] bg-[#04385D] rounded-[4px] text-white hover:bg-[#035b87] transition-colors">
          ค้นหา
        </button>
      </div>
      <div
        class="p-4 bg-white text-black rounded-md w-[380px] md:w-[739px] lg:w-[930px] xl:w-[1200px] h-[140px] md:h-[150px] lg:h-[170px] xl:h-[170px] shadow-2xl mx-auto mt-3">
        <!-- แสดงช่วงราคาที่เลือก -->
        <div class="flex justify-between">
          <div class="">
            <p class="font-bold text-[10px] md:text-[12px] lg:text-[18px] xl:text-[22px]">
              ช่วงราคา: จาก
              <span class="md:text-[16px] lg:text-[22px] xl:text-[28px] text-sky-500">{{ formatNumber(search.minPrice,
                0) }}</span>
              บาท ถึง
              <span class="md:text-[16px] lg:text-[22px] xl:text-[28px] text-sky-500">{{ formatNumber(search.maxPrice,
                0) }}</span>
              บาท
            </p>
          </div>
          <!-- ป้อนค่าราคาเริ่มต้น -->
          <div class="flex items-center gap-1 md:gap-3 lg:gap-4 mb-4">
            <div>
              <label for="min-price"
                class="block text-sm font-medium text-[10px] md:text-[14px] lg:text-[16px]">ราคาต่ำสุด</label>
              <div class="flex items-center gap-[2px] md:gap-[3px] lg:gap-[4px]">
                <button @click="decrementMinPrice"
                  class="flex justify-center items-center w-[16px] md:w-[20px] lg:w-[24px] h-[20px] md:h-[25px] lg:h-[30px] bg-gray-300 rounded-md border border-slate-400 text-black hover:bg-gray-400">
                  -
                </button>
                <input id="min-price" type="number" :min="listPrice.price_min" :max="listPrice.price_max" step="1"
                  v-model="search.minPrice" @input="updateRange"
                  class="w-[70px] md:w-[100px] lg:w-[128px] h-[25px] md:h-[30px] lg:h-[42px] text-[12px] md:text-[14px] lg:text-[18px] p-2 border border-gray-300 rounded-md focus:outline-sky-400" />
                <button @click="incrementMinPrice"
                  class="flex justify-center items-center w-[16px] md:w-[20px] lg:w-[24px] h-[20px] md:h-[25px] lg:h-[30px] bg-gray-300 rounded-md border border-slate-400 text-black hover:bg-gray-400">
                  +
                </button>
              </div>
            </div>
            <div>
              <label for="max-price"
                class="block text-sm font-medium text-[10px] md:text-[14px] lg:text-[16px]">ราคาสูงสุด</label>
              <div class="flex items-center gap-[2px] md:gap-[3px] lg:gap-[4px]">
                <button @click="decrementMaxPrice"
                  class="flex justify-center items-center w-[16px] md:w-[20px] lg:w-[24px] h-[20px] md:h-[25px] lg:h-[30px] bg-gray-300 rounded-md border border-slate-400 text-black hover:bg-gray-400">
                  -
                </button>
                <input id="max-price" type="number" :min="listPrice.price_min" :max="listPrice.price_max" step="1"
                  v-model="search.maxPrice" @input="updateRange"
                  class="w-[70px] md:w-[100px] lg:w-[128px] h-[25px] md:h-[30px] lg:h-[42px] text-[12px] md:text-[14px] lg:text-[18px] p-2 border border-gray-300 rounded-md focus:outline-sky-400" />
                <button @click="incrementMaxPrice"
                  class="flex justify-center items-center w-[16px] md:w-[20px] lg:w-[24px] h-[20px] md:h-[25px] lg:h-[30px] bg-gray-300 rounded-md border border-slate-400 text-black hover:bg-gray-400">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="flex justify-center w-[220px] md:w-[300px] lg:w-[385px] xl:w-[386px] my-5">
            <div class="relative w-[190px] md:w-[275px] lg:w-[353px] h-[5px] md:h-[7px] lg:h-2 bg-gray-400 rounded-lg">
              <!-- Highlighted Range -->
              <div
                class="absolute top-0 h-[5px] md:h-[7px] lg:h-2 bg-gradient-to-r from-sky-300 via-sky-500 to-sky-700 rounded-lg"
                :style="{
                  left: `${percentageMin}%`,
                  right: `${100 - percentageMax}%`,
                }"></div>

              <!-- Slider Input for minPrice -->
              <input type="range"
                class="absolute bottom-1 lg:bottom-2 left-[-18px] w-[220px] md:w-[315px] lg:w-[390px] xl:w-[390px] h-7 md:h-8 lg:h-9 bg-transparent appearance-none z-20 pointer-events-auto slider"
                :min="listPrice.price_min" :max="listPrice.price_max" step="1" v-model="search.minPrice"
                @input="updateRange" />

              <!-- Slider Input for maxPrice -->
              <input type="range"
                class="absolute top-1 lg:top-2 left-[-18px] w-[220px] md:w-[315px] lg:w-[390px] xl:w-[390px] h-7 md:h-8 lg:h-9 bg-transparent appearance-none z-10 pointer-events-auto slider"
                :min="listPrice.price_min" :max="listPrice.price_max" step="1" v-model="search.maxPrice"
                @input="updateRange" />

              <!-- Custom Thumb for minPrice -->
              <Icon name="vaadin:money-deposit"
                class="absolute top-[-24px] md:top-[-30px] lg:top-[-32px] text-sky-500 w-6 md:w-7 lg:w-8 h-6 md:h-7 lg:h-8 -translate-x-1/2 shadow-xl"
                :style="{ left: `${percentageMin}%`, bottom: '' }" />

              <!-- Custom Thumb for maxPrice -->
              <Icon name="vaadin:money-withdraw"
                class="absolute bottom-[-24px] md:bottom-[-30px] lg:bottom-[-32px] text-sky-500 w-6 md:w-7 lg:w-8 h-6 md:h-7 lg:h-8 -translate-x-1/2"
                :style="{ left: `${percentageMax}%`, top: '' }" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import service from "~/service";
import { ref, computed } from "vue";
import Swal from "sweetalert2";
import type { searchHomes } from "~/models/search.model";
const token = setCookie("token");
const username = setCookie("username");
const show = ref<boolean>(false);
const router = useRouter();
const listZone = ref<any>([]);
const listPrice = ref<any>([]);


function toggleShow() {
  show.value = !show.value;
}

const search = ref<searchHomes>({
  search: "",
  minPrice: 0,
  maxPrice: 0,
  zone_Id: "",
});

const selectZone = (e: any) => {
  search.value.zone_Id = e.target.value;
};

const linkTo = () => {
  router.push({ path: "/searchhome", query: search.value });
};

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


const getPrice = async () => {
  try {
    const resp: any = await service.listhome.listPrice({
    });
    listPrice.value = resp?.Data || null;
    console.log(listPrice.value);

    // แปลงค่า minPrice และ maxPrice เป็นตัวเลข
    search.value.minPrice = Number(listPrice.value.price_min); // แปลงเป็นตัวเลข
    search.value.maxPrice = Number(listPrice.value.price_max); // แปลงเป็นตัวเลข

    minPrice.value = Number(listPrice.value.price_min);
    maxPrice.value = Number(listPrice.value.price_max);

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
  getPrice();
  // getlistHome();
});

// ค่าราคาเริ่มต้น

const minPrice = ref(0); // ค่าเริ่มต้นต่ำสุด
const maxPrice = ref(0); // ค่าเริ่มต้นสูงสุด

// คำนวณตำแหน่งเปอร์เซ็นต์ของ Slider
const percentageMin = computed(
  () => ((search.value.minPrice - 100) / (maxPrice.value - 100)) * 100
);
const percentageMax = computed(
  () => ((search.value.maxPrice - 100) / (maxPrice.value - 100)) * 100
);

// ฟังก์ชันอัปเดตช่วงราคา
const updateRange = () => {
  // ป้องกันค่า minPrice เกิน maxPrice
  if (search.value.minPrice > search.value.maxPrice) {
    [search.value.minPrice, search.value.maxPrice] = [
      search.value.maxPrice,
      search.value.minPrice,
    ];
  }

  // ตรวจสอบให้ minPrice และ maxPrice อยู่ในขอบเขตที่ถูกต้อง
  search.value.minPrice = Math.max(
    minPrice.value, // ใช้ minPrice.value เป็นขอบเขตต่ำสุด
    Math.min(search.value.minPrice, maxPrice.value) // ใช้ maxPrice.value เป็นขอบเขตสูงสุด
  );
  search.value.maxPrice = Math.max(
    minPrice.value, // ใช้ minPrice.value เป็นขอบเขตต่ำสุด
    Math.min(search.value.maxPrice, maxPrice.value) // ใช้ maxPrice.value เป็นขอบเขตสูงสุด
  );
};




// ฟังก์ชันเพิ่ม/ลดราคาต่ำสุด
const incrementMinPrice = () => {
  if (search.value.minPrice + 100 <= search.value.maxPrice) { // ตรวจสอบให้ minPrice ไม่เกิน maxPrice
    search.value.minPrice += 100;
  }
};

const decrementMinPrice = () => {
  if (search.value.minPrice - 100 >= minPrice.value) { // ตรวจสอบให้ minPrice ไม่ต่ำกว่า minPrice.value
    search.value.minPrice -= 100;
  }
};

// ฟังก์ชันเพิ่ม/ลดราคาสูงสุด
const incrementMaxPrice = () => {
  console.log(search.value.maxPrice, maxPrice.value);
  if (search.value.maxPrice < maxPrice.value) { // ตรวจสอบว่า maxPrice ยังไม่ถึงค่าต่ำสุด
    search.value.maxPrice += 100; // เพิ่ม 100
    // ถ้าเพิ่มแล้วเกิน maxPrice, ให้ปรับให้ maxPrice เป็นค่าใหม่สูงสุด
    if (search.value.maxPrice >= maxPrice.value) {
      search.value.maxPrice = maxPrice.value;
    }
  }
};

const decrementMaxPrice = () => {
  if (search.value.maxPrice > minPrice.value) { // ตรวจสอบว่า maxPrice ยังไม่ต่ำกว่าค่าต่ำสุด
    search.value.maxPrice -= 100; // ลด 100
    // ถ้าลดแล้วต่ำกว่าค่าต่ำสุด minPrice ให้ปรับให้ maxPrice เป็น minPrice
    if (search.value.maxPrice < minPrice.value) {
      search.value.maxPrice = minPrice.value;
    }
  }
};

</script>

<style scoped>
/* ซ่อน Slider Thumb เดิม */
input[type="range"].slider::-webkit-slider-thumb {
  appearance: none;
  height: 0;
  width: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

input[type="range"].slider::-moz-range-thumb {
  appearance: none;
  height: 0;
  width: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

input[type="range"].slider::-ms-thumb {
  appearance: none;
  height: 0;
  width: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
