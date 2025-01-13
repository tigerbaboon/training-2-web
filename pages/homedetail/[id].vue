<template>
  <!-- <pre>{{ listHomeID?.images_main?.url }}</pre> -->
  <div class="flex justify-center my-6">
    <div class="w-[1200px] rounded-lg shadow-lg bg-white">
      <div v-if="Object.keys(listHomeID).length === 0" class="flex justify-center items-center gap-2 w-full h-[520px]">
        <div class="w-20 h-20 border-8 border-t-[#22b6ed] border-gray-300 rounded-full animate-spin"></div>
      </div>
      <div v-else class="h-[500px] grid grid-cols-5 gap-2">
        <div class="col-span-4 h-[520px] relative">
          <img class="w-full h-full object-cover rounded-md shadow-lg "
            :src="currentImage || listHomeID?.images_main?.url || ''" alt="Image" />
          <span :class="[
            'flex items-center text-white font-extrabold text-[20px] px-3 py-1 rounded-md absolute left-3 top-3',
            listHomeID.sell_type === 'ขาย'
              ? 'bg-[#34cf32]'
              : listHomeID.sell_type === 'เช่า'
                ? 'bg-yellow-500'
                : listHomeID.sell_type === 'ขายและเช่า'
                  ? 'bg-sky-500'
                  : '',
          ]">
            <Icon class="mr-1 w-[24px] h-[24px]" name="iconoir:home-sale" />
            {{ listHomeID.sell_type }}
          </span>
        </div>
        <div class="overflow-y-auto snap-y snap-mandatory h-full gap-2">
          <div class="w-[220px] h-[128px] snap-center mb-[2px] border-[3px] border-white hover:border-[#00AEEF]"
            v-for="(image, index) in listHomeID?.images" :key="index" @click="setCurrentImage(image?.url)">
            <img class="w-full h-full object-cover cursor-pointer" :src="image.url" alt="Image" />
          </div>
        </div>
      </div>
      <div class="m-6">
        <div>
          <p class="text-gray-800 text-[29px] font-semibold w-full break-words">
            {{ listHomeID.house_name }}
          </p>
          <div class="flex items-start gap-1 mb-1">
            <Icon class="w-6 h-6 text-red-400" name="openmoji:location-indicator" />
            <p class="text-[18px]">{{ listHomeID.address }}</p>
          </div>
        </div>
        <div class="flex justify-between">
          <div>
            <div class="flex gap-2">
              <span :class="[
                'h-[36px] px-3 py-[1px] flex items-center bg-gradient-to-r from-[#ca5a50] via-[#db7843] to-[#f09f33] border rounded-[4px]  text-white',
                { hidden: !listHomeID.is_recommend },
              ]">
                <Icon class="w-5 h-5 mr-1 text-[#f0f336]" name="heroicons-solid:star" />
                <span class="text-[18px] font-semibold">แนะนำ</span>
              </span>
              <span
                class="h-[36px] px-3 py-[1px] flex items-center border-[#00AEEF] border rounded-[4px] text-[#00AEEF]">
                <Icon class="w-5 h-5 mr-1" name="ix:zone" />
                <span class="text-[18px] font-semibold">{{ listHomeID.zone?.zone_name }}
                </span>
              </span>
              <span
                class="h-[36px] px-3 py-[1px] flex items-center border-[#00AEEF] border rounded-[4px] text-[#00AEEF]">
                <Icon v-if="listHomeID.house_type === 'คอนโด'" class="w-5 h-5 mr-1" name="ix:building2" />
                <Icon v-if="listHomeID.house_type === 'บ้านพัก'" class="w-5 h-5 mr-1" name="typcn:home-outline" />
                <Icon v-if="listHomeID.house_type === 'บ้านเดียว'" class="w-5 h-5 mr-1" name="hugeicons:house-03" />
                <span class="text-[18px] font-semibold">{{ listHomeID.house_type }}
                </span>
              </span>
              <span
                class="h-[36px] px-3 py-[1px] flex items-center border-[#00AEEF] border rounded-[4px] text-[#00AEEF]">
                <Icon class="w-5 h-5 mr-1" name="iconoir:home-sale" />
                <span class="text-[18px] font-semibold">{{ listHomeID.sell_type }}
                </span>
              </span>
            </div>
            <div class="grid grid-cols-1 gap-y-2">
              <div class="flex items-center gap-3 text-gray-900/85 text-[18px] font-bold mt-2">
                <div class="flex items-center gap-2">
                  <Icon class="text-sky-900 w-[24px] h-[24px]" name="ion:bed-outline" />
                  <span class="text-[20px] font-bold text-sky-500">{{ listHomeID.number_of_rooms }}
                  </span>
                  <span class="text-[18px]">ห้องนอน</span>
                </div>
                |
                <div class="flex items-center gap-2">
                  <Icon class="text-sky-900 w-[24px] h-[24px]" name="mdi:bathroom" />
                  <p class="text-[20px] font-bold text-sky-500">
                    {{ listHomeID.number_of_bathrooms }}
                  </p>
                  <p class="text-[18px]">ห้องน้ำ</p>
                </div>
                |
                <div class="flex items-center gap-2">
                  <Icon class="text-sky-900 w-[24px] h-[24px]" name="ri:stairs-line" />
                  <p class="text-[20px] font-bold text-sky-500">
                    {{ listHomeID.floor }}
                  </p>
                  <p class="text-[18px]">ชั้น</p>
                </div>
                |
                <div class="flex items-center gap-2">
                  <Icon class="text-sky-900 w-[24px] h-[24px]"
                    name="material-symbols-light:background-grid-small-outline" />
                  <p class="text-[20px] font-bold text-sky-500">
                    {{ listHomeID.size }}
                  </p>
                  <p class="text-[18px]">ตร.ม.</p>
                </div>
              </div>
              <div class="flex items-center gap-2 text-[20px] font-bold text-gray-900/85">
                <Icon class="text-sky-900 w-[24px] h-[24px]" name="iconoir:light-bulb-on" />
                <span class="text-[18px]">ค่าไฟ</span>
                <p class="text-[18px] font-bold text-sky-500">
                  {{ listHomeID.electricity_rate }}
                </p>
                <p class="text-[18px]">บาท/ต่อหน่วย</p>
              </div>
              <div class="flex items-center gap-2 text-[20px] font-bold text-gray-900/85">
                <Icon class="text-sky-900 w-[24px] h-[24px]" name="healthicons:running-water-outline" />
                <span class="text-[18px]">ค่าน้ำ</span>
                <p class="text-[18px] font-bold text-sky-500">
                  {{ listHomeID.water_rate }}
                </p>
                <p class="text-[18px]">บาท/ต่อหน่วย</p>
              </div>
            </div>
          </div>
          <div class="w-[500px] text-right relative">
            <div
              class="absolute top-[50px] right-0 w-12 hover:w-[250px] h-[40px] bg-sky-400 flex justify-center items-center rounded-[3px] text-white font-medium overflow-hidden transition-all duration-700 group"
              style="transform-origin: left">
              <Icon
                class="w-[28px] h-[28px] font-semibold group-hover:flex group-hover:justify-end transition-opacity duration-700"
                name="line-md:phone-call-loop" />
              <span
                class="text-[20px] font-semibold pl-2 hidden group-hover:flex group-hover:justify-end group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap">
                {{ listHomeID?.contact_info?.phone_number }}
              </span>
            </div>
            <nuxt-link :to="`https://line.me/ti/p/${listHomeID?.contact_info?.line_id}`" target="_blank"
              class="absolute top-[97px] right-0 w-12 hover:w-[250px] h-[40px] bg-[#0ac857] flex justify-center items-center rounded-[3px] text-white font-medium overflow-hidden transition-all duration-700 group"
              style="transform-origin: left">
              <Icon class="w-[28px] h-[28px] group-hover:flex group-hover:items-end transition-opacity duration-700"
                name="fontisto:line" />
              <span
                class="text-[16px] font-semibold pl-2 hidden group-hover:flex group-hover:justify-end group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap">
                {{ listHomeID?.contact_info?.line_id }}
              </span>
            </nuxt-link>
            <div @click="toggleMap"
              class="absolute top-[144px] right-0 w-12 h-[40px] border-[#488fed] border-2 flex justify-center items-center rounded-[3px] text-white font-medium cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#edeff3] hover:border-[#1d6dc1] hover:shadow-lg hover:scale-105">
              <Icon class="w-[28px] h-[28px] transition-transform duration-300 hover:rotate-45"
                name="logos:google-maps" />
            </div>

            <div class="flex items-end gap-2 text-[18px] text-sky-900 my-1 absolute top-[185px] right-0">
              <Icon class="text-sky-900 w-[24px] h-[24px]" name="mingcute:announcement-line" />
              ผู้ลงประกาศ :
              <span class="text-[18px] text-gray-900/85 truncate font-semibold">{{ listHomeID?.contact_info?.first_name
                }}
                {{ listHomeID?.contact_info?.last_name }}</span>
            </div>
            <p v-if="listHomeID.sell_type === 'ขาย'" class="text-[#34cf32] text-4xl font-semibold mb-40">
              {{ formatNumber(listHomeID.price, 0) }}
              <span class="text-2xl">บาท</span>
            </p>
            <p v-if="listHomeID.sell_type === 'เช่า'" class="text-[#34cf32] text-4xl font-semibold mb-40">
              {{ formatNumber(listHomeID.price, 0) }}
              <span class="text-2xl">บาท/เดือน</span>
            </p>
          </div>
        </div>
        <div class="h-px bg-gray-300 my-6"></div>
        <!-- แมพ -->
        <div :class="['relative overflow-hidden transition-all duration-700 ease-in-out ']"
          :style="{ maxHeight: isMapVisible ? '600px' : '0px' }">
          <div id="map" class="w-full h-[500px] border-2 border-sky-500 rounded-lg"></div>
          <div class="absolute bottom-4 left-4 flex items-center gap-2">
            <button
              class="bg-[#00AEEF] hover:bg-[#008ec1] text-white text-[14px] font-medium py-1 px-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              @click="searchNearby('hospital')">
              สถานบริการด้านสุขภาพ
            </button>
            <button
              class="bg-[#00AEEF] hover:bg-[#008ec1] text-white text-[14px] font-medium py-1 px-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              @click="searchNearby('school')">
              โรงเรียน
            </button>
            <button
              class="bg-[#00AEEF] hover:bg-[#008ec1] text-white text-[14px] font-medium py-1 px-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              @click="searchNearby('convenience_store')">
              ร้านสะดวกซื้อ
            </button>
            <button
              class="bg-[#00AEEF] hover:bg-[#008ec1] text-white text-[14px] font-medium py-1 px-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              @click="searchNearby('restaurant')">
              อาหารและเครื่องดื่ม
            </button>
            <button
              class="bg-[#00AEEF] hover:bg-[#008ec1] text-white text-[14px] font-medium py-1 px-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              @click="searchNearby('grocery_or_supermarket')">
              ซุปเปอร์มาร์เก็ต
            </button>
            <button
              class="bg-[#00AEEF] hover:bg-[#008ec1] text-white text-[14px] font-medium py-1 px-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              @click="searchNearby('cafe')">
              คาเฟ่
            </button>
            <button
              class="bg-[#00AEEF] hover:bg-[#008ec1] text-white text-[14px] font-medium py-1 px-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              @click="searchNearby('bank')">
              ธนาคาร
            </button>
            <button
              class="bg-[#00AEEF] hover:bg-[#008ec1] text-white text-[14px] font-medium py-1 px-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              @click="searchNearby('bar')">
              สถานบันเทิง
            </button>
            <button
              class="bg-[#00AEEF] hover:bg-[#008ec1] text-white text-[14px] font-medium py-1 px-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              @click="searchNearby('pharmacy')">
              ร้านขายยา
            </button>
            <button
              class="bg-[#00AEEF] hover:bg-[#008ec1] text-white text-[14px] font-medium py-1 px-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              @click="searchNearby('gas_station')">
              ปั๊มน้ำมัน
            </button>
          </div>
        </div>
        <div class="my-4">
          <h1 class="text-2xl mb-2">รายละเอียด :</h1>
          <!-- <p
                        class="w-full h-[400px] overflow-y-auto text-[18px] text-gray-700 mb-4 p-7 border  border-gray-300 rounded-lg  text-wrap">
                            {{ listHomeID?.description }}</p> -->
          <!-- <div v-html="listHomeID?.description">
                    </div> -->
          <!-- <textarea
            class="h-auto text-[18px] text-gray-700 mb-4 p-7 border border-gray-300 rounded-lg bg-white/80 text-wrap"
            disabled rows="10" cols="131">
                        {{ listHomeID?.description }}
          </textarea> -->
          <pre
            class="h-auto text-[16px] text-gray-700 mb-4 p-7 border border-gray-300 rounded-lg bg-white/80 whitespace-pre-wrap break-words">
  {{ formattedDescription }}
          </pre>
        </div>
        <div>
          <h3 class="text-2xl mt-6 mb-4">สิ่งอำนวยความสะดวก</h3>
          <div class="grid grid-cols-4 gap-3 border border-gray-300 rounded-lg p-4">
            <div class="text-center p-3 bg-sky-500/10 rounded-md shadow-md" v-for="(list, f) in listHomeID.amenity"
              :key="f">
              <p class="flex items-center justify-start gap-[6px] pl-16">
                <Icon class="w-[20px] h-[20px] text-sky-950" :name="list?.icons = '' : '' ?" />
                <span class="text-gray-800">{{ list.name }}</span>
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="mt-8">
          <h3 class="text-2xl mb-4">ที่พักที่ใกล้เคียง</h3>
          <AwayRecommen />
        </div> -->
      </div>
    </div>
  </div>
  <!-- <pre>{{ listHomeID }}</pre> -->
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import service from "~/service";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
import type { House } from "~/models/home.model";
import { useRuntimeConfig } from "#app";

const route = useRoute();
const refId = ref<any>(route.params.id);
const listHomeID = ref<House>({} as House);
const isMapVisible = ref(false);
const currentImage = ref<string | null>(null);
definePageMeta({
  layout: "default",
});

const formattedDescription = computed(() => {
  const description = listHomeID.value?.description || ''; // กำหนดค่าเริ่มต้นเป็นค่าว่างหากไม่มีข้อมูล

  return description
    .replace(/[\r\n]+/g, '\n') // แทนที่ \r\n หรือ \n ซ้ำ ๆ ด้วย \n เดียว
    .split('\n') // แยกข้อความออกเป็นแต่ละบรรทัด
    .map(line => line.trim()) // ลบช่องว่างด้านหน้าและด้านหลังของแต่ละบรรทัด
    .filter(line => line !== '') // ลบบรรทัดว่าง
    .join('\n'); // รวมข้อความกลับพร้อม \n เพื่อแสดงผลแบบเว้นบรรทัด
});

// ฟังก์ชันเปิด/ปิดการแสดงผลแผนที่
function toggleMap() {
  isMapVisible.value = !isMapVisible.value;
}

// 16.489455799838968, 102.82032526986853

const getListHomeID = async () => {
  try {
    const resp: any = await service.listhome.listHomeID({
      id: refId.value,
    });
    // console.log(resp);
    listHomeID.value = resp?.Data || null;
    if (homeLocation.value) {
      setHomeLocation();
    }
  } catch (error: any) {
    console.log(error);
  }
};

const setCurrentImage = (url: string) => {
  currentImage.value = url;
};

const config = useRuntimeConfig();
const g_lat = ref<number | null>(null);
const g_lng = ref<number | null>(null);
const homeLocation = ref<{ lat: number; lng: number } | null>(null);
const markers = ref<any | []>([]);
let g_map: google.maps.Map;
let g_geocoder: google.maps.Geocoder;
let g_placesService: google.maps.places.PlacesService;

function initMap(): void {
  g_map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 0.0, lng: 0.0 }, // Default center
    zoom: 16,
  });

  g_geocoder = new google.maps.Geocoder();
  g_placesService = new google.maps.places.PlacesService(g_map);

  // เรียกฟังก์ชัน setHomeLocation เพื่อเพิ่มมาร์กเกอร์บนแผนที่
  setHomeLocation();
}

function setHomeLocation(): void {
  if (
    listHomeID.value.location_latitute &&
    listHomeID.value.location_longitute
  ) {
    g_lat.value = listHomeID.value.location_latitute;
    g_lng.value = listHomeID.value.location_longitute;
    homeLocation.value = {
      lat: listHomeID.value.location_latitute,
      lng: listHomeID.value.location_longitute,
    };
    addHomeMarker();
  }
}

function addHomeMarker(): void {
  if (homeLocation.value) {
    const homeMarker = new google.maps.Marker({
      position: homeLocation.value,
      map: g_map,
      title: "ตำแหน่งที่อยู่ของประกาศ",
      icon: {
        url: "https://img.icons8.com/?size=100&id=4qW6TdJxuCYv&format=png&color=000000", // URL ไอคอน
        scaledSize: new google.maps.Size(50, 50), // ปรับขนาดไอคอน (กว้าง x สูง)
        anchor: new google.maps.Point(25, 25), // จุดอ้างอิงของไอคอน
      },
    });
    g_map.setCenter(homeLocation.value); // เลื่อนแผนที่ไปที่บ้าน
    // markers.value.push(homeMarker);
  }
}
function clearMarkers(): void {
  markers.value.map((marker) => toRaw(marker).setMap(null));
}

function searchNearby(category: string): void {
  if (homeLocation.value) {
    const location = new google.maps.LatLng(
      homeLocation.value.lat,
      homeLocation.value.lng
    );
    const request = {
      location: location,
      radius: 1500, // ระยะทางในเมตร
      type: [category],
      zoom: 8,
    };

    if (markers && markers.value.length > 0) {
      console.log("clear markers");
      clearMarkers();
    }

    g_placesService.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {

        results.forEach((place) => {
          console.log(place.geometry.location.lat(), place.geometry.location.lng());
          const marker_mapppp = new google.maps.Marker({
            position: { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() },
            map: g_map,
            title: place.name,
            icon: getCategoryIcon(category),
          });

          markers.value.push(marker_mapppp);
        });
        // console.log("dsadasdas",markers.value);
      } else {
        console.error("Nearby search failed:", status);
      }
    });
  }
}

function getCategoryIcon(category: string): google.maps.Icon {
  switch (category) {
    case "hospital":
      return {
        url: "https://img.icons8.com/?size=100&id=5ifINkngAteB&format=png&color=000000",
        scaledSize: new google.maps.Size(35, 35),
      };
    case "school":
      return {
        url: "https://img.icons8.com/?size=100&id=J3sNaShPUTPy&format=png&color=000000",
        scaledSize: new google.maps.Size(35, 35),
      };
    case "restaurant":
      return {
        url: "https://img.icons8.com/?size=100&id=U583FTaaU7w0&format=png&color=000000",
        scaledSize: new google.maps.Size(35, 35),
      };
    case "convenience_store": // ร้านสะดวกซื้อ
      return {
        url: "https://img.icons8.com/?size=100&id=pmzAHWwbZBIP&format=png&color=000000",
        scaledSize: new google.maps.Size(25, 25),
      };
    case "cafe": // คาเฟ่
      return {
        url: "https://img.icons8.com/?size=100&id=4SzIwzuZLdOk&format=png&color=000000",
        scaledSize: new google.maps.Size(35, 35),
      };
    case "bar": // สถานบันเทิง
      return {
        url: "https://img.icons8.com/?size=100&id=GAvu9Y3Rz5wW&format=png&color=000000",
        scaledSize: new google.maps.Size(35, 35),
      };
    case "gas_station": // ปั้มน้ำมัน
      return {
        url: "https://img.icons8.com/?size=100&id=poLWeHoGAOGx&format=png&color=000000",
        scaledSize: new google.maps.Size(35, 35),
      };
    case "grocery_or_supermarket": // ซุปเปอร์มาร์เก็ต
      return {
        url: "https://img.icons8.com/?size=100&id=jQ5k6DEnPUkS&format=png&color=000000",
        scaledSize: new google.maps.Size(30, 30),
      };
    case "pharmacy": // ร้านขายยา
      return {
        url: "https://img.icons8.com/?size=100&id=nh7Xq59mxwpF&format=png&color=000000",
        scaledSize: new google.maps.Size(20, 20),
      };
    case "bank": // ธนาคาร
      return {
        url: "https://img.icons8.com/?size=100&id=INpV1lzj3JeN&format=png&color=000000",
        scaledSize: new google.maps.Size(35, 35),
      };

    default:
      return {
        url: "",
        scaledSize: new google.maps.Size(0, 0),
      };
  }
}




onMounted(() => {
  getListHomeID();
  (window as any).initMap = initMap;
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${config.public.googleMapsApiKey}&callback=initMap&v=weekly&libraries=places`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);

  watchEffect(() => {
    g_lat.value = listHomeID.value.location_latitute;
    g_lng.value = listHomeID.value.location_longitute;
    setHomeLocation();
    console.log(g_lat.value, g_lng.value);
  });
});
</script>

<style scoped>
/* ปรับแต่ง Scrollbar */
.flex::-webkit-scrollbar {
  height: 12px;
  /* ขนาดความสูงของ Scrollbar */
}

.flex::-webkit-scrollbar-thumb {
  background-color: #17d2d2;
  border-radius: 4px;
  border: 2px solid transparent;
  /* เพิ่มระยะว่างให้ Scrollbar */
}
</style>
