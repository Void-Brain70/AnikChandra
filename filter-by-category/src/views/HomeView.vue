<template>
  <v-container>
      <v-row>
          <v-col cols="3">
                  <v-row v-for="(category, index) in categories" :key="index">
                      <h3 v-if="category.children.length">
                          {{category.name}}
                          <v-radio-group v-model="radioButtonValue">
                              <v-radio v-for="(children, childrenIndex) in category.children" :key="childrenIndex" :label="`${children.name}`" :value="children.slug"></v-radio>
                          </v-radio-group>
                      </h3>
                  </v-row>
          </v-col>
          <v-col cols="9">
              <div v-for="(children, index) in childrens" :key="index">
                  <!-- {{children.title}} -->
                  <!-- <ChildrenCard :childrenDetails="children"></ChildrenCard> -->
                  <CategorySide :childrenDetails="children"></CategorySide>
              </div>
          </v-col>
      </v-row>
  </v-container>
</template>
<script>
import CategorySide from '@/components/CategorySide.vue'
  export default {
      name: 'HomeView',
      components:{ CategorySide },
      data(){
          return {
              radioButtonValue: null,
              categories: [],
              childrens: [],
          }
      },
      watch:{
          radioButtonValue: function(){
              this.getChildren(this.radioButtonValue)
          }
      },
      mounted(){
          this.init()
      },
      methods: {
          async init(){
              await this.axios.get('course-category/all')
                  .then((response) => {
                      this.categories = [...response.data.data]
                  })
                  .catch((error) => {
                  console.log('Error: ', error)
                  })
          },
          async getChildren(slug){
              await this.axios.get(`course-by-category/${slug}`)
                  .then((response) => {
                      this.childrens = [...response.data.data]
                  })
                  .catch((error) => {
                  console.log('Error: ', error)
                  })
          },
      }
  }
</script>
