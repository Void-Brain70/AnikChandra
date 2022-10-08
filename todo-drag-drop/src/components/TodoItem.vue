<template>
  <div>
    <h1>ToDo</h1>
    <hr />

    <div class="row">
      <div class="col-3">
        <h3>TO DO <span class="material-icons"> add </span></h3>
        <draggable
          class="list-group"
          :list="list1"
          group="people"
          @change="log"
        >
          <div
            class="list-group-item"
            v-for="(element, index) in list1"
            :key="element.name"
          >
            {{ element.name }} {{ index }}
          </div>
        </draggable>
      </div>

      <div class="col-3">
        <h3>INPROGRESS</h3>
        <draggable
          class="list-group"
          :list="list2"
          group="people"
          @change="log"
        >
          <div
            class="list-group-item"
            v-for="(element, index) in list2"
            :key="element.name"
          >
            {{ element.name }} {{ index }}
          </div>
        </draggable>
      </div>

      <div class="col-3">
        <h3>TESTING</h3>
        <draggable
          class="list-group"
          :list="list3"
          group="people"
          @change="log"
        >
          <div
            class="list-group-item"
            v-for="(element, index) in list3"
            :key="element.name"
          >
            {{ element.name }} {{ index }}
          </div>
        </draggable>
      </div>

      <div class="col-3">
        <h3>DONE</h3>
        <draggable
          class="list-group"
          :list="list4"
          group="people"
          @change="log"
        >
          <div
            class="list-group-item"
            v-for="(element, index) in list4"
            :key="element.name"
          >
            {{ element.name }} {{ index }}
          </div>
        </draggable>
      </div>

      <rawDisplayer class="col-3" :value="list1" title="List 1" />
      <rawDisplayer class="col-3" :value="list2" title="List 2" />
      <rawDisplayer class="col-3" :value="list3" title="List 3" />
      <rawDisplayer class="col-3" :value="list4" title="List 4" />
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "TodoItem",
  display: "Two Lists",
  order: 1,
  components: {
    draggable,
  },
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
      ],
      list3: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
      ],
      list4: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
      ],
    };
  },
  methods: {
    add: function () {
      this.list.push({ name: "Juan" });
    },
    replace: function () {
      this.list = [{ name: "Edgard" }];
    },
    clone: function (el) {
      return {
        name: el.name + " cloned",
      };
    },
    log: function (evt) {
      window.console.log(evt);
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: blueviolet;
}
.row {
  display: flex;
  gap: 50px;
  margin-left: 35%;
}
</style>
