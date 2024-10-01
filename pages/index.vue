<script lang="ts" setup>

const placeholderPageUrls = [
  '/assets/page_placeholder/halaman1.jpg',
  '/assets/page_placeholder/halaman2.jpg',
  '/assets/page_placeholder/halaman3.jpg',
];

const currentPlaceholderPageUrlIndex = ref(0);

const currentPlaceholderPageUrl = computed(() => {
  return placeholderPageUrls[currentPlaceholderPageUrlIndex.value];
});

const exposureModel = reactive({
  underwritingYear: 2023,
  province: 1,
  cityRegency: 1,
  crestaZone: 1,
  tariffZone: 1,
  occupation: 1,
  exposureInterest: 1,
  expiryDate: 1,
});

const exposureAtRiskModel = reactive({
  underwritingYear: 2023,
  province: 1,
  cityRegency: 1,
  crestaZone: 1,
  tariffZone: 1,
  occupation: 1,
  exposureInterest: 1,
  expiryDate: 1,
  climateChange: true,
  flood: false,
  earthquake: false,
  tsunami: false,
  liquefaction: false,
});

const lossEstimationModel = reactive({
  earthquakeEvent: 1,
  province: 1,
  cityRegency: 1,
  crestaZone: 1,
  tariffZone: 1,
  occupation: 1,
  exposureInterest: 1,
});

const onTabChange = (index: number) => {
  currentPlaceholderPageUrlIndex.value = index;
}

</script>

<template>
  <div class="flex flex-col min-h-screen bg-neutral-700">
    <Navbar />
    <div class="md:flex flex-1 min-h-full p-3 space-y-3 md:space-y-0 md:space-x-3">
      <div class="flex flex-col md:w-1/2 lg:w-5/12 p-3">
        <div class="flex-1">
          <TabView @tab-change="onTabChange">
            <TabPage title="Exposure">
              <div class="space-y-3">
                <SelectInput label="Underwriting Year" v-model="exposureModel.underwritingYear">
                  <option value="2023">2023</option>
                </SelectInput>
                <SelectInput label="Province" v-model="exposureModel.province">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="City/Regency" v-model="exposureModel.cityRegency">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="Cresta Zone" v-model="exposureModel.crestaZone">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="Tariff Zone" v-model="exposureModel.tariffZone">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="Occupation" v-model="exposureModel.occupation">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="Exposure Interest" v-model="exposureModel.exposureInterest">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="Expiry Date" v-model="exposureModel.expiryDate">
                  <option value="1">Today</option>
                </SelectInput>
              </div>
            </TabPage>
            <TabPage title="Exposure at Risk">
              <div class="space-y-3">
                <SelectInput label="Underwriting Year" v-model="exposureAtRiskModel.underwritingYear">
                  <option value="2023">2023</option>
                </SelectInput>
                <SelectInput label="Province" v-model="exposureAtRiskModel.province">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="City/Regency" v-model="exposureAtRiskModel.cityRegency">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="Cresta Zone" v-model="exposureAtRiskModel.crestaZone">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="Tariff Zone" v-model="exposureAtRiskModel.tariffZone">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="Occupation" v-model="exposureAtRiskModel.occupation">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="Exposure Interest" v-model="exposureAtRiskModel.exposureInterest">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="Expiry Date" v-model="exposureAtRiskModel.expiryDate">
                  <option value="1">Today</option>
                </SelectInput>
                <Panel class="bg-neutral-600 text-white rounded-md">
                  <template #header>
                    <span class="text-white">Risk Impact</span>
                  </template>
                  <div class="space-y-3">
                    <CheckboxInput label="Climate Change" v-model="exposureAtRiskModel.climateChange" />
                    <CheckboxInput label="Flood" v-model="exposureAtRiskModel.flood" />
                    <CheckboxInput label="Earthquake" v-model="exposureAtRiskModel.earthquake" />
                    <CheckboxInput label="Tsunami" v-model="exposureAtRiskModel.tsunami" />
                    <CheckboxInput label="Liquefaction" v-model="exposureAtRiskModel.liquefaction" />
                  </div>
                </Panel>
              </div>
            </TabPage>
            <TabPage title="Loss Estimation">
              <div class="space-y-3">
                <SelectInput label="Earthquake Event" v-model="lossEstimationModel.earthquakeEvent">
                  <option value="1">Gempa Cianjur 5.4 M</option>
                </SelectInput>
                <SelectInput label="Province" v-model="lossEstimationModel.province">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="City/Regency" v-model="lossEstimationModel.cityRegency">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="Cresta Zone" v-model="lossEstimationModel.crestaZone">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="Tariff Zone" v-model="lossEstimationModel.tariffZone">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="Occupation" v-model="lossEstimationModel.occupation">
                  <option value="1">All</option>
                </SelectInput>
                <SelectInput label="Exposure Interest" v-model="lossEstimationModel.exposureInterest">
                  <option value="1">All</option>
                </SelectInput>
              </div>
            </TabPage>
          </TabView>
        </div>
        <div class="flex-none flex space-x-2 mt-3">
          <Button class="flex-1 bg-neutral-500 hover:bg-neutral-600 active:bg-neutral-800">
            Download CSV
          </Button>
          <Button class="flex-1 bg-yellow-500 hover:bg-yellow-700 active:bg-yellow-800">
            Generate
          </Button>
        </div>
      </div>
      <Panel class="flex-1 bg-neutral-800 p-3 rounded">
        <template #header>
          <span class="text-white">Page Preview</span>
        </template>
        <div class="flex justify-center mt-3">
          <img :src="currentPlaceholderPageUrl" alt="Page Preview" class="w-4/5 h-auto" />
        </div>
      </Panel>
    </div>
  </div>
</template>