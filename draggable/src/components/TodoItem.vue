<template>
  <div>
    <h1>To Do</h1>
    <hr />
    <div class="row">
      <div class="col-3">
        <h3>
          TO DO <v-icon @click="addshow1()">mdi-plus</v-icon>
          <div v-if="show1" class="add">
            <input v-model="name1" type="text" /><button @click="addItem1">
              Add
            </button>
          </div>
        </h3>
        <draggable
          class="list-group"
          :list="list1"
          group="people"
          @change="log"
        >
          <div
            class="list-group-item"
            v-for="(element,index) in list1"
            :key="index"
          >
            {{ element.name }}
            <v-icon @click="deleteBox1">mdi-close</v-icon>
            
            <v-icon @click="editData1">mdi-pencil</v-icon>
            <div v-if="show11" class="edit">
            <input v-model="date1" type="text" />
            <button @clic="edit1" >edit</button>
          </div>
            
          </div>
        </draggable>
      </div>

      <div class="col-3">
        <h3>
          INPROGRESS<v-icon @click="addshow2()">mdi-plus</v-icon>
          <div v-if="show2" class="add">
            <input v-model="name2" type="text" /><button @click="addItem2">
              Add
            </button>
          </div>
        </h3>
        <draggable
          class="list-group"
          :list="list2"
          group="people"
          @change="log"
        >
          <div
            class="list-group-item"
            v-for="(element,index) in list2"
            :key="index"
          >
            {{ element.name }}
            <v-icon @click="deleteBox2">mdi-close</v-icon>

            <v-icon @click="editData2">mdi-pencil</v-icon>
            <div v-if="show12" class="edit">
            <input v-model="date2" type="text" />
            <button @clic="edit2" >edit</button>
          </div>
          </div>
        </draggable>
      </div>

      <div class="col-3">
        <h3>
          TESTING<v-icon @click="addshow3()">mdi-plus</v-icon>
          <div v-if="show3" class="add">
            <input v-model="name3" type="text" /><br />
            <button @click="addItem3">add</button><br />
          </div>
        </h3>
        <draggable
          class="list-group"
          :list="list3"
          group="people"
          @change="log"
        >
          <div
            class="list-group-item"
            v-for="(element,index) in list3"
            :key="index"
          >
            {{ element.name }}
            <v-icon @click="deleteBox3">mdi-close</v-icon>
            <v-icon @click="editData3">mdi-pencil</v-icon>
            <div v-if="show13" class="edit">
            <input v-model="date3" type="text" />
            <button @clic="edit3" >edit</button>
          </div>
          </div>
        </draggable>
      </div>

      <div class="col-3">
        <h3>
          Done<v-icon @click="addshow4()">mdi-plus</v-icon>
          <div v-if="show4" class="add">
            <input v-model="name4" type="text" /><button @click="addItem4">
              Add
            </button>
          </div>
        </h3>
        <draggable
          class="list-group"
          :list="list4"
          group="people"
          @change="log"
        >
          <div
            class="list-group-item"
            v-for="(element, index) in list4"
            :key="index"
          >
            {{ element.name }}
            <v-icon @click="deleteBox4">mdi-close</v-icon>

            <v-icon @click="editData4">mdi-pencil</v-icon>
            <div v-if="show14" class="edit">
            <input v-model="date4" type="text" />
            <button @clic="edit4" >edit</button>
          </div>
          </div>
        </draggable>
      </div>
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
      name1: "",
      name2: "",
      name3: "",
      name4: "",

      data1: '',
      data2: '',
      data3: '',
      data4: '',
      
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      
      show11: false,
      show12: false,
      show13: false,
      show14: false,
      
      dialog: false,

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
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
      ],
    };
  },
  methods: {
    addItem1() {
      this.list1.push({ name: this.name1 });
    },
    addItem2() {
      this.list2.push({ name: this.name2 });
    },
    addItem3() {
      this.list3.push({ name: this.name3 });
    },
    addItem4() {
      this.list4.push({ name: this.name4 });
    },
    addshow1() {
      this.show1 = !this.show1;
    },
    addshow2() {
      this.show2 = !this.show2;
    },
    addshow3() {
      this.show3 = !this.show3;
    },
    addshow4() {
      this.show4 = !this.show4;
    },
    deleteBox1(index) {
      this.list1.splice(index, 1);
    },
    deleteBox2(index) {
      this.list2.splice(index, 1);
    },
    deleteBox3(index) {
      this.list3.splice(index, 1);
    },
    deleteBox4(index) {
      this.list4.splice(index, 1);
    },
    edit1(value) {
      this.data1 = this.list1.map((el)=>{
        if(el.index == value.index){
            return value
        }
      })
    },
    edit2(value) {
      this.data2 = this.list2.map((el)=>{
        if(el.index == value.index){
            return value
        }
      })
    },
    edit3(value) {
      this.data3 = this.list3.map((el)=>{
        if(el.index == value.index){
            return value
        }
      })
    },
    edit4(value) {
      this.data4 = this.list4.map((el)=>{
        if(el.index == value.index){
            return value
        }
      })
    },
    editData1(){
        this.show11 = !this.show11;
    },
    editData2(){
        this.show12 = !this.show12;
    },
    editData3(){
        this.show13 = !this.show13;
    },
    editData4(){
        this.show14 = !this.show14;
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
}
</style>
