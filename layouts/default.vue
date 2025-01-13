<template>
  <div class="relative h-screen">
    <div class="sticky top-0 z-50">
      <TopNav />
    </div>
    <slot></slot>
    <FootTer />
  </div>
</template>

<style>
body {
  --sb-track-color: #808588;
  --sb-thumb-color: #17d2d2;
  --sb-size: 7px;
}

::-webkit-scrollbar {
  width: var(--sb-size)
}

::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 3px;
  border: none;
}
</style>