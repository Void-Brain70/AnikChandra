<template>
  <div>
    <HomePage></HomePage>
    
    <div class="card">
      <div v-for="(category, index) in categories" :key="index">
        <!-- {{course}} -->
        <v-card class="mx-auto" max-width="400">
          <v-img
            v-if="category && category.photo"
            :src="category.photo"
            class="white--text align-end"
            height="200px"
          >
          </v-img>
          <v-img
            v-else
            src="@/assets/book.png"
            height="200px"
            class="white--text align-end"
          ></v-img>

          <v-card-subtitle class="pb-0">
            {{ category.title }}
          </v-card-subtitle>

          <v-card-actions>
            <router-link  class="home" to="/course"><v-btn @click="takeAction(index)" color="orange" text> Show Ditails </v-btn></router-link>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import HomePage from "@/components/HomePage.vue";
import axios from "axios";
export default {
  name: "HomeView",

  components: {
    HomePage,
},
  data() {
    return {
      courses: [],
      categories: [],
      select:0
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      await axios
        .get(
          "https://summer-canyon-zh9zckabi5cf.vapor-farm-f1.com/api/course?filter=featured"
        )
        .then((res) => {
          this.categories = res.data.data;
        });
    },
    takeAction(index) {
      this.courses = index
      // console.log(this.courses)  
    },
  },
};
</script>

<style scoped>
.card{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px;
  gap: 20px;
}
</style>
