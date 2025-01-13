<template>
    <div class="flex justify-center m-6" v-for="banderStore in banderStores" key="m">
        <img class="w-[1200px]" :src="banderStore.img" alt="zzz">
    </div>
</template>

<script lang="ts" setup>
const banderStores = ref<any>([
    {
        img:"https://cdn.discordapp.com/attachments/1088551599133167706/1296310216513818644/Frame_267.png?ex=6711d277&is=671080f7&hm=df08b49bd2017c13917449233af289a0e864e098fe928a73d63614497b4a62a5&",
    },
]);
</script>