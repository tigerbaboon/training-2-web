<template>
  <div class=" w-full  flex justify-center">
    <div v-if="!properties.length"
      class="w-full h-[754px] flex justify-center items-center gap-2 bg-white rounded-lg p-3 duration-[450ms]">
      <div class="w-20 h-20 border-8 border-t-[#22b6ed] border-gray-300 rounded-full animate-spin"></div>
    </div>
    <div v-else>
      <div id="map" class="w-[1900px] h-[754px] relative "></div>
      <div class="absolute bottom-[110px] left-[30px] flex flex-col gap-3 z-10">
        <div class="flex flex-col gap-3 ">
          <button
            :class="`${getButtonClass('buy_house')}`"
            @click="searchNearby('buy_house')">เช่า</button>
          <button
            :class="`${getButtonClass('sell_house')}`"
            @click="searchNearby('sell_house')">ขาย</button>
        </div>
        <div class="flex gap-2">
          <button
            :class="`${getButtonClass('hospital')} text-white text-[14px] font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300`"
            @click="searchNearby('hospital')">
            สถานบริการด้านสุขภาพ
          </button>
          <button
            :class="`${getButtonClass('school')} text-white text-[14px] font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300`"
            @click="searchNearby('school')">
            โรงเรียน
          </button>
          <button
            :class="`${getButtonClass('convenience_store')} text-white text-[14px] font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300`"
            @click="searchNearby('convenience_store')">
            ร้านสะดวกซื้อ
          </button>
          <button
            :class="`${getButtonClass('restaurant')} text-white text-[14px] font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300`"
            @click="searchNearby('restaurant')">
            อาหารและเครื่องดื่ม
          </button>
          <button
            :class="`${getButtonClass('grocery_or_supermarket')} text-white text-[14px] font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300`"
            @click="searchNearby('grocery_or_supermarket')">
            ซุปเปอร์มาร์เก็ต
          </button>
          <button
            :class="`${getButtonClass('cafe')} text-white text-[14px] font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300`"
            @click="searchNearby('cafe')">
            คาเฟ่
          </button>
          <button
            :class="`${getButtonClass('bank')} text-white text-[14px] font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300`"
            @click="searchNearby('bank')">
            ธนาคาร
          </button>
          <button
            :class="`${getButtonClass('bar')} text-white text-[14px] font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300`"
            @click="searchNearby('bar')">
            สถานบันเทิง
          </button>
          <button
            :class="`${getButtonClass('pharmacy')} text-white text-[14px] font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300`"
            @click="searchNearby('pharmacy')">
            ร้านขายยา
          </button>
          <button
            :class="`${getButtonClass('gas_station')} text-white text-[14px] font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300`"
            @click="searchNearby('gas_station')">
            ปั๊มน้ำมัน
          </button>
        </div>
      </div>

    </div>
    <div :class="['transition-all duration-700 ease-in-out  ']" :style="{ maxHeight: isMapVisible ? '600px' : '0px' }">
    </div>
  </div>
  <!-- <pre>{{ properties }}</pre> -->
</template>

<script setup lang="ts">
import { useRuntimeConfig } from "#imports";
import Swal from "sweetalert2";
import service from "~/service"; // นำเข้า service สำหรับเรียก API

const center = ref({ lat: 0, lng: 0 });
const properties = ref([]);
const loading = ref(false);
const isLoading = ref<boolean>(false);
const config = useRuntimeConfig();
const g_lat = ref<number | null>(null);
const g_lng = ref<number | null>(null);
const homeLocation = ref({ lat: 0, lng: 0 });
const markers = ref<google.maps.Marker[]>([]);
const listHomeID = ref({ location_latitute: null, location_longitute: null });
let g_placesService: google.maps.places.PlacesService;
let g_map: google.maps.Map;

const cache_marker_desp = new Map();

const house_buy_cache = ref([]);
const house_sell_cache = ref([]);


const cache_marker = ref<{ [key: string]: any[] }>({});

const getButtonClass = (category: string) => {

  if (category === "sell_house") {
    return cache_marker.value[category]?.length
      ? 'w-[100px] text-[14px] font-bold text-white bg-[#34cf32] rounded-lg px-4 py-2 border-2 border-[#34cf32] hover:border-[#34cf32] duration-300'
      : 'w-[100px] text-[14px] font-bold text-[#34cf32] bg-white border-2 border-[#34cf32] rounded-lg px-4 py-2 hover:border-[#34cf32] duration-300';
  } else if (category === "buy_house") {
    return cache_marker.value[category]?.length
      ? 'w-[100px] text-[14px] font-bold text-white bg-orange-500 rounded-lg px-4 py-2 border-2 border-orange-500 hover:border-orange-400 duration-300'
      : 'w-[100px] text-[14px] font-bold text-orange-500 bg-white border-2 border-orange-500 rounded-lg px-4 py-2 hover:border-orange-400 duration-300';
  } else {
    return cache_marker.value[category]?.length
      ? 'bg-sky-900'
      : 'bg-[#00AEEF]';
  }
};



function getCurrentLocation(): void {
  loading.value = true;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        center.value.lat = pos.lat;
        center.value.lng = pos.lng;
        homeLocation.value.lat = pos.lat;
        homeLocation.value.lng = pos.lng;
        loading.value = false;
        SubmitApi();
        searchNearby("restaurant"); // เรียกใช้ searchNearby พร้อมกับหมวดหมู่หลังจากได้ตำแหน่งแล้ว
      },
      () => {
        loading.value = false;
      }
    );
  } else {
    loading.value = false;
  }
}

function searchNearby(category: string): void {
  if (homeLocation.value) {
    const location = new google.maps.LatLng(homeLocation.value.lat, homeLocation.value.lng);
    const request = {
      location: location,
      radius: 1500, // ระยะทางในการค้นหา
      type: [category],
      zoom: 8,
    };



    if (cache_marker.value[category] && cache_marker.value[category].length > 0) {
      // ลบ markers เก่าก่อนการค้นหาครั้งใหม่
      clearMarkers(category);
      return;
    }

    if (category === "buy_house" || category === "sell_house") {
      const local_house = ref([]);
      if (category === "buy_house") {
        local_house.value = house_buy_cache.value
        console.log(local_house.value, "buy_house");
      } else if (category === "sell_house") {
        local_house.value = house_sell_cache.value
      }
      (async () => {
        try {
          const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");
          for (const property of local_house.value) {
            const contentElement = document.createElement("div");
            contentElement.textContent = ""; // Customize marker content
            const marker = new AdvancedMarkerElement({
              map: g_map, // Use 'map' instead of 'g_map'
              position: {
                lat: property.location_latitute,
                lng: property.location_longitute,
              },
              content: contentElement, // Optional: Custom HTML content for the marker
            });
            CreateHomeBuyAndSale(marker, property, category);
          }
        } catch (error) {
          console.error("Error creating markers:", error);
        }
      })();
      return;
    }
    g_placesService.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        results.forEach((place: any) => {
          // console.log(
          //   "map",
          //   place.geometry.location.lat(),
          //   place.geometry.location.lng()
          // );

          const marker = new google.maps.Marker({
            position: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            },
            map: g_map,
            title: place.name,
            icon: getCategoryIcon(category),
          });

          if (!cache_marker.value[category]) {
            cache_marker.value[category] = [];
          }

          cache_marker.value[category].push(marker);



          // Store the marker in the markers array for future reference
          markers.value.push(marker);
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "เกิดข้อผิดพลาด",
          text: "ไม่พบ สถานที่ใกล้เคียง",
        });
        console.error("Nearby search failed:", status);
        return;
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
    case "buy_house": // เช่า-ชื้อ
      return {
        url: "https://img.icons8.com/?size=100&id=oAYqcGozOAOl&format=png&color=000000",
        scaledSize: new google.maps.Size(35, 35),

      };
    case "sell_house": // ขาย
      return {
        url: "https://img.icons8.com/?size=100&id=1hl6f45usKMR&format=png&color=000000",
        scaledSize: new google.maps.Size(35, 35),

      };

    default:
      return {
        url: "",
        scaledSize: new google.maps.Size(0, 0),
      };
  }
}

function buildContent(property: any) {
  const content = document.createElement("div");
  content.classList.add(
    "p-4",
    "bg-white",
    "shadow-lg",
    "rounded-lg",
    "text-sm",
    "border",
    "border-gray-200",
    "cursor-pointer",
  );
  const router = useRouter(); // ใช้ useRouter() ใน Nuxt 3
  content.addEventListener("click", () => {
    router.push(`/homedetail/${property?.id}`);
  });
  if (property.sell_type === "ขาย") {
    // console.log("property", property);
    content.innerHTML = `
     <span class="w-auto">
    <div class="flex items-center gap-1 mb-1">
      <img class="w-7 h-7" src="https://img.icons8.com/?size=100&id=SQUhc67Yi70U&format=png&color=000000" />
      <span class="text-[25px] font-bold text-sky-500">${formatNumber(
      property.price,
      0
    )} <span class="text-[16px]">บาท</span></span>
    </div>
    <div class="flex items-center gap-1">
      <span>
        <img class="w-6 h-6 mb-2" src="https://img.icons8.com/?size=100&id=iJzm3AFQCS4W&format=png&color=000000" />
      </span>
      <span class="text-md text-gray-800">${property.house_name}</span>
    </div>
    <div class="flex items-center gap-[2px]">
      <!-- <span>
        <img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=21612&format=png&color=000000" />
      </span> -->
      <span class="text-gray-500 text-sm pl-6">${property.address}</span>
    </div>
    <div class="flex items-end  space-x-4 text-gray-700 pl-5">
      <div class="flex items-start space-x-[5px]">
        <img class="w-4 h-4" src="https://img.icons8.com/?size=100&id=XXIRpM5ZLkpp&format=png&color=000000" />
        <span class="flex items-end">${property.number_of_rooms} ห้องนอน</span>
      </div>
      <div class="flex items-start space-x-[5px]">
        <img class="w-4 h-4" src="https://img.icons8.com/?size=100&id=ScnZMMzLgN5p&format=png&color=000000" />
        <span class="flex items-end">${property.number_of_bathrooms
      } ห้องน้ำ</span>
      </div>
      <div class="flex items-start space-x-[5px]">
        <img class="w-4 h-4" src="https://img.icons8.com/?size=100&id=g0HwtvyaJ9v2&format=png&color=000000" />
        <span class="flex items-end">${property.size} ตร.ม.</span>
      </div>
    </div>
    <div class="flex items-start space-x-[5px]">
    
    </div>
  </span>
  `;
  } else {
    content.innerHTML = `
     <span class="w-auto">
    <div class="flex items-center gap-1 mb-1">
      <img class="w-7 h-7 " src="https://img.icons8.com/?size=100&id=SQUhc67Yi70U&format=png&color=000000" />
      <span class="text-[25px] font-bold text-sky-500">${formatNumber(
      property.price,
      0
    )} <span class="text-[16px]">บาท/เดือน</span></span>
    </div>
    <div class="flex items-center gap-1">
      <span>
        <img class="w-6 h-6 mb-2" src="https://img.icons8.com/?size=100&id=iJzm3AFQCS4W&format=png&color=000000" />
      </span>
      <span class="text-md text-gray-800">${property.house_name}</span>
    </div>
    <div class="flex items-center gap-[2px]">
      <!-- <span>
        <img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=21612&format=png&color=000000" />
      </span> -->
      <span class="text-gray-500 text-sm pl-6">${property.address}</span>
    </div>
    <div class="flex items-end  space-x-4 text-gray-700 pl-5">
      <div class="flex items-start space-x-[5px]">
        <img class="w-4 h-4" src="https://img.icons8.com/?size=100&id=XXIRpM5ZLkpp&format=png&color=000000" />
        <span class="flex items-end">${property.number_of_rooms} ห้องนอน</span>
      </div>
      <div class="flex items-start space-x-[5px]">
        <img class="w-4 h-4" src="https://img.icons8.com/?size=100&id=ScnZMMzLgN5p&format=png&color=000000" />
        <span class="flex items-end">${property.number_of_bathrooms
      } ห้องน้ำ</span>
      </div>
      <div class="flex items-start space-x-[5px]">
        <img class="w-4 h-4" src="https://img.icons8.com/?size=100&id=g0HwtvyaJ9v2&format=png&color=000000" />
        <span class="flex items-end">${property.size} ตร.ม.</span>
      </div>
    </div>
  </span>
  `;
  }
  return content;
}


async function initMap() {
  const { Map } = await window.google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");

  const map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: center.value,
    mapId: "4504f8b37365c3d0",
  });

  g_placesService = new google.maps.places.PlacesService(map);

  const userMarker = new google.maps.Marker({
    position: center.value,
    map: map,
    title: "ตำแหน่งของคุณ",
    icon: {
      url: "https://img.icons8.com/?size=100&id=PZTTDl8ML4vy&format=png&color=000000",
      scaledSize: new google.maps.Size(50, 50),
    },
  });

  for (const property of properties.value) {
    const temp_category = ref("");
    if (property.sell_type === "ขาย") {
      temp_category.value = "sell_house"
      console.log("ขาย type", property.sell_type);
      house_sell_cache.value.push(property)
      console.log(house_sell_cache.value, "house_sell_cache")
    } else {
      temp_category.value = "buy_house"
      console.log("เช่า type", property.sell_type);
      house_buy_cache.value.push(property)

      console.log(house_buy_cache.value, "house_buy_cache")
    }

    const marker = new AdvancedMarkerElement({
      map,
      content: document.createElement("div"),
      position: {
        lat: property.location_latitute,
        lng: property.location_longitute,
      },
    });

    // console.log("property v",property.sell_type)



    CreateHomeBuyAndSale(marker, property, temp_category.value);
  }


  g_map = map;
}


function CreateHomeBuyAndSale(marker: any, property: any, category: any) {

  const cardContent = buildContent(property);
  const isForSale = property.sell_type === "ขาย";
  console.log("CreateHomeBuyAndSale sell_type", property.sell_type)
  const iconUrl = isForSale
    ? "https://img.icons8.com/?size=100&id=1hl6f45usKMR&format=png&color=000000"
    : "https://img.icons8.com/?size=100&id=oAYqcGozOAOl&format=png&color=000000";

  const infoWindow = new google.maps.InfoWindow({
    content: cardContent,
  });


  if (!cache_marker.value[category]) {
    cache_marker.value[category] = [];
  }

  cache_marker.value[category].push(marker);
  // console.log(cache_marker.value, isForSale, "isForSale");

  // Create Tooltip container
  const tooltip = document.createElement("div");
  tooltip.innerHTML = `
  <div class="w-[240px] flex items-center gap-[3px]">
    <!-- ส่วนข้อความ "ขาย" หรือ "เช่า" -->
    <span class="${isForSale ? 'text-green-600 border-green-600' : 'text-orange-600 border-orange-600'} bg-white shadow-lg text-[16px] font-medium px-2 py-1 border-[2px] rounded-[5px]">
      ${isForSale ? "ขาย" : "เช่า"}
    </span>

    <!-- ส่วนข้อความ "house_type" -->
    <span class="bg-white shadow-lg text-[#00AEEF] text-[16px] font-medium px-2 py-1 border-[2px] border-[#00AEEF] rounded-[5px]">
      ${property.house_type}
    </span>
  </div>`;
  tooltip.className = "absolute top-[-35px] left-[-25px] z-10 hidden";



  // Set the marker's icon
  const markerIcon = document.createElement("img");
  markerIcon.src = iconUrl;
  markerIcon.className = "w-10 h-10 cursor-pointer";
  marker.content.appendChild(markerIcon);
  marker.content.appendChild(tooltip);

  // Show/Hide Tooltip on hover
  marker.content.addEventListener("mouseenter", () => {
    tooltip.classList.remove("hidden");
  });

  marker.content.addEventListener("mouseleave", () => {
    tooltip.classList.add("hidden");
  });

  cache_marker_desp.set(marker, { infoWindow, isOpen: false });

  marker.addListener("click", () => {
    const cache = cache_marker_desp.get(marker);

    if (cache.isOpen) {
      cache.infoWindow.close();
      cache.isOpen = false;
    } else {
      cache.infoWindow.open(map, marker);
      cache.isOpen = true;
    }

    cache_marker_desp.set(marker, cache);
  });
}


const SubmitApi = async () => {
  isLoading.value = true;
  try {
    const resp: any = await service.user.apimap({
      latitude: center.value.lat,
      longitude: center.value.lng,
    });
    if (resp.Code == "200") {
      properties.value = resp?.Data || [];
      console.log("home", properties.value);

      initMap(); // เรียกใช้ฟังก์ชัน initMap หลังจากดึงข้อมูลสำเร็จ
    }
  } catch (error: any) {
    Swal.fire({
      icon: "error",
      title: "เกิดข้อผิดพลาด",
      text: error || "เกิดข้อผิดพลาด",
    });
  } finally {
    isLoading.value = false;
  }
};

function clearMarkers(category: string): void {
  if (cache_marker.value[category]) {
    cache_marker.value[category].forEach((marker) => toRaw(marker).setMap(null));
    cache_marker.value[category] = [];
  }
}

onMounted(async () => {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${config.public.googleMapsApiKey}&libraries=places`;
  script.async = true;
  script.defer = true;
  script.onload = async () => {
    getCurrentLocation(); // เรียกข้อมูลพิกัดจากเบราว์เซอร์
  };
  document.head.appendChild(script);
  watchEffect(() => {
    g_lat.value = listHomeID.value.location_latitute;
    g_lng.value = listHomeID.value.location_longitute;
    setHomeLocation();
    console.log(g_lat.value, g_lng.value);
  });
});

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
        scaledSize: new google.maps.Size(50, 50),
        anchor: new google.maps.Point(25, 25),
      },
    });
    g_map.setCenter(homeLocation.value); // เลื่อนแผนที่ไปที่บ้าน
    // markers.value.push(homeMarker);
  }
}


</script>
