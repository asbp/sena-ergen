<script lang="ts" setup>

const isNavbarOpenOnNarrowViewport = ref(false);

const toggleNarrowViewportNavbar = () => {
  isNavbarOpenOnNarrowViewport.value = !isNavbarOpenOnNarrowViewport.value;
};

</script>

<template>
  <nav class="bg-neutral-700 h-fit min-w-screen p-2 flex flex-col xl:flex-row xl:space-x-3">
    <div class="flex grow items-center xl:flex-grow-0 ps-3 xl:ps-0">
      <button class="flex text-white xl:hidden" @click="() => toggleNarrowViewportNavbar()">
        <i class="ti ti-menu-2"></i>
      </button>
      <div class="flex grow justify-center pe-6 xl:pe-0">
        <img src="~/assets/logo.svg" alt="logo" class="h-10" />
      </div>
    </div>
    <NavList :is-navbar-open-on-narrow-viewport="isNavbarOpenOnNarrowViewport" />
  </nav>
</template>