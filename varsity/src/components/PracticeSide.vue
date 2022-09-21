<template>
<v-container fluid>
    <v-data-table
      :headers="headers"
      :items="items"
      :options.sync="options"
      :server-items-length="totalItems"
      :loading="loader.isLoading"
      class="elevation-1"
      :footer-props="footerProps"
    >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ pageInfo.pageName }}</v-toolbar-title>
        <v-divider class="mx-4" insert vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" persistent max-width="700">
          <template v-slot:activator="{on,attrs}">
             <v-btn
             v-on="on"
             v-bind="attrs"
             class="mx-2 white--text"
             small
             icon
             @click="create"
             >
             <v-icon>mdi-plus</v-icon>
             </v-btn>
          </template>
        </v-dialog>
      </v-toolbar>
    </template>
    </v-data-table>
</v-container>    
</template>

<script>
export default {
    name: "PracticeSide",
    data(){
        return {
            pageInfo:{
                pageName: 'Category',
                apiUrl: 'https://summer-canyon-zh9zckabi5cf.vapor-farm-f1.com/api/varsity-categories',
                permission: ""
            },
            totalItems: 0,
            items: [],
            loading: {
                isLoading: false,
            },
            options: {},
            dialog: false,
            formData:{
                name: "",
                photo: null
            },
            headers: [
                { text: 'Name', align: 'start', value: 'name' },
                { text: 'Photo', value: 'photo'},
            ],
            footerProps:{
                itemsPerPageOptions:[5,10,20,30]
            }
        }
    },
    computed:{
        form: function(){
            const formData = new FormData()
            formData.append('name',this.formData.name)
            if(this.formData.photo){
                formData.append('photo', this.formData.photo)
            }
            return formData
        }
    },
    watch: {
      options: {
        handler () {
          this.getDataFromApi()
        },
        deep: true,
      },
    },
    methods: {
      getDataFromApi () {
        this.loading = true
        this.fakeApiCall().then(data => {
          this.desserts = data.items
          this.totalDesserts = data.total
          this.loading = false
        })
      },
}
</script>

<style lang="less">

</style>