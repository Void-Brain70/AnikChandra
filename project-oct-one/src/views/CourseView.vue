<template>
  <div>
    <h1>Course Details</h1>
    <hr />
    <v-row>
      <v-col cols="4">
        <div class="card">
          <div v-for="(item, index) in course" :key="index">
            <!-- {{course}} -->
            <v-card class="mx-auto" max-width="400">
              <v-img
                v-if="item && item.photo"
                :src="item.photo"
                class="white--text align-end"
                height="200px"
              >
              </v-img>
              <v-img
                v-else
                src="@/assets/book.png"
                height="200px"
                class="white--text align-end"
              ></v-img>

              <v-card-subtitle class="pb-0">
                {{ item.title }}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="orange" text> Enroll Now </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>
      </v-col>

      <v-col cols="4">
        <v-expansion-panels>
          <v-expansion-panel  v-for="(name,index) in section" :key="index">
            <v-expansion-panel-header> {{ name.title }} </v-expansion-panel-header>
            <v-expansion-panel-content v-for="(data, index) in content" :key="index">
                <button class="btn"  @click="takeAction(data)" >{{data.type}}</button>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="4">
            <div>{{show}}</div>
      </v-col>
    
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CourseView",
  data() {
    return {
      course: [],
      section: [],
      content : [],
      show: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      await axios
        .get(
          "https://summer-canyon-zh9zckabi5cf.vapor-farm-f1.com/api/course/course-for-developert"
        )
        .then((res) => {
            if(res){
                this.course = res.data;
            }
            if(res){
                this.section = res.data.data.sections
            }
            if(res){
                this.content = res.data.data.sections[0].contents
            }
        });
    },
    takeAction(data){
        this.show = data
    }
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: #ec407a;
}
.btn{
    background-color: #ec407a;
    height: 50px;
    width: 100px;
    border-radius: 10px;
    color:aliceblue
}

</style>
