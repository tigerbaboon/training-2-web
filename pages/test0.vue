<template>
     <div class="flex flex-col lg:flex-row h-screen">
          <!-- Sidebar Menu -->
          <div class="bg-blue-100 w-full lg:w-1/4 p-4 space-y-4 shadow-md">
               <div class="text-gray-700 font-semibold text-xl">
                    Menu: {{ activeTab }}
               </div>

               <!-- Tabs -->
               <div class="flex space-x-2">
                    <div @click="switchTab('personalInfo')" :class="{
                         'bg-blue-400 text-white': activeTab === 'personalInfo',
                         'bg-white text-blue-500': activeTab !== 'personalInfo',
                    }"
                         class="cursor-pointer border p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white">
                         Personal
                    </div>
                    <div @click="switchTab('travelInfo')" :class="{
                         'bg-blue-400 text-white': activeTab === 'travelInfo',
                         'bg-white text-blue-500': activeTab !== 'travelInfo',
                    }"
                         class="cursor-pointer border p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white">
                         Travel
                    </div>
                    <div @click="switchTab('uploadPhoto')" :class="{
                         'bg-blue-400 text-white': activeTab === 'uploadPhoto',
                         'bg-white text-blue-500': activeTab !== 'uploadPhoto',
                    }"
                         class="cursor-pointer border p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white">
                         Upload Photo
                    </div>
               </div>

               <!-- Menu Details -->
               <hr class="border-blue-300 my-2" />
               <div class="text-gray-700">
                    <!-- Personal Info Tab -->
                    <div v-if="activeTab === 'personalInfo'">
                         <div class="space-y-2">
                              <label for="nameInput" class="font-semibold">Name</label>
                              <input id="nameInput" v-model="name" type="text"
                                   class="w-full p-2 rounded-md text-gray-700 border focus:outline-none focus:ring focus:ring-blue-300"
                                   placeholder="Enter your name" />

                              <!-- Checkbox options for devices -->
                              <div class="space-y-2 mt-2">
                                   <label class="font-semibold">Select Devices</label>
                                   <div class="flex flex-col space-y-2">
                                        <div>
                                             <input type="checkbox" id="light" value="ไฟ" v-model="selectedDevices"
                                                  class="mr-2" />
                                             <label for="light">ไฟ</label>
                                        </div>
                                        <div>
                                             <input type="checkbox" id="air" value="แอร์" v-model="selectedDevices"
                                                  class="mr-2" />
                                             <label for="air">แอร์</label>
                                        </div>
                                        <div>
                                             <input type="checkbox" id="fan" value="พัดลม" v-model="selectedDevices"
                                                  class="mr-2" />
                                             <label for="fan">พัดลม</label>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <!-- Travel Info Tab -->
                    <div v-if="activeTab === 'travelInfo'">
                         <div class="space-y-2">
                              <label for="travelInput" class="font-semibold">Travel Destination</label>
                              <input id="travelInput" v-model="travelDestination" type="text"
                                   class="w-full p-2 rounded-md text-gray-700 border focus:outline-none focus:ring focus:ring-blue-300"
                                   placeholder="Enter travel destination" />
                         </div>
                    </div>

                    <!-- Upload Photo Tab -->
                    <div v-if="activeTab === 'uploadPhoto'">
                         <div class="space-y-2">
                              <label for="photoInput" class="font-semibold">Upload Photos</label>
                              <input id="photoInput" type="file" accept="image/*" @change="handleMultipleImageUpload"
                                   class="w-full p-2 rounded-md border text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                                   multiple />
                         </div>
                    </div>
               </div>
          </div>

          <!-- Detail Section -->
          <div class="bg-gray-100 w-full lg:w-3/4 p-4 space-y-4 shadow-md">
               <div class="text-gray-700 font-semibold text-xl">Details</div>
               <div class="p-4 bg-white rounded-md shadow-md flex flex-col gap-4">
                    <!-- Personal Info Details -->
                    <div>
                         <div class="flex gap-4 items-center">
                              <span class="font-semibold">Name:</span>
                              <span class="p-2 border rounded-md bg-gray-50">{{ name }}</span>
                         </div>
                    </div>

                    <!-- Devices Selected -->
                    <div v-if="selectedDevices.length">
                         <div class="font-semibold mt-4">Selected Devices:</div>
                         <ul class="list-disc ml-6 mt-2">
                              <li v-for="device in selectedDevices" :key="device" class="p-1">{{ device }}</li>
                         </ul>
                    </div>

                    <!-- Travel Info Details -->
                    <div>
                         <div class="flex gap-4 items-center">
                              <span class="font-semibold">Travel Destination:</span>
                              <span class="p-2 border rounded-md bg-gray-50">{{
                                   travelDestination
                                   }}</span>
                         </div>
                    </div>

                    <!-- Uploaded Images -->
                    <div v-if="uploadedImages.length" class="grid grid-cols-3 gap-4 max-h-[300px] overflow-auto">
                         <!-- First image (Large) -->
                         <div class="col-span-2">
                              <img :src="uploadedImages[0]" alt="Uploaded"
                                   class="w-full h-64 object-cover border rounded-md" />
                         </div>
                         <!-- Second and third images (Smaller) -->
                         <div v-for="(image, index) in uploadedImages.slice(1)" :key="index" class="col-span-1">
                              <img :src="image" alt="Uploaded" class="w-full h-32 object-cover border rounded-md" />
                         </div>
                    </div>

                    <div v-if="!uploadedImages.length" class="text-gray-500">
                         No images uploaded yet.
                    </div>
               </div>
          </div>
     </div>
</template>

<script lang="ts" setup>

const activeTab = ref<string>("personalInfo");
const name = ref<string>("");
const travelDestination = ref<string>("");
const selectedDevices = ref<string[]>([]);
const uploadedImages = ref<string[]>([]);

const switchTab = (tab: string) => {
     activeTab.value = tab;
};



// Handle multiple image uploads
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


</script>

<style scoped></style>