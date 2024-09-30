<script lang="ts" setup>
</script>

<template>
  <div class="bg-neutral-700 flex min-h-screen flex-col">
    <Navbar />
    <div class="md:flex md:flex-row flex-col p-3 space-y-3 md:space-x-3 md:space-y-0">
      <div class="md:w-1/2 lg:w-5/12">
        <TabView>
          <TabPage title="Exposure">
            <SelectInput label="Underwriting Year">
              <option value="2023">2023</option>
            </SelectInput>
            <SelectInput label="Province">

            </SelectInput>
            <SelectInput label="City">

            </SelectInput>
            <SelectInput label="Cresta Zone">

            </SelectInput>
            <SelectInput label="Tariff Zone">

            </SelectInput>
            <SelectInput label="Occupation">

            </SelectInput>
            <SelectInput label="Exposure Interest">

            </SelectInput>
            <SelectInput label="Expiry Date">

            </SelectInput>
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