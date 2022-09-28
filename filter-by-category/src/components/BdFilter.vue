<template>
    <div>
        <h1>Filter by Bangladesh division,district,upazila,postcode</h1><hr>
        <v-container>
            <template>
                <v-row>
                    <v-col cols="5">
                        <v-select v-model="divisionId" :items="divisions" item-text="bn_name" item-value="id"
                            label="Select Division" clearable solo></v-select>
                    </v-col>
                    <v-col v-if="allDistrict.length" cols="5">
                        <v-data-table :headers="headers" :items="allDistrict" :items-per-page="5" class="elevation-1">
                        </v-data-table>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="5">
                        <v-select v-model="districtId" :items="allDistrict" item-text="bn_name" item-value="id"
                            label="Select District" clearable solo></v-select>
                    </v-col>
                    <v-col v-if="allUpazila.length" cols="5">
                        <v-data-table :headers="headers" :items="allUpazila" :items-per-page="5" class="elevation-1">
                        </v-data-table>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="5">
                        <v-select v-model="upazilaName" :items="allUpazila" item-text="bn_name" item-value="name"
                            label="Select Upazila" clearable solo></v-select>
                    </v-col>
                    <v-col v-if="allPost.length" cols="5">
                        <v-data-table :headers="headers2" :items="allPost" :items-per-page="5" class="elevation-1">
                        </v-data-table>
                    </v-col>
                </v-row>
            </template>
        </v-container>
    </div>
</template>
<script>
import DivisionData from "./json/bd-divisions.json";
import DistrictData from "./json/bd-districts.json";
import UpazilaData from "./json/bd-upazilas.json";
import PostcodeData from "./json/bd-postcodes.json";
export default {
    name: "BdFilter",
    data() {
        return {
            divisions: DivisionData.divisions,
            districts: DistrictData.districts,
            upazilas: UpazilaData.upazilas,
            postcode: PostcodeData.postcodes,
            divisionId: "",
            districtId: "",
            upazilaName: "",
            allDistrict: [],
            allUpazila: [],
            allPost: [],
            headers: [{ text: "Name", value: "bn_name" }],
            headers2: [{ text: "Post Code", value: "postCode" }],
        };
    },
    watch: {
        divisionId(value) {
            if (value) {
                this.allDistrict = this.districts.filter(
                    (el) => el.division_id === value
                );
            } else {
                this.allDistrict = [];
                this.allUpazila = [];
                this.allPost = [];
            }
        },
        districtId(value) {
            if (value) {
                this.allUpazila = this.upazilas.filter(
                    (el) => el.district_id === value
                );
            } else {
                this.allUpazila = [];
                this.allPost = [];
            }
        },
        upazilaName(value) {
            if (value) {
                this.allPost = this.postcode.filter((el) => el.upazila === value);
            } else {
                this.allPost = [];
            }
        },
    },
};
</script>

<style scoped>
h1{
    text-align: center;
    margin: 20px;
    color: #EC407A;
}
</style>