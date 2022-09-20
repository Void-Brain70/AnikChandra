<template>
    <v-container fluid>
      <v-data-table
        dense
        :headers="headers"
        :items="items"
        :search="search"
        :options.sync="options"
        :server-items-length="totalItems"
        :footer-props="footerProps"
        :items-per-page="20"
        class="elevation-1"
        :loading="loader.isLoading"
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-toolbar-title> {{ pageInfo.pageName }}</v-toolbar-title>
  
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
  
            <v-spacer></v-spacer>
  
            <v-dialog
              v-model="dialog"
              persistent
              max-width="700"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  style="background-color: #01579B;"
                  class="mx-2 white--text"
                  v-bind="attrs"
                  icon
                  v-on="on"
                  @click="create"
                  small
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </template>
              <v-card>
                <validation-observer ref="observer" v-slot="{ invalid }">
                  <v-form ref="form" @submit.prevent="takeAction">
                    <v-card-title class="text-h5"> {{ editMode ? 'Update ' : 'Create' }}
                      {{ pageInfo.pageName }}
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row dense>
                          <v-col cols="12" sm="6" md="6">
                            <validation-provider
                              v-slot="{ errors }"
                              name="Name"
                              rules="required|max:191"
                              vid="name"
                            >
                              <v-text-field
                                v-model="formData.name"
                                :error-messages="errors"
                                label="Name"
                                required
                                dense
                                outlined
                              ></v-text-field>
                            </validation-provider>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-file-input
                                v-model="formData.photo"
                                :error-messages="errors"
                                label="Photo"
                                required
                                dense
                                outlined
                              ></v-file-input>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="green darken-1"
                        class="mx-2 white--text"
                        type="submit"
                        :disabled="invalid"
                        :loading="loader.isSubmitting"
                        depressed
                      >
                        {{ editMode ? 'Update' : 'Save' }}
                      </v-btn>
                      <v-btn class="mr-2 error darken-1 white--text" depressed @click="closeModal">
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-form>
                </validation-observer>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>

        <template v-slot:item.photo="{  item }">
            <v-img :src="item.photo" contain height="100" width="100"></v-img>
        </template>
  
        <template v-slot:item.actions="{ index, item }">
          <div class="d-flex" style="gap: 10px">
  
            <v-btn
              x-small
              color="accent"
              fab
              @click="editItem(item)"
            >
              <v-icon>
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn
              color="error"
              x-small
              fab
              @click="deleteItem(index, item.id)"
            >
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'CardApplication',
    data() {
      return {
        pageInfo: {
          pageName: 'Category',
          apiUrl: ' https://summer-canyon-zh9zckabi5cf.vapor-farm-f1.com/api/varsity-categories',
          permission: ''
        },
    
        items: [],
        categories: [],
        selectedItem: null,
        totalItems: 0,
        options: {},
        dialog: false,
        editMode: false,
        loader: {
          isLoading: false,
          isSubmitting: false,
        },
        formData: {
          name : '',
          photo: null
        },
        oldPhoto: '',
        search: '',
        headers: [
          {text: 'Name', align: 'start', value: 'name'},
          {text: 'Photo', value: 'photo'},
          {text: 'Actions', value: 'actions', sortable: false}
        ],
        footerProps: {
          itemsPerPageOptions: [20, 50, 100, 500]
        }
      }
    },
    computed: {
      form: function () {
        const formData = new FormData()
        if (this.editMode) {
          formData.append('_method', 'PUT')
        }
        formData.append('name', this.formData.name)
        formData.append('category', this.categories)
        if(this.formData.photo) {
            formData.append('photo', this.formData.photo)
        }
        return formData
      }
    },
    watch: {
      options: {
        handler() {
          this.init()
        },
        deep: true,
      },
      dialog(val) {
        val || this.closeModal()
      }
    },
    methods: {
      async init() {
        this.loader.isLoading = true
        const url = `${this.pageInfo.apiUrl}?per_page=${this.options.itemsPerPage}&page=${this.options.page}`
        await this.axios.get(url).then((response) => {
          this.items = response.data.data
          this.totalItems = response.data.meta.total
        }).catch(() => {
          this.$toaster.error('Error in fetching data !!')
        }).finally(() => {
          this.loader.isLoading = false
        })
      },
      create() {
        this.editMode = false
        this.selectedItem = null
        this.formData = {
            name : '',
            photo: null
        }
      },
      editItem(item) {
        this.dialog = true
        this.editMode = true
        this.selectedItem = item
        this.formData = {
            name: item.name || ''
        }
        this.oldPhoto = item.photo ?? ''
      },
      takeAction() {
        this.editMode ? this.update() : this.submit()
      },
      async submit() {
        this.loader.isSubmitting = true
        await this.axios.post(this.pageInfo.apiUrl, this.form).then(response => {
          this.dialog = false
          this.items.push(response.data.data)
          this.totalItems += 1
          this.clear()
          this.$toaster.success(`${this.pageInfo.pageName} created successfully!!`)
        }).catch((error) => {
          this.$refs.observer.setErrors(error.response.data)
          this.$toaster.error('Something went wrong!!')
        }).finally(() => this.loader.isSubmitting = false)
      },
      async update() {
        this.loader.isSubmitting = true
        await this.axios.post(`${this.pageInfo.apiUrl}/${this.selectedItem.id}`, this.form).then(response => {
          const editIndex = this.items.findIndex((element) => element.id === this.selectedItem.id)
          Object.assign(this.items[editIndex], response.data.data)
          this.dialog = false
          this.clear()
          this.$toaster.success(`${this.pageInfo.pageName} Updated successfully!!`)
        }).catch((error) => {
          this.$refs.observer.setErrors(error.response.data)
          this.$toaster.error('Something went wrong!!')
        }).finally(() => this.loader.isSubmitting = false)
      },
      async deleteItem(index, id) {
        this.$swal?.fire({
          title: 'Are you sure?',
          icon: 'warning',
          text: `Do you want to delete this ${this.pageInfo.pageName}?`,
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
        }).then(async (result) => {
          if (result.isConfirmed) {
            this.loader.isDeleting = this.items.id
            await this.axios.delete(`${this.pageInfo.apiUrl}/${id}`).then((response) => {
              this.items.splice(index, 1)
              this.totalItems -= 1
              this.$toaster.success(`${this.pageInfo.pageName} Deleted successfully!!`)
            }).finally(() => this.loader.isDeleting = false)
          }
        })
  
      },
      closeModal() {
        this.dialog = false
        this.selectedItem = null
        this.editMode = false
        this.$refs.observer.reset()
      },
      clear() {
        this.editMode = false
        this.selectedItem = null
        this.$refs.form.reset()
        this.$refs.observer.reset()
      }
    }
  }
  </script>