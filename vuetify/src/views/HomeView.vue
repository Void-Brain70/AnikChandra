<template>
<div>
  <NavBar></NavBar>
  <AboutView></AboutView>
  <MainSection></MainSection>
  <FooterSection></FooterSection>
</div>  
</template>

<script>
import MainSection from '@/components/MainSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import AboutView from './AboutView.vue';
import NavBar from '@/components/NavBar.vue';
  export default {
    name: 'HomeView',

    components: {
    MainSection,
    FooterSection,
    AboutView,
    NavBar
},
  }
</script>
