<template>
    <div>
      <h1>All Course</h1>
      <hr />
      <div class="btn">
          <div v-for="(category, index) in categories" :key="index">
          <v-btn
          @click="takeAction(index,category)"
          depressed
          color="#EC407A"
          class="white--text"
          >
          {{ category.name }}
        </v-btn>
      </div>
      </div>
      <div class="card">
        <div v-for="(item, index) in courses" :key="index">
          <v-card class="mx-auto" max-width="344">
            <v-img v-if="item && item.photo" :src="item.photo" height="200px"></v-img>
            <v-img v-else src="@/assets/book.png" height="200px"></v-img>
  
            <v-card-title>
              {{ item.title }}
            </v-card-title>
  
            <v-card-subtitle> Price: {{item.price }}</v-card-subtitle>
          </v-card>
        </div>
      </div>
    </div>
</template>
  
  <script>
  import axios from "axios";
  export default {
    name: "CategoryView",
    data() {
      return {
        courses: [],
        categories: [],
        childern: [],
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
            "https://damp-willow-zsm0ocei5arf.vapor-farm-d1.com/api/course-category?filter=active"
          )
          .then((res) => {
            this.categories = res.data.data;
            if(this.categories && this.categories.length){
              this.childern = this.categories[this.select]?.childern;
              this.courses = this.categories[this.select]?.courses?.data
            }
          });
      },
      takeAction(index,category) {
          this.select =index,
          this.childern =category.childern
          this.courses  = category.courses.data    
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    color:#1E88E5;
  }
  .btn {
    margin-top:10px;  
    display: flex;
    justify-content: space-around;
    margin: 10px;
  }
  .card{
    margin-top:15px;  
    display: flex;
    gap:10ox;
    justify-content: space-evenly;
  }
  </style>
  