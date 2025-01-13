<template>
     <PromoteBanner />
     <Zone />
     <RecommenHome />
      <!-- <TestRecommenHome /> -->
     <RecommenTravel />
</template>

<script lang="ts" setup>


</script>

<style >

@keyframes marquee {
     0% {
          transform: translateX(100%);
     }

     100% {
          transform: translateX(-100%);
     }
}

.animate-marquee {
     animation: marquee 40s linear infinite;
}
</style>