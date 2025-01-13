<template>
    <div class="w-full flex justify-center bg-gray-50 py-10">
        <div class="w-[1200px] bg-white  rounded-lg shadow-lg">
            <h1 class="text-[30px] font-semibold m-5">สถานที่ : {{ listLocation?.travel_title }} </h1>
            <h2 class="text-[24px] text-gray-600 m-5">โซน : ยังไม่ระบุ</h2>
            <div class="w-[1200px]  rounded-lg shadow-lg  bg-white">
                <div class="h-[520px] grid grid-cols-5 gap-2">
                    <div class="col-span-4 h-[520px]">
                        <!-- รูปใหญ่ -->
                        <img class="w-full h-full object-cover rounded-md shadow-md"
                            :src="currentImage || listLocation?.image_main?.url || ''" alt="Image" />
                        <!-- รูปเล็ก -->
                        <!-- แบบใช้เมาส์ hover -->
                        <!-- <div class="flex overflow-x-auto snap-x snap-mandatory h-[150px] w-[1152px] gap-4">
                        <div class="rounded-sm shadow-sm snap-center flex-shrink-0"
                            v-for="(image, index) in listLocation.images.slice(0)" :key="index"
                            @mouseover="setCurrentImage(image.url)">
                            <img class="w-[300px] h-full object-cover cursor-pointer" :src="image.url" alt="Image" />
                        </div>
                    </div> -->
                        <!-- แบบใช้เมาส์คลิก -->
                    </div>
                    <div class="overflow-y-auto snap-y snap-mandatory h-full gap-2">
                        <div class="w-[220px] h-[128px] snap-center mb-[2px] border-[3px] hover:border-[#00AEEF]"
                            v-for="(image, index) in listLocation?.images" :key="index"
                            @click="setCurrentImage(image.url)">
                            <img class="w-full h-full object-cover cursor-pointer" :src="image.url" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
            <p class="text-[24px] font-medium my-1 text-gray-800 m-5">{{ listLocation?.travel_title }}</p>
            <!-- <pre class="text-[18px] text-gray-700 leading-relaxed m-5 p-7 border rounded-md indent-0 shadow-xl text-wrap ">
                {{ listLocation?.travel_detail }}
            </pre> -->
            <textarea
                class="h-auto text-[18px] text-gray-700 m-5 p-7 border border-gray-300 rounded-lg bg-white/80 text-wrap"
                disabled rows="13" cols="131">
                        {{ listLocation?.travel_detail }}
                    </textarea>
            <div class="h-[2px] bg-gray-300 my-6"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import service from '~/service';

definePageMeta({
    layout: "default",
});

const route = useRoute();
const refId = ref<any>(route.params.id);
const listLocation = ref<any>(null);
const currentImage = ref<string | null>(null);
const getLocality = async () => {
    try {
        const resp: any = await service.travel.info({
            id: refId.value,
        });
        if (resp.Code == "200") {
            listLocation.value = resp?.Data || null;
            if (listLocation.value?.images?.length) {
                currentImage.value = listLocation.value.images?.url;
            }
        }
    } catch (error: any) {
        console.log(error);
    }
};

const setCurrentImage = (url: string) => {
    currentImage.value = url;
};

onMounted(async () => {
    await getLocality();
});
</script>


<style scoped>
/* ปรับแต่ง Scrollbar */
.flex::-webkit-scrollbar {
    height: 8px;
    /* ขนาดความสูงของ Scrollbar */
}

.flex::-webkit-scrollbar-thumb {
    background-color: #17d2d2;
    border-radius: 4px;
    border: 2px solid transparent;
    /* เพิ่มระยะว่างให้ Scrollbar */
}
</style>