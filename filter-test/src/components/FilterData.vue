<template>
  <div>
    <h1>Filter by Division</h1>
    <!-- {{divisionData.divisions.}} -->
    <!-- {{districtData.districts}} -->
    <!-- {{upazilaData.upazilas}} -->
    <!-- {{postcodeData.postcodes}} -->
    <!-- For divison -->
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            v-model= divisionID 
            :items="divisionData.divisions"
            item-text="bn_name"
            label="Select Division"
            solo
            clearable
            item-value="id"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>

    <!-- For district -->
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="districtData.districts"
            item-text="bn_name"
            label="Select Districts"
            solo
            clearable
          >
          </v-select>
        </v-col>
      </v-row>
    </v-container>

    <!-- For upzila -->
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="upazilaData.upazilas"
            item-text="bn_name"
            label="Select Upazila"
            solo
            clearable
          ></v-select>
        </v-col>
      </v-row>
    </v-container>

    <!-- For postcode -->
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="postcodeData.postcodes"
            item-text="postCode"
            label="Select PostCode"
            solo
            clearable
          ></v-select>
        </v-col>
      </v-row>
    </v-container>

    <!-- Table -->
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          class="d-flex"
          cols="12" sm="6"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="districtData.districts"
        :search="search"
      ></v-data-table>
    </v-card>

    <button @click="getDistrict()">click</button>
  </div>
</template>

<script>
import divison from "./json/bd-divisions.json";
import district from "./json/bd-districts.json";
import upazila from "./json/bd-upazilas.json";
import postcode from "./json/bd-postcodes.json";
export default {
  name: "FilterData",
  data() {
    return {
      divisionData: divison,
      districtData: district,
      upazilaData: upazila,
      postcodeData: postcode,
      forDistrict: [],
      divisionID: "",
      search: "",
      headers: [
        {
          align: "start",
          value: "name",
        },
        { text: "Districts", value: "Districts" },
      ],
    };
  },
  watch: {
    divisionID() {
      console.log(this.divisionID)
    },
  },
  methods: {
    getDistrict() {
        this.forDistrict = this.districtData.districts.filter((el)=>{
            return this.districtData.districts== 
        })
    },
  },
};
</script>
<style scoped></style>
