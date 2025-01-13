<!-- <template>
    <div class="">
      
      <div class="large-image mb-4 w-[900px] h-[400px]">
        <img :src="currentImage" alt="Large view" class="w-full h-full object-cover rounded-lg shadow-lg " />
      </div>
      
     
      <div class=" flex gap-2 justify-center">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          alt="Thumbnail"
          class="thumbnail w-20 h-20 object-cover rounded-md border border-gray-300 hover:border-blue-500 transition-transform duration-300 cursor-pointer"
          @mouseover="currentImage = image"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        
        currentImage: 'https://cdn.discordapp.com/attachments/1088551599133167706/1300511760603807855/image.png?ex=672c5036&is=672afeb6&hm=7a49711066d35e8824ff9948c0f1fce7e026223d5fca00157e61835ef0660d6a&',
        
        images: [
          'https://img-prod.api-onscene.com/cdn-cgi/image/format=auto%2Cwidth=1600%2Cheight=900/https://sls-prod.api-onscene.com/partner_files/trueidintrend/2920/AC40F188-1D2B-4612-AFE5-23773C98A3B2.jpeg',
          'https://img-prod.api-onscene.com/cdn-cgi/image/format=auto%2Cwidth=1600%2Cheight=900/https://sls-prod.api-onscene.com/partner_files/trueidintrend/2920/742B522C-F71A-4C4C-9AB4-5F1A51ED7E68.jpeg',
          'https://img-prod.api-onscene.com/cdn-cgi/image/format=auto%2Cwidth=1600%2Cheight=900/https://sls-prod.api-onscene.com/partner_files/trueidintrend/2920/7C1673D9-962A-4269-B4F9-069842047931.jpeg',
          'https://img-prod.api-onscene.com/cdn-cgi/image/format=auto,width=1600/https://sls-prod.api-onscene.com/partner_files/trueidintrend/2920/1FF2360E-1DA9-4CBE-BC32-FB24A72BE601.jpeg',
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  
  .thumbnail:hover {
    transform: scale(1.1);
  }
  </style> -->

<template>
  <div class="bg-gradient-to-b from-gray-800 to-black min-h-screen text-white">
    <!-- Navbar -->
    <nav class="flex justify-between items-center py-4 px-8">
      <div class="text-red-600 text-2xl font-bold">NETFLIX</div>
      <ul class="flex space-x-6">
        <li><a href="#" class="hover:text-gray-400">กำลังฮิต</a></li>
        <li><a href="#" class="hover:text-gray-400">แพ็กเกจ</a></li>
        <li><a href="#" class="hover:text-gray-400">เหตุผลในการยกเลิก</a></li>
        <li><a href="#" class="hover:text-gray-400">คำถามยอดฮิต</a></li>
      </ul>
      <div class="flex space-x-4 items-center">
        <button class="text-white text-sm font-semibold">ไทย</button>
        <button class="bg-white text-black py-1 px-4 rounded">เข้าสู่ระบบ</button>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="flex flex-col items-center justify-center py-24 px-6">
      <div class="max-w-3xl text-center space-y-4">
        <h1 class="text-4xl lg:text-6xl font-semibold">ภาพยนตร์ รายการทีวี และความบันเทิงอีกมากมายแบบไม่จำกัด</h1>
        <p class="text-lg lg:text-xl">ราคาเริ่มต้นที่ 99 บาท แถมยังยกเลิกได้ทุกเมื่อ</p>
      </div>
      <!-- Subscription Form -->
      <div class="flex mt-8 space-x-4">
        <input type="email" placeholder="ที่อยู่อีเมล"
          class="w-64 md:w-80 h-12 px-4 text-black rounded-full focus:outline-none">
        <button
          class="bg-red-600 text-white text-lg font-semibold py-2 px-6 rounded-full hover:bg-red-700">เริ่มต้นใช้งาน</button>
      </div>
    </div>

    <!-- Trending Section -->
    <section class="py-16 px-6">
      <h2 class="text-2xl lg:text-4xl font-bold mb-6">กำลังฮิต</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <!-- Sample Movie Cards -->
        <div class="relative bg-gray-700 h-48 rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/300x450" alt="Movie Poster"
            class="w-full h-full object-cover opacity-75">
          <div class="absolute bottom-2 left-2 text-white font-semibold">ชื่อภาพยนตร์</div>
        </div>
        <!-- Repeat similar cards for more movies -->
      </div>
    </section>
  </div>
  <div class="bg-gradient-to-b from-gray-800 to-black text-white min-h-screen py-16 px-8">
    <!-- Pricing Plans Section -->
    <section class="text-center mb-16">
      <h2 class="text-3xl lg:text-4xl font-bold mb-8">แพ็คเกจที่เหมาะกับความต้องการของคุณ</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Plan Card -->
        <div class="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-lg shadow-md text-left">
          <h3 class="text-xl font-semibold mb-2">มือถือ</h3>
          <p class="text-sm">480p</p>
          <ul class="mt-4 space-y-2">
            <li>✔️ วีดีโอคุณภาพปานกลาง</li>
            <li>✔️ สำหรับมือถือหรือแท็บเล็ต</li>
          </ul>
          <p class="mt-4 text-2xl font-bold">99 บาท / เดือน</p>
        </div>

        <!-- Plan Card -->
        <div class="bg-gradient-to-br from-blue-800 to-blue-600 p-6 rounded-lg shadow-md text-left">
          <h3 class="text-xl font-semibold mb-2">พื้นฐาน</h3>
          <p class="text-sm">720p</p>
          <ul class="mt-4 space-y-2">
            <li>✔️ วีดีโอคุณภาพดี</li>
            <li>✔️ สำหรับโทรศัพท์ แท็บเล็ต แล็ปท็อป และทีวี</li>
          </ul>
          <p class="mt-4 text-2xl font-bold">169 บาท / เดือน</p>
        </div>

        <!-- Plan Card -->
        <div class="bg-gradient-to-br from-purple-800 to-purple-600 p-6 rounded-lg shadow-md text-left">
          <h3 class="text-xl font-semibold mb-2">มาตรฐาน</h3>
          <p class="text-sm">1080p</p>
          <ul class="mt-4 space-y-2">
            <li>✔️ วีดีโอคุณภาพเยี่ยม</li>
            <li>✔️ สำหรับโทรศัพท์ แท็บเล็ต แล็ปท็อป และทีวี</li>
          </ul>
          <p class="mt-4 text-2xl font-bold">349 บาท / เดือน</p>
        </div>

        <!-- Premium Plan Card -->
        <div class="bg-gradient-to-br from-purple-700 to-pink-600 p-6 rounded-lg shadow-md text-left relative">
          <div class="absolute top-0 right-0 bg-red-600 text-xs text-white font-bold px-2 py-1 rounded-bl-lg">ยอดนิยม
          </div>
          <h3 class="text-xl font-semibold mb-2">พรีเมียม</h3>
          <p class="text-sm">4K + HDR</p>
          <ul class="mt-4 space-y-2">
            <li>✔️ วีดีโอคุณภาพดีที่สุด</li>
            <li>✔️ ระบบเสียงรอบทิศ (Spatial Audio)</li>
            <li>✔️ สำหรับโทรศัพท์ แท็บเล็ต แล็ปท็อป และทีวี</li>
          </ul>
          <p class="mt-4 text-2xl font-bold">419 บาท / เดือน</p>
        </div>
      </div>
    </section>
    <label class="relative inline-flex items-center cursor-pointer">
      <input class="sr-only peer" value="" type="checkbox">
      <div
        class="group peer ring-2  bg-gradient-to-bl from-neutral-800 via-neutral-700 to-neutral-600  rounded-full outline-none duration-1000 after:duration-300 w-24 h-12  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:[background:#0D2B39]   peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)]  after:outline-none after:h-10 after:w-10 after:top-1 after:left-1   peer-checked:after:translate-x-12 peer-hover:after:scale-125">
      </div>
    </label>

    <!-- Benefits Section -->
    <section class="text-center mb-16">
      <h2 class="text-3xl lg:text-4xl font-bold mb-8">ข้อดีเพิ่มเติมในการสมัครเป็นสมาชิก</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Benefit Card -->
        <div class="bg-gray-800 p-4 rounded-lg shadow-md">
          <p class="font-semibold">ความบันเทิงที่คัดสรรตามความชอบของคุณ</p>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow-md">
          <p class="font-semibold">ยกเลิกหรือเปลี่ยนแพ็กเกจได้ทุกเมื่อ</p>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow-md">
          <p class="font-semibold">มีมุมเฉพาะสำหรับเด็ก</p>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow-md">
          <p class="font-semibold">สำหรับโทรศัพท์ แท็บเล็ต แล็ปท็อป และทีวี</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <div class="text-center mt-12">
      <button
        class="bg-red-600 text-white text-lg font-semibold py-3 px-12 rounded-full hover:bg-red-700">เริ่มต้นใช้งาน</button>
    </div>
  </div>
  <div class="bg-gray-100 min-h-screen p-4">
    <!-- Main Container -->
    <div class="max-w-7xl mx-auto bg-white rounded-lg shadow-md overflow-hidden flex">

      <!-- Sidebar -->
      <aside class="w-1/4 bg-gray-50 p-4 border-r">
        <button class="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg w-full mb-4">Compose</button>
        <ul class="space-y-2 text-gray-700">
          <li class="font-semibold">Inbox <span class="text-gray-500">(161)</span></li>
          <li>Starred</li>
          <li>Snoozed</li>
          <li>Sent</li>
          <li>Drafts <span class="text-gray-500">(1)</span></li>
          <li>More</li>
        </ul>
        <ul class="mt-8 space-y-2 text-gray-700">
          <li class="font-semibold">Labels</li>
          <li>[Imap]/Trash</li>
        </ul>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-4">
        <!-- Top Tabs (Primary, Promotions, Social) -->
        <div class="flex items-center space-x-4 mb-6">
          <div class="font-semibold text-blue-600 border-b-2 border-blue-600">Primary</div>
          <div class="text-gray-600">Promotions <span
              class="bg-green-200 text-green-700 text-xs px-2 py-1 rounded-full">49 new</span></div>
          <div class="text-gray-600">Social <span class="bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded-full">1
              new</span></div>
          <div class="text-gray-600">Updates <span
              class="bg-yellow-200 text-yellow-700 text-xs px-2 py-1 rounded-full">11 new</span></div>
        </div>

        <!-- Email List Header -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-2">
            <input type="checkbox" class="form-checkbox h-4 w-4">
            <button class="text-gray-500">• • •</button>
          </div>
          <div class="text-gray-500">1-50 of 181</div>
        </div>

        <!-- Email List -->
        <ul class="space-y-2">
          <!-- Email Item -->
          <li class="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <input type="checkbox" class="form-checkbox h-4 w-4">
              <span class="font-semibold">Shopee</span>
              <span class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">New</span>
            </div>
            <div class="flex-1 pl-4 text-gray-600">
              ค่าส่งสำหรับการซื้อครั้งนี้ถูกยืนยันแล้ว
            </div>
            <div class="text-gray-500 text-sm">7:10 PM</div>
          </li>

          <!-- Repeat Email Items as needed -->
          <li class="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <input type="checkbox" class="form-checkbox h-4 w-4">
              <span class="font-semibold">Grab</span>
              <span class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">New</span>
            </div>
            <div class="flex-1 pl-4 text-gray-600">
              Your Grab E-Receipt - ทานอาหารให้อร่อย!
            </div>
            <div class="text-gray-500 text-sm">1:06 PM</div>
          </li>

          <!-- Add more email items as needed -->
        </ul>
      </main>
    </div>
  </div>
  <div class="bg-green-800 text-white p-4 rounded-md shadow-lg w-full max-w-4xl mx-auto">
    <!-- Header -->
    <div class="flex justify-between items-center border-b border-green-700 pb-2">
      <h2 class="text-xl font-bold">รายการจัดอันดับ</h2>
      <button class="text-yellow-400 hover:text-yellow-300 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Sidebar -->
    <div class="flex mt-4">
      <div class="w-1/4 border-r border-green-700 pr-4">
        <ul class="space-y-2">
          <li class="bg-green-600 hover:bg-green-500 rounded-md p-2 text-center cursor-pointer">
            การจัดอันดับโดยรวม
          </li>
          <li class="bg-green-700 hover:bg-green-600 rounded-md p-2 text-center cursor-pointer">นักดาบ</li>
          <li class="bg-green-700 hover:bg-green-600 rounded-md p-2 text-center cursor-pointer">มือกระบี่</li>
          <li class="bg-green-700 hover:bg-green-600 rounded-md p-2 text-center cursor-pointer">มือทวน</li>
          <li class="bg-green-700 hover:bg-green-600 rounded-md p-2 text-center cursor-pointer">มือธนู</li>
          <li class="bg-green-700 hover:bg-green-600 rounded-md p-2 text-center cursor-pointer">หมอ</li>
          <li class="bg-green-700 hover:bg-green-600 rounded-md p-2 text-center cursor-pointer">นินจา</li>
        </ul>
      </div>

      <!-- Ranking Table -->
      <div class="w-3/4 pl-4">
        <table class="w-full text-center">
          <thead>
            <tr class="bg-green-700">
              <th class="p-2">อันดับ</th>
              <th class="p-2">ชื่อ</th>
              <th class="p-2">ระดับ</th>
              <th class="p-2">อาชีพ</th>
              <th class="p-2">ฝ่าย</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-green-600 hover:bg-green-500 transition-colors">
              <td class="p-2">1</td>
              <td class="p-2">Puppy</td>
              <td class="p-2">90lv</td>
              <td class="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto text-yellow-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9-14 9V3z" />
                </svg>
              </td>
              <td class="p-2 text-red-400">อธรรม</td>
            </tr>
            <tr class="bg-green-700 hover:bg-green-600 transition-colors">
              <td class="p-2">2</td>
              <td class="p-2">หมือ</td>
              <td class="p-2">90lv</td>
              <td class="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto text-yellow-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9-14 9V3z" />
                </svg>
              </td>
              <td class="p-2 text-red-400">อธรรม</td>
            </tr>
            <tr class="bg-green-600 hover:bg-green-500 transition-colors">
              <td class="p-2">3</td>
              <td class="p-2">BUY1</td>
              <td class="p-2">89lv</td>
              <td class="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto text-blue-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9-14 9V3z" />
                </svg>
              </td>
              <td class="p-2 text-blue-400">ธรรมะ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>




  <div class="p-4 bg-slate-200 text-black rounded-md max-w-2xl mx-auto my-3">
    <!-- แสดงช่วงราคาที่เลือก -->
    <div class="mb-4">
      <p class="font-bold">
        ช่วงราคา: จาก {{ formatNumber(minPrice, 0) }}฿ ไปยัง {{ formatNumber(maxPrice, 0) }}฿
      </p>
    </div>

    <!-- ป้อนค่าราคาเริ่มต้น -->
    <div class="flex items-center gap-4 mb-4">
      <div>
        <label for="min-price" class="block text-sm font-medium">ราคาต่ำสุด</label>
        <div class="flex items-center gap-2">
          <button @click="decrementMinPrice"
            class="w-[24px] h-[30px]  bg-gray-300 rounded-md border border-slate-400 text-black hover:bg-gray-400">
            -
          </button>
          <input id="min-price" type="number" min="100" max="10000000" step="100" v-model="minPrice"
            @input="updateRange" class="w-32 p-2 border border-gray-300 rounded-md" />
          <button @click="incrementMinPrice"
            class="w-[24px] h-[30px]  bg-gray-300 rounded-md border border-slate-400 text-black hover:bg-gray-400">
            +
          </button>
        </div>
      </div>
      <div>
        <label for="max-price" class="block text-sm font-medium">ราคาสูงสุด</label>
        <div class="flex items-center gap-2">
          <button @click="decrementMaxPrice"
            class="w-[24px] h-[30px]  bg-gray-300 rounded-md border border-slate-400 text-black hover:bg-gray-400">
            -
          </button>
          <input id="max-price" type="number" min="100" max="10000000" step="100" v-model="maxPrice"
            @input="updateRange" class="w-32 p-2 border border-gray-300 rounded-md" />
          <button @click="incrementMaxPrice"
            class="w-[24px] h-[30px]  bg-gray-300 rounded-md border border-slate-400 text-black hover:bg-gray-400">
            +
          </button>
        </div>
      </div>
    </div>
    <div class="w-full my-7">
      <div class="relative h-2 bg-gray-400 rounded-lg">
        <!-- Highlighted Range -->
        <div class="absolute top-0 h-2 bg-[#30def5] rounded-lg"
          :style="{ left: `${percentageMin}%`, right: `${100 - percentageMax}%` }"></div>

        <!-- Slider Input for minPrice -->
        <input type="range" class="absolute bottom-3 w-full h-2 bg-transparent appearance-none z-20 pointer-events-auto"
          min="100" max="10000000" step="100" v-model="minPrice" @input="updateRange" />

        <!-- Slider Input for maxPrice -->
        <input type="range" class="absolute top-3 w-full h-2 bg-transparent appearance-none z-10 pointer-events-auto"
          min="100" max="10000000" step="100" v-model="maxPrice" @input="updateRange" />
      </div>
    </div>
    <div class="w-full my-20">
      <div class="relative h-2  bg-gray-400 rounded-lg">
        <!-- Highlighted Range -->
        <div class="absolute top-0 h-2 bg-[#34b6af] rounded-lg"
          :style="{ left: `${percentageMin}%`, right: `${100 - percentageMax}%` }"></div>

        <!-- Slider Input for minPrice -->
        <input type="range"
          class="absolute bottom-2 left-[-17px] w-[674px] h-8 bg-transparent appearance-none z-20 pointer-events-auto slider"
          min="100" max="10000000" step="100" v-model="minPrice" @input="updateRange" />

        <!-- Slider Input for maxPrice -->
        <input type="range"
          class="absolute top-2 left-[-17px] w-[674px] h-8 bg-transparent appearance-none z-10 pointer-events-auto slider"
          min="100" max="10000000" step="100" v-model="maxPrice" @input="updateRange" />

        <!-- Custom Thumb for minPrice -->
        <Icon name="vaadin:money-deposit" class="absolute top-[-32px] text-[#34b6af] w-8 h-8 -translate-x-1/2 shadow-xl"
          :style="{ left: `${percentageMin}%`, bottom: '' }" />

        <!-- Custom Thumb for maxPrice -->
        <Icon name="vaadin:money-withdraw" class="absolute bottom-[-32px]  text-[#34b6af] w-8 h-8 -translate-x-1/2"
          :style="{ left: `${percentageMax}%`, top: '' }" />
      </div>
    </div>
  </div>
  <button
    class="button flex items-center gap-2 px-4 py-3 rounded-full font-bold text-white shadow-lg bg-gradient-to-r from-[#880088] via-[#aa2068] to-[#f09f33] bg-[length:300%] bg-left text-shadow transition-all hover:bg-[length:320%] hover:bg-right">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"
      class="w-6 h-6 fill-[#f09f33] transition-all group-hover:fill-white">
      <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
    </svg>
    Unlock Pro
  </button>
  <button
    class="button flex items-center gap-2 px-4 py-3 rounded-full font-bold text-white shadow-lg bg-gradient-to-r from-[#ca5a50] via-[#db7843] to-[#f09f33] bg-[length:300%] bg-left text-shadow transition-all hover:bg-[length:320%] hover:bg-right">
    <Icon class="text-[#f09f33] w-[18px] h-[18px]" name="heroicons-solid:star" />
    แนะนำ
  </button>

  <input id="checkbox" type="checkbox" class="hidden peer" />
  <label for="checkbox"
    class="switch relative w-[50px] h-[50px] bg-gray-600 rounded-full flex items-center justify-center cursor-pointer border-2 border-gray-500 shadow-inner peer-checked:shadow-[0_0_1px_rgb(151,243,255)_inset,0_0_2px_rgb(151,243,255)_inset,0_0_10px_rgb(151,243,255)_inset,0_0_40px_rgb(151,243,255),0_0_100px_rgb(151,243,255),0_0_5px_rgb(151,243,255)] peer-checked:border-white peer-checked:bg-[#92b4b8]">
    <div class="slider w-[30px] h-[30px] peer-checked:filter-[drop-shadow(0_0_5px_rgb(151,243,255))]">
      <Icon class="w-full h-full text-gray-800 peer-checked:text-white" name="ic:outline-search" />
    </div>
  </label>

  <label class="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" />
    <div
      class="w-[3.5em] h-[2em] bg-[#9fccfa] peer-focus:ring-2 peer-focus:ring-[#0974f1] rounded-full peer-checked:bg-[#0974f1] transition-all duration-300 ease-out">
    </div>
    <div
      class="absolute h-[2em] w-[2em] bg-white rounded-full shadow-md -translate-y-1/2 top-1/2 left-[0.1em] transition-transform duration-300 ease-out peer-checked:translate-x-[1.6em]">
    </div>
  </label>


  <div class="flex items-center justify-center h-[400px] bg-gray-100">
    <label class="relative flex items-center cursor-pointer w-[15rem] h-[6rem]">
      <!-- Hidden Input -->
      <input type="checkbox" class="sr-only peer" />

      <!-- Left Indicator -->
      <div
        class="absolute left-[10%] h-[60%] w-[40%] bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-l-full peer-checked:opacity-0 transition-all duration-500">
      </div>

      <!-- Right Indicator -->
      <div
        class="absolute right-[10%] h-[60%] w-[40%] bg-gradient-to-b from-blue-200 to-blue-400 rounded-r-full opacity-0 peer-checked:opacity-100 transition-all duration-500">
      </div>

      <!-- Toggle Button -->
      <div
        class="absolute left-[5%] h-[80%] w-[55%] bg-gradient-to-b from-gray-200 to-gray-400 rounded-full shadow-md peer-checked:left-[40%] transition-all duration-500">
      </div>
    </label>
  </div>

  <div class="flex items-center justify-center h-screen bg-gray-100">
    <label
      class="relative flex items-center w-[75px] h-[25px] rounded-full bg-gradient-to-r from-pink-500 to-blue-500 cursor-pointer group shadow-md">
      <!-- Hidden Checkbox -->
      <input type="checkbox" class="peer appearance-none w-full h-full absolute opacity-0 cursor-pointer" />

      <!-- Slider -->
      <span
        class="absolute w-[50px] h-[25px] rounded-full bg-gray-200 shadow-inner transition-all duration-300 peer-checked:translate-x-[25px] peer-checked:bg-gray-300"></span>
    </label>
  </div>


  <span class="w-auto">
    <div class="flex items-center gap-1">
      <img class="w-7 h-7" src="https://img.icons8.com/?size=100&id=SQUhc67Yi70U&format=png&color=000000" />
      <span class="text-lg font-bold text-sky-500 mb-1">14,000 บาท</span>
    </div>
    <div class="flex items-center gap-1">
      <span>
        <img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=4cQ415HSv4Xx&format=png&color=000000" />
      </span>
      <span class="text-md text-gray-800">Boncafe (Thailand) Ltd. (Khon Kaen)</span>
    </div>
    <div class="flex items-center gap-[2px]">
      <!-- <span>
        <img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=21612&format=png&color=000000" />
      </span> -->
      <span class="text-gray-500 text-sm pl-6">567 24-25 ถ. มิตรภาพ ตำบล เมืองเก่า อำเภอเมืองขอนแก่น ขอนแก่น
        40000</span>
    </div>
    <div class="flex space-x-4 text-gray-700 pl-5">
      <div class="flex items-center space-x-1">
        <img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=tBfPbOPEAOl5&format=png&color=000000" />
        <span>10 ห้องนอน</span>
      </div>
      <div class="flex items-center space-x-1">
        <img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=ScnZMMzLgN5p&format=png&color=000000" />
        <span>20 ห้องน้ำ</span>
      </div>
      <div class="flex items-start space-x-1">
        <img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=g0HwtvyaJ9v2&format=png&color=000000" />
        <span>200 ตร.ม.</span>
      </div>
    </div>
  </span>


  <button
    class="relative cursor-pointer p-[2px] rounded-md border-0 text-shadow transition-all duration-300 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.5)] bg-gradient-to-b from-[#006caa] to-[#00c3ff] hover:shadow-[0px_6px_12px_0px_rgba(0,0,0,0.6)] active:shadow-none">
    <div
      class="relative inset-0 p-4 rounded-sm overflow-hidden bg-[radial-gradient(circle_at_50%_100%,#30f8f8_10%,#30f8f800_55%),linear-gradient(#00526a,#009dcd)]">
      <div
        class="absolute inset-0 bg-[linear-gradient(-65deg,_rgba(0,0,0,0)_40%,rgba(255,255,255,0.47)_50%,rgba(0,0,0,0)_70%)] bg-[length:200%_100%] bg-no-repeat animate-thing">
      </div>
      <div
        class="absolute inset-0 -top-[8em] rounded-inherit bg-[radial-gradient(circle_at_50%_-270%,#ffffff_45%,rgba(255,255,255,0.4)_60%,rgba(255,255,255,0)_60%)]">
      </div>
      <div
        class="absolute inset-0 rounded-inherit transition-[box-shadow] duration-300 shadow-[inset_0px_2px_8px_-2px_rgba(0,0,0,0)] active:shadow-[inset_0px_2px_8px_-2px_rgba(0,0,0,0.7)]">
      </div>
      <span class="relative z-10 text-white font-semibold">Enter</span>
    </div>
  </button>

  <nuxt-link to="/mymap/mymap"
    class="w-[120px] md:w-[150px] lg:w-[180px] h-[24px] md:h-[34px] lg:h-[40px] relative rounded-lg bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] bg-[length:250%] bg-left text-[#ffd277] flex items-center justify-center cursor-pointer transition-all duration-1000 overflow-hidden active:scale-95 group">
    <span
      class="absolute inset-0 flex items-center justify-center w-[97%] h-[90%] rounded-md bg-black/90 text-[#ffd277] transition-all duration-1000 bg-[length:200%] group-hover:bg-right">
      ค้นหาที่พักใกล้ฉัน
    </span>
  </nuxt-link>

  <div class="relative inline-block">
    <a href="#"
      class="relative inline-block px-6 py-3 border-2 border-white uppercase text-white text-lg font-semibold no-underline group">
      <span class="relative z-10">Button</span>
      <!-- Before -->
      <div
        class="absolute top-[6px] left-[-2px] w-[calc(100%+4px)] h-[calc(100%-12px)] bg-gray-900 transition-transform duration-300 ease-in-out scale-y-100 group-hover:scale-y-0">
      </div>
      <!-- After -->
      <div
        class="absolute left-[6px] top-[-2px] h-[calc(100%+4px)] w-[calc(100%-12px)] bg-gray-900 transition-transform duration-300 ease-in-out scale-x-100 group-hover:scale-x-0 delay-300">
      </div>
    </a>
  </div>
  <div
    class="relative mx-auto w-96 bg-gradient-to-r from-gray-800 to-gray-900 border-4 border-yellow-500 rounded-lg text-white p-5">
    <!-- Decorative Shapes -->
    <div class="absolute top-[-30px] left-[-30px] w-24 h-24 bg-gradient-to-br from-yellow-500 to-transparent rotate-45">
    </div>
    <div
      class="absolute bottom-[-30px] right-[-30px] w-24 h-24 bg-gradient-to-tl from-yellow-500 to-transparent rotate-45">
    </div>

    <!-- Header -->
    <div class="text-center font-bold text-lg mb-4">
      TakZobye
    </div>

    <!-- Content -->
    <div class="space-y-4">
      <!-- Info -->
      <div class="flex justify-between text-sm">
        <div>ID: <span class="font-semibold">1</span></div>
        <div>JOB: <span class="font-semibold">police</span></div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 gap-2 text-center">
        <div class="flex justify-center space-x-2">
          <span>👮</span>
          <span>1</span>
          <span>🏠</span>
          <span>0</span>
        </div>
        <div class="flex justify-center space-x-2">
          <span>🚗</span>
          <span>0</span>
          <span>🛠️</span>
          <span>0</span>
        </div>
      </div>

      <!-- Contact -->
      <div class="text-center text-sm">
        📞 <span class="font-semibold">482-3467</span>
      </div>

      <!-- Online -->
      <div class="text-center text-sm">
        ONLINE: <span class="font-semibold">1</span>
      </div>
    </div>
  </div>












</template>
<script lang="ts" setup>
import { ref, computed } from "vue";

// ค่าราคาเริ่มต้น
const minPrice = ref(100); // ค่าเริ่มต้นต่ำสุด
const maxPrice = ref(10000000); // ค่าเริ่มต้นสูงสุด

// คำนวณตำแหน่งเปอร์เซ็นต์ของ Slider
const percentageMin = computed(() => ((minPrice.value - 100) / (10000000 - 100)) * 100);
const percentageMax = computed(() => ((maxPrice.value - 100) / (10000000 - 100)) * 100);

// ฟังก์ชันอัปเดตช่วงราคา
const updateRange = () => {
  // ป้องกันค่า minPrice เกิน maxPrice
  if (minPrice.value > maxPrice.value) {
    [minPrice.value, maxPrice.value] = [maxPrice.value, minPrice.value];
  }

  // ตรวจสอบให้ minPrice และ maxPrice อยู่ในขอบเขตที่ถูกต้อง
  minPrice.value = Math.max(100, Math.min(minPrice.value, 10000000));
  maxPrice.value = Math.max(100, Math.min(maxPrice.value, 10000000));
};

// ฟังก์ชันเพิ่ม/ลดราคาต่ำสุด
const incrementMinPrice = () => {
  if (minPrice.value + 100 <= maxPrice.value) {
    minPrice.value += 100;
  }
};
const decrementMinPrice = () => {
  if (minPrice.value - 100 >= 100) {
    minPrice.value -= 100;
  }
};

// ฟังก์ชันเพิ่ม/ลดราคาสูงสุด
const incrementMaxPrice = () => {
  if (maxPrice.value + 100 <= 10000000) {
    maxPrice.value += 100;
  }
};
const decrementMaxPrice = () => {
  if (maxPrice.value - 100 >= minPrice.value) {
    maxPrice.value -= 100;
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

@keyframes thing {
  0% {
    background-position: 130%;
    opacity: 1;
  }

  to {
    background-position: -166%;
    opacity: 0;
  }
}
</style>