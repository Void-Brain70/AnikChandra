<template>
  <div>
    <v-container>
        <v-row>
            <v-col cols="3">
                    <v-row v-for="(category, index) in categories" :key="index">
                        <h3 v-if="category.item.length">
                            {{category.name}}
                            <v-radio-group v-model="radioGroup">
                                <v-radio v-for="(item, index) in category.item" :key="index" :label="`${item.name}`" :value="item.slug"></v-radio>
                            </v-radio-group>
                        </h3>
                    </v-row>
            </v-col>
            <v-col cols="9">
                <div v-for="(item, index) in selectedItem " :key="index">
                    <CateGory :itemDetails="item"></CateGory>
                </div>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import CateGory from "../components/CateGory.vue";
export default {
    name: "AboutView",
    components: {CateGory },
    data() {
        return {
            categories: [],
            selectedItem: [],
            radioGroup: null,
        };
    },
    watch: {
        radioGroup: function () {
            this.init(this.radioGroup);
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            await this.axios.get("course-category/all").then((res) => {
                this.categories = [...res.data.data];
            })
            .catch((error) => {
                    console.log('Error: ', error)
            })
        },
        async getItem(slug) {
            await this.axios.get(`course-by-category/${slug}`).then((res) => {
                this.selectedItem = [...res.data.data];
            })
            .catch((error) => {
                    console.log('Error: ', error)
                    })
        }
    },
}
</script>