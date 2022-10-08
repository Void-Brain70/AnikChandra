<template>
  <div class="home">
    <ToDo></ToDo>
    <ItemList></ItemList>
  </div>
</template>

<script>
import ToDo from "@/components/ToDo.vue";
import ItemList from "@/components/ItemList.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    ToDo,
    ItemList,
  },
};
</script>
