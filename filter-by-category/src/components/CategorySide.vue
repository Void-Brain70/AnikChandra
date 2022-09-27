<template>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img
        :src="childrenDetails.photo"
        height="200px"
      ></v-img>
  
      <v-card-title>
        {{childrenDetails.title}}
      </v-card-title>
      <div class="sub-text">
         <h4>Videos: {{childrenDetails.video_count}}</h4>
         <h4>Exams: {{childrenDetails.exam_count}}</h4>
         <h4>Price: {{childrenDetails.price}}</h4>
      </div>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
        </div>
      </v-expand-transition>
    </v-card>
  </template>

<script>
    export default {
        props:['childrenDetails'],
      data: () => ({
        show: false,
      }),
    }
</script>
<style scoped>
.sub-text{
  display: flex;
  justify-content: space-around;
}
</style>
