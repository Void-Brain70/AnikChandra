<template>
    <div>
        <h1>All Courses Here</h1><hr>
        <v-container>
        <v-row>
            <v-col cols="3">
                <template v-if="categories && categories.length">
                    <v-row v-for="(category, index) in categories" :key="index">
                        <h3 v-if="category.children.length">
                            {{category.name}}
                            <v-radio-group v-model="radioButtonValue">
                                <v-radio v-for="(children, childrenIndex) in category.children" :key="childrenIndex" :label="`${children.name}`" :value="children.slug"></v-radio>
                            </v-radio-group>
                        </h3>
                    </v-row>
                </template>
            </v-col>
            <v-col cols="9">
                <div class="cardview">
                    <div v-for="(children, index) in  childrens " :key="index">
                    <CategoryCard :course="children" ></CategoryCard>
                </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>
<script>
import CategoryCard from '@/components/CategoryCard.vue'
    export default {
        name: 'HomeView',
        components:{CategoryCard },
        data(){
            return {
                radioButtonValue: null,
                categories: [], 
                childrens: [],
            }
        },
        watch:{
            radioButtonValue: function(){
                this.init(`course-by-category/${this.radioButtonValue}`)
            }
        },
        mounted(){
            if(this.categories && this.categories.length < 1){
                this.init('course-category/all',true)
            }
            if(this. childrens && this. childrens.length < 1){
                this.init('course',false)
            }


            
        },
        methods: {
            async init(alldata,status){
                await this.axios.get(alldata)
                    .then((response) => {
                        if(status){
                            this.categories = response.data.data
                        } else {
                            this.childrens = response.data.data
                        }
                    })
                    .catch((error) => {
                    console.log('Error: ', error)
                    })
            },
        }
        
    }
</script>

<style scoped>
h1{
    text-align: center;
    margin: 20px;
    color: #EC407A
}
.cardview{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    gap:10px;
}


</style>