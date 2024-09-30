<template>
  <div class="bg-neutral-700 h-screen w-screen flex flex-col">
    <Navbar />
    <div class="md:flex md:flex-row flex-col text-white p-3 space-y-3 md:space-x-3 md:space-y-0">
      <div class="w-100 md:p-3">
        <TabView>
          <TabPage title="Exposure">
            Tab Exposure goes here.
          </TabPage>
          <TabPage title="Exposure at Risk">
            Tab Exposure at Risk goes here.
          </TabPage>
          <TabPage title="Loss Estimation">
            Tab Loss Estimation goes here.
          </TabPage>
        </TabView>
        <div class="flex space-x-2 mt-3">
          <button class="grow bg-neutral-300 hover:bg-neutral-500 text-black font-bold py-2 px-4 rounded">
            Download CSV
          </button>
          <button class="grow bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">
            Generate
          </button>
        </div>
      </div>
      <div class="flex-1 bg-neutral-800 p-3 rounded">
        Preview goes here.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>