<script lang="ts" setup>
const isVerticalNavbarOpen = ref(false);

const toggleVerticalNavbar = () => {
  isVerticalNavbarOpen.value = !isVerticalNavbarOpen.value;
};

</script>

<template>
  <div class="bg-neutral-800 h-fit w-screen p-2">
    <div class="flex">
      <div class="flex items-center justify-center ms-4 md:ms-0 md:hidden">
        <button class="text-white" @click="() => toggleVerticalNavbar()">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div class="flex items-center justify-center grow md:flex-grow-0 pe-12 md:pe-0">
        <img src="~/assets/logo.svg" alt="logo" class="h-10" />
      </div>
      <div class="items-center hidden md:flex md:grow px-3">
        <NavList />
      </div>
      <div class="items-center text-neutral-400 text-sm justify-end pe-3 hidden md:flex md:grow ">
        Welcome To Sena
      </div>
      <div class="items-center justify-center hidden md:flex">
        <img src="~/assets/maipark.gif" alt="logo" class="h-8" />
      </div>
    </div>
    <VerticalNavbar :is-open="isVerticalNavbarOpen" />
  </div>
</template>

<style></style>