<template>
    <div class="row">
      <div class="col-3">
        <h3>Active</h3>
        <draggable class="list-group" :list="list1" group="people" @change="log">
          <div
            class="list-group-item"
            v-for="(element, index) in list1"
            :key="index"
          >
            {{ element.name }} {{element.status}}
          </div>
        </draggable>
      </div>
  
      <div class="col-3">
        <h3>Complete</h3>
        <draggable class="list-group" :list="list2" group="people" @change="log">
          <div
            class="list-group-item"
            v-for="(element, index) in list2"
            :key="index"
          >
            {{ element.name }} {{element.status}}
          </div>
        </draggable>
      </div>
    </div>
  </template>
  <script>
  import draggable from "vuedraggable";
  export default {
    name: "two-lists",
    display: "Two Lists",
    order: 1,
    components: {
      draggable
    },
    data() {
      return {
        // list1: [
        //   { name: "John", id: 1 },
        //   { name: "Joao", id: 2 },
        //   { name: "Jean", id: 3 },
        //   { name: "Gerard", id: 4 }
        // ],
        list2: [
          // { name: "Juan", id: 5 },
          // { name: "Edgard", id: 6 },
          // { name: "Johnson", id: 7 }
        ]
      };
    },
    computed: {
      list1() {
        return this.$store.getters.allItems;
      }
    },
    methods: {
      // add: function() {
      //   this.list.push({ name: "Juan" });
      // },
      // replace: function() {
      //   this.list = [{ name: "Edgard" }];
      // },
      // clone: function(el) {
      //   return {
      //     name: el.name + " cloned"
      //   };
      // },
      log: function(evt) {
        if(evt.added) {
          if(evt.added.element.status === 'complete') {
            evt.added.element.status = 'active'
          } else {
            evt.added.element.status = 'complete'
          }
        }
      }
    }
  };
  </script>
  
<style scoped>
.row{
    display: flex;
    gap: 50px;
}
</style>  