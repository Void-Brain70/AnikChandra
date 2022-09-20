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
            <v-toolbar-title> {{ pageInfo.pageName | capitalize }}</v-toolbar-title>
  
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <div class="mt-4 d-flex mr-2" style="gap: 10px">
              <v-switch v-model="active" label="Active" dense></v-switch>
              <v-switch v-model="pending" label="Pending" dense></v-switch>
              <v-switch v-model="rejected" label="Rejected" dense></v-switch>
            </div>
  
            <div class="mt-3 mr-2" style="max-width: 180px;">
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    clearable
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @input="menu = false"
                ></v-date-picker>
              </v-menu>
            </div>
  
            <div class="mt-3">
              <v-text-field
                v-model="search"
                label="Search"
              ></v-text-field>
            </div>
  
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
                      {{ pageInfo.pageName | capitalize }}
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row dense>
                          <v-col cols="12" sm="6" md="6">
                            <validation-provider
                              v-slot="{ errors }"
                              name="Card Category"
                              vid="card_category_id"
                              rules="required"
                            >
                              <v-select
                                v-model="formData.card_category_id"
                                :items="categories"
                                item-text="name"
                                item-value="id"
                                :error-messages="errors"
                                label="Select Card Category"
                                append-icon="mdi-package-variant"
                                clearable
                                required
                                dense
                                outlined
                              ></v-select>
                            </validation-provider>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <validation-provider
                              v-slot="{ errors }"
                              name="Customer Name"
                              rules="required|max:191"
                              vid="customer_name"
                            >
                              <v-text-field
                                v-model="formData.customer_name"
                                :error-messages="errors"
                                label="Customer Name"
                                required
                                dense
                                outlined
                              ></v-text-field>
                            </validation-provider>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <validation-provider
                              v-slot="{ errors }"
                              name="Organization Name"
                              rules="required|max:191"
                              vid="organization_name"
                            >
                              <v-text-field
                                v-model="formData.organization_name"
                                :error-messages="errors"
                                label="Organization Name"
                                required
                                dense
                                outlined
                              ></v-text-field>
                            </validation-provider>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <validation-provider
                              v-slot="{ errors }"
                              name="Card Number"
                              rules="required|max:191"
                              vid="card_number"
                            >
                              <v-text-field
                                v-model="formData.card_number"
                                :error-messages="errors"
                                label="Card Number"
                                required
                                dense
                                outlined
                              ></v-text-field>
                            </validation-provider>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <validation-provider
                              v-slot="{ errors }"
                              name="Card Type"
                              vid="card_type"
                              rules="required"
                            >
                              <v-select
                                v-model="formData.card_type"
                                :items="[{name: 'Primary', val: 'primary'}, {name: 'Supply', val: 'supply'}]"
                                item-text="name"
                                item-value="val"
                                :error-messages="errors"
                                label="Select Card Type"
                                append-icon="mdi-package-variant"
                                clearable
                                required
                                dense
                                outlined
                              ></v-select>
                            </validation-provider>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <validation-provider
                              v-slot="{ errors }"
                              name="Client ID"
                              rules="required|max:191"
                              vid="client_id"
                            >
                              <v-text-field
                                v-model="formData.client_id"
                                :error-messages="errors"
                                label="Client ID"
                                required
                                dense
                                outlined
                              ></v-text-field>
                            </validation-provider>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <validation-provider
                              v-slot="{ errors }"
                              name="Phone"
                              rules="required|digits:11"
                              vid="phone"
                            >
                              <v-text-field
                                v-model="formData.phone"
                                type="number"
                                :error-messages="errors"
                                label="Phone"
                                required
                                dense
                                outlined
                              ></v-text-field>
                            </validation-provider>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <validation-provider
                              v-slot="{ errors }"
                              name="Refrm"
                              rules=""
                              vid="refrm"
                            >
                              <v-text-field
                                v-model="formData.refrm"
                                :error-messages="errors"
                                label="Refrm"
                                required
                                dense
                                outlined
                              ></v-text-field>
                            </validation-provider>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <validation-provider
                              v-slot="{ errors }"
                              name="Rm Code"
                              rules=""
                              vid="rm_code"
                            >
                              <v-text-field
                                v-model="formData.rm_code"
                                :error-messages="errors"
                                label="Rm Code"
                                required
                                dense
                                outlined
                              ></v-text-field>
                            </validation-provider>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <validation-provider
                              v-slot="{ errors }"
                              name="Card Status"
                              vid="status"
                              rules="required"
                            >
                              <v-select
                                v-model="formData.status"
                                :items="[{name: 'Pending', val: 'pending'}, {name: 'Active', val: 'active'}, {name: 'Rejected', val: 'rejected'},{name: 'Expired', val: 'expired'},]"
                                item-text="name"
                                item-value="val"
                                :error-messages="errors"
                                label="Select Card Status"
                                append-icon="mdi-package-variant"
                                clearable
                                required
                                dense
                                outlined
                              ></v-select>
                            </validation-provider>
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
  
        <template v-slot:item.card_category_id="{ index, item }">
          {{ categoryNameByID(item.card_category_id) }}
        </template>
        <template v-slot:item.actions="{ index, item }">
          <div class="d-flex" style="gap: 10px">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  x-small
                  color="green darken-2"
                  v-bind="attrs"
                  v-on="on"
                  fab
                  :disabled="item.status === 'active'"
                  @click="toggleAction(item.id, 'accept')"
                >
                 <v-icon class="white--text">mdi-credit-card-check</v-icon>
                </v-btn>
              </template>
              <span>Accept</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  x-small
                  color="red darken-2"
                  v-bind="attrs"
                  v-on="on"
                  fab
                  :disabled="item.status === 'rejected'"
                  @click="toggleAction(item.id, 'reject')"
                >
                  <v-icon class="white--text">mdi-credit-card-off</v-icon>
                </v-btn>
              </template>
              <span>Reject</span>
            </v-tooltip>
  
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
  import {mapGetters, mapActions} from 'vuex'
  
  export default {
    name: 'CardApplication',
    head: {
      title: 'Card',
      meta: [
        {
          hid: 'Card',
          name: 'description',
          content: 'Card'
        }
      ],
    },
    data() {
      return {
        pageInfo: {
          pageName: 'Card Application',
          apiUrl: '/card-applications',
          permission: ''
        },
        showPassword: false,
        menu: false,
        date: '',
        pending: true,
        active: false,
        rejected: false,
        items: [],
        selectedItem: null,
        totalItems: 0,
        options: {},
        dialog: false,
        editMode: false,
        loader: {
          isLoading: false,
          isSubmitting: false,
          isAccepting: false,
          isRejecting: false,
        },
        formData: {
          card_category_id : '',
          customer_name: '',
          organization_name: '',
          card_number: '',
          card_type: 'primary',
          client_id: '',
          phone: '',
          refrm: '',
          rm_code: '',
          status: 'pending'
        },
        search: '',
        headers: [
          {text: 'Employee Name', align: 'start', value: 'user.name'},
          {text: 'Card Category', value: 'card_category_id'},
          {text: 'Customer Name', value: 'customer_name'},
          {text: 'Organization Name', value: 'organization_name'},
          {text: 'Card Number', value: 'card_number'},
          {text: 'Status', value: 'status'},
          {text: 'Card Type', value: 'card_type'},
          {text: 'Client ID', value: 'client_id'},
          {text: 'Phone', value: 'phone'},
          {text: 'refrm', value: 'refrm'},
          {text: 'rm_code', value: 'rm_code'},
          {text: 'Actions', value: 'actions', sortable: false}
        ],
        footerProps: {
          itemsPerPageOptions: [20, 50, 100, 500]
        }
      }
    },
    computed: {
      ...mapGetters('admin/category', ['categories', 'categoryNameByID']),
      filterStatus() {
        let filter = ''
        if (this.active) {
          filter = 'status=active'
        } else if (this.pending) {
          filter = 'status=pending'
        } else if (this.rejected) {
          filter = 'status=rejected'
        } else {
          filter = 'status=all'
        }
        return filter
      },
      form: function () {
        const formData = new FormData()
        if (this.editMode) {
          formData.append('_method', 'PUT')
        }
        formData.append('card_category_id', this.formData.card_category_id)
        formData.append('customer_name', this.formData.customer_name)
        formData.append('organization_name', this.formData.organization_name)
        formData.append('card_number', this.formData.card_number)
        formData.append('card_type', this.formData.card_type)
        formData.append('client_id', this.formData.client_id)
        formData.append('phone', this.formData.phone)
        formData.append('refrm', this.formData.refrm ? this.formData.refrm : '')
        formData.append('rm_code', this.formData.rm_code ? this.formData.rm_code : '')
        formData.append('status', this.formData.status)
  
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
      },
      filterStatus() {
        this.init()
      },
      date() {
        this.init()
      },
      pending() {
        if(this.pending) {
          this.active = false
          this.rejected = false
        }
      },
      active() {
        if(this.active) {
          this.pending = false
          this.rejected = false
        }
      },
      rejected() {
        if(this.rejected) {
          this.pending = false
          this.active = false
        }
      },
      search(value, oldVal) {
        if ((value && value.length >= 3 && value.length < 12) || oldVal.length === 3) {
          if (this.timeout) {
            clearTimeout(this.timeout)
          }
          this.timeout = setTimeout(() => {
            this.init()
          }, 300)
        }
      }
    },
    created() {
      if (this.categories && this.categories.length < 1) {
        this.GET_ALL_CATEGORIES()
      }
    },
    methods: {
      ...mapActions('admin/category', ['GET_ALL_CATEGORIES']),
      async init() {
        this.loader.isLoading = true
        let url = `${this.pageInfo.apiUrl}?${this.filterStatus}&user_filter=admin`
        if (this.search.length >= 3) {
          url += '&search=' + this.search
        }
        if (this.date) {
          url += '&date=' + this.date
        }
        await this.$axios.get(url).then((response) => {
          this.items = response.data.data
          this.totalItems = response.data.meta.total
        }).catch(() => {
          this.$toaster.error('Error in fetching data !!')
        }).finally(() => {
          this.loader.isLoading = false
        })
      },
       toggleAction(id, action) {
        this.$swal?.fire({
          title: 'Are you sure?',
          icon: 'warning',
          text: `Do you want to ${action} this ${this.pageInfo.pageName}?`,
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
        }).then(async (result) => {
          if (result.isConfirmed) {
            action === 'accept' ?  this.loader.isAccepting = true : this.loader.isRejecting = true
            await this.$axios.put(`${this.pageInfo.apiUrl}/toggle/${id}`, {
              'action': action === 'accept' ? 'active' : 'rejected'
            }).then((response) => {
              const editIndex = this.items.findIndex((element) => element.id === id)
              Object.assign(this.items[editIndex], response.data.data)
  
              this.$toaster.success(`${this.pageInfo.pageName} ${action}ed successfully!!`)
            }).finally(() => action === 'accept' ?  this.loader.isAccepting = false : this.loader.isRejecting = false)
          }
        })
      },
      create() {
        this.editMode = false
        this.selectedItem = null
        this.formData = {
          card_category_id : '',
          customer_name: '',
          organization_name: '',
          card_number: '',
          card_type: 'primary',
          client_id: '',
          phone: '',
          refrm: '',
          rm_code: '',
          status: 'pending'
        }
      },
      editItem(item) {
        this.dialog = true
        this.editMode = true
        this.selectedItem = item
        this.formData = {
          card_category_id: item.card_category_id || '',
          customer_name: item.customer_name || '',
          organization_name: item.organization_name || '',
          card_number: item.card_number || '',
          card_type: item.card_type || '',
          client_id: item.client_id || '',
          phone : item.phone  || '',
          refrm : item.refrm  || '',
          rm_code : item.rm_code  || '',
          status : item.status  || '',
        }
      },
      takeAction() {
        this.editMode ? this.update() : this.submit()
      },
      async submit() {
        this.loader.isSubmitting = true
        await this.$axios.post(this.pageInfo.apiUrl, this.form).then(response => {
          this.dialog = false
          this.items.unshift(response.data.data)
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
        await this.$axios.post(`${this.pageInfo.apiUrl}/${this.selectedItem.id}`, this.form).then(response => {
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
            await this.$axios.delete(`${this.pageInfo.apiUrl}/${id}`).then((response) => {
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