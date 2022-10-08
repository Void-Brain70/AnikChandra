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
          {{ element.name }} {{ element.status }}
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
          {{ element.name }} {{ element.status }}
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
    draggable,
  },
  data() {
    return {
      list2: [],
    };
  },
  computed: {
    list1() {
      return this.$store.getters.allItems;
    },
  },
  methods: {
    log: function (evt) {
      if (evt.added) {
        if (evt.added.element.status === "complete") {
          evt.added.element.status = "active";
        } else {
          evt.added.element.status = "complete";
        }
      }
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  gap: 50px;
}
</style>
