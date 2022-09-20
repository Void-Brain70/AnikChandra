<template>
<div class="home">
  <!-- <SlideSection></SlideSection> -->
  <MainSection></MainSection>
  <PracticeVuetify></PracticeVuetify>
  <ClientSide></ClientSide>
</div>  
</template>

<script>
// import SlideSection from '@/components/SlideSection.vue';
import MainSection from '@/components/MainSection.vue';
import PracticeVuetify from '@/components/PracticeVuetify.vue';
import ClientSide from '@/components/ClientSide.vue';
  export default {
    name: 'HomeView',

    components: {
    // SlideSection,
    MainSection,
    PracticeVuetify,
    ClientSide
},
  }
</script>
