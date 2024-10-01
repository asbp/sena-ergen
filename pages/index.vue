<script lang="ts" setup>

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

const testClick = () => {
  console.log('test click');
}

</script>

<template>
  <div class="flex flex-col min-h-screen bg-neutral-700">
    <Navbar />
    <div class="md:flex flex-1 min-h-full p-3 space-y-3 md:space-y-0 md:space-x-3">
      <div class="flex flex-col md:w-1/2 lg:w-5/12 p-3">
        <div class="flex-1">
          <TabView>
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
                <div class="bg-neutral-600 p-5 rounded-md text-white flex flex-col mt-6">
                  <div class="mb-3">Risk Impact</div>
                  <div class="space-y-3">
                    <CheckboxInput label="Climate Change" v-model="exposureAtRiskModel.climateChange" />
                    <CheckboxInput label="Flood" v-model="exposureAtRiskModel.flood" />
                    <CheckboxInput label="Earthquake" v-model="exposureAtRiskModel.earthquake" />
                    <CheckboxInput label="Tsunami" v-model="exposureAtRiskModel.tsunami" />
                    <CheckboxInput label="Liquefaction" v-model="exposureAtRiskModel.liquefaction" />
                  </div>
                </div>
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
        <div class="flex flex-none space-x-2 mt-3">
          <Button class="flex-1 bg-neutral-500 hover:bg-neutral-600 active:bg-neutral-800" @click="() => testClick()">
            Download CSV
          </Button>
          <Button class="flex-1 bg-yellow-500 hover:bg-yellow-700 active:bg-yellow-800" @click="() => testClick()">
            Generate
          </Button>
        </div>
      </div>
      <div class="flex-1 bg-neutral-800 p-3 rounded">
        Preview goes here.
      </div>
    </div>
  </div>
</template>