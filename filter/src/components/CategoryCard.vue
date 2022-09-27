
<template>
    <v-card class="mx-auto" max-width="344">
    
      <v-img :src="course.photo" height="200px"></v-img>
      <v-card-title>
        {{ course.title }}
      </v-card-title>
      <v-card-subtitle class="sub-text">
      <h4>Videos: {{ course.video_count || 0 }}</h4>
      <h4>Exams: {{ course.exam_count || 0 }}</h4>
      <h4>Price: {{ isBefore(course.discount_till) ? course.discounted_price : course.price || 0 }}</h4>
      </v-card-subtitle>
    </v-card>
</template>
<script>
import moment from 'moment';
export default {
  props: ["course"],
  data: () => ({
    show: false,
  }),
  methods:{
    isBefore(date){
        return  moment().isBefore(date)
    }
  }
};
</script>
<style scoped>
.sub-text{
  display: flex;
  justify-content: space-around;
}

</style>
