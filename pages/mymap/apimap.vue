<template>
  <div>
    <GoogleMap
      v-if="googlemap && !loading"
      :api-key="config.public.googleMapsApiKey"
      style="width: 100%; height: 750px"
      :center="center"
      :zoom="15"
      @load="onMapLoad"
    >
      <Marker :options="{ position: center }" v-on:click="getCurrentLocation" />
    </GoogleMap>
    <button @click="searchHomeby('home')">Search Nearby Homes</button>
  </div>
</template>

<script setup lang="ts">
import Swal from "sweetalert2";
import { ref, onMounted } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import service from "~/service";

const center = ref({ lat: 0, lng: 0 });
const googlemap = ref(false);
const config = useRuntimeConfig();
const loading = ref(false);
const isLoading = ref<boolean>(false);
const items = ref<any[]>([]);
const markers = ref<any[]>([]);
const map = ref<any>(null); // ตัวแปรสำหรับเก็บข้อมูลแผนที่

const changegooglemap = () => {
  loading.value = true;
  googlemap.value = !googlemap.value;
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
        loading.value = false;
        SubmitApi();
      },
      () => {
        loading.value = false;
      }
    );
  } else {
    loading.value = false;
  }
}

const SubmitApi = async () => {
  isLoading.value = true;
  try {
    const resp: any = await service.user.apimap({
      latitude: center.value.lat,
      longitude: center.value.lng,
    });
    if (resp.Code == "200") {
      items.value = resp?.Data || [];
      searchHomeby('home'); // เรียกใช้ฟังก์ชัน searchHomeby หลังจากดึงข้อมูลสำเร็จ
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

function searchHomeby(category: string): void {
  if (items.value.length > 0) {
    if (markers.value.length > 0) {
      clearMarkers();
    }

    addMarkers(items.value, category);
  } else {
    console.error("No items found");
  }
}

async function addMarkers(data: any[], category: string): Promise<void> {
  for (const item of data) {
    const marker = new google.maps.Marker({
      position: { lat: item.location_latitute, lng: item.location_longitute },
      map: map.value, // ใช้ map ที่เก็บข้อมูลแผนที่
      title: item.house_name,
      icon: getCategoryIcon(category),
    });
    console.log(marker);
    
    markers.value.push(marker);
  }
}

function clearMarkers(): void {
  markers.value.forEach((marker) => {
    marker.setMap(null);
  });
  markers.value = [];
}

function getCategoryIcon(category: string): string {
  switch (category) {
    case "home":
      return "https://maps.google.com/mapfiles/kml/shapes/homegardenbusiness.png";
    default:
      return "";
  }
}

function onMapLoad(mapInstance: any): void {
  map.value = mapInstance; // เก็บข้อมูลแผนที่เมื่อโหลดเสร็จ
}

onMounted(() => {
  getCurrentLocation();
  changegooglemap();
});
</script>