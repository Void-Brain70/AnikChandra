<template>
<div class="todo">
    <h1>ToDo</h1><hr>
    <h3>Total Number of Book:  {{$store.getters.totalBook}}</h3>
    <div class="add">
        <input v-model="bookname" type="text"><button @click="addBook">Add</button>
    </div>
    <div class="list">
        <ul>
          <li v-for="(book,index) in booklist" :key="index">{{book}}
            <button @click="deleteBook(index)">Delete</button>
            <button @click="updateBook(index)">Update</button>
          </li>
        </ul> 
    </div>
</div>    
</template>

<script>
export default {
    name: "HomePage",
    data(){
        return {
            bookname: ""
        }
    },
    computed:{
        booklist(){
            return this.$store.state.booklist
        }

    },
    methods:{
        addBook(){
            if(this.bookname != ""){
                this.$store.dispatch("addBook",this.bookname);
                this.bookname = ""
            }
            else{
                alert("Add something")
            }
            
        },
        deleteBook(index){
            this.$store.dispatch("deleteBook",index)
        },
        updateBook(index){
            this.$store.dispatch("updateBook",index)
            console.log(index)
        }
    }

}
</script>


<style scoped>

</style>