<template>
  <section>
    <Transition name="fade">
      <div class="w-full">
        <div
          :class="[showClaimModal ? 'z-0' : '']"
          class="px-3 w-full h-screen sticky top-0 overflow-y-auto md:px-14 py-6 space-y-10 bg-slate-50"
        >
          <div
            class="background md:flex md:justify-between md:flex-row flex flex-col-reverse md:items-center bg-white rounded-lg py-4 space-y-6 md:space-y-0"
          >
            <div class="pl-10 space-y-2 py-6 md:py-0">
              <h1 class="font-bold text-gray-200 text-2xl">
                Store Analytics
              </h1>
              <p class="text-sm text-gray-200 font-light">
                Store statistics overview
              </p>
            </div>
          </div>

          <div class="md:flex justify-between items-center space-y-6 md:space-y-0">
            <div class="border border-gray-100 lg:w-9/12 py-2.5 rounded-lg bg-white relative">
              <input
                v-model="search"
                type="search"
                placeholder="Search product"
                class="w-full placeholder-gray-400 outline-none pl-10 text-xs font-medium"
              >
              <img class="absolute top-4 left-4" src="@/assets/img/searchIcon.svg" alt="">
            </div>

            <div>
              <button class="py-2 px-3 text-sm text-white bg-green-400 rounded-lg" @click="openAddProductModal">
                Add
                Product
              </button>
            </div>
          </div>

          <div>
            <div class="overflow-x-auto">
              <b-card>
                <b-table
                  show-empty
                  responsive
                  :items="filteredProducts"
                  :fields="fields"
                  :busy="loading"
                  :current-page="currentPage"
                  :per-page="perPage"
                >
                  <template #table-busy>
                    <div class="text-center my-2 cursor-pointer">
                      <b-skeleton animation="fade" width="100%" />
                      <b-skeleton animation="fade" width="100%" />
                      <b-skeleton animation="fade" width="100%" />
                      <!-- <b-spinner class="align-middle" />
                        <small>Loading...</small> -->
                    </div>
                  </template>

                  <template #empty>
                    <p class="text-center text-sm text-secondary py-2 cursor-pointer">
                      {{
                        search
                          ? `No products found for search value: "${search}"`
                          : "No products available"
                      }}
                    </p>
                  </template>

                  <!-- <template #cell(sn)="data">
                    <span class="py-2 text-xs cursor-pointer">
                      {{ data.index + 1 }}</span>
                  </template> -->

                  <template #cell(product)="data">
                    <div class="flex items-center space-x-3">
                      <div>
                        <img
                          title="Click to preview product"
                          :src="data.item.imageUrl"
                          class="rounded-full h-7 w-7"
                          alt=""
                          @click="handleImagePreview(data.item.imageUrl)"
                        >
                      </div>
                      <p class="py-2 text-xs cursor-pointer">
                        {{
                          data?.item?.productName === "null"
                            ? "N/A"
                            : data.item.productName && data.item.productName.length > 20
                              ? data.item.productName.slice(0, 20) + "..."
                              : data.item.productName
                        }}
                      </p>
                    </div>
                  </template>

                  <template #cell(description)="data">
                    <p class="py-2 text-xs cursor-pointer">
                      {{
                        data?.item?.title === "null"
                          ? "N/A"
                          : data.item.productDescription && data.item.productDescription.length > 20
                            ? data.item.productDescription.slice(0, 20) + "..."
                            : data.item.productDescription
                      }}
                    </p>
                  </template>

                  <template #cell(publication_status)="data">
                    <p class="py-2 text-xs cursor-pointer">
                      {{ data?.item?.isPublished ? "YES" : "NO" }}
                    </p>
                  </template>

                  <template #cell(price)="data">
                    <p class="py-2 text-xs cursor-pointer">
                      {{
                        data?.item?.productPrice ?? "N/A"
                      }}
                    </p>
                  </template>

                  <template #cell(number_in_stock)="data">
                    <p class="py-2 text-xs cursor-pointer">
                      {{
                        data?.item?.numberInStock ?? "N/A"
                      }}
                    </p>
                  </template>

                  <template #cell(date_added)="data">
                    <p class="py-2 text-xs cursor-pointer">
                      {{
                        $moment(data.item.createdAt).format("L")
                      }}
                    </p>
                  </template>

                  <template #cell(actions)="data">
                    <b-dropdown
                      size="sm"
                      variant="link"
                      class="position-relative text-center w-100"
                      :toggle-class="'text-decoration-none'"
                      :no-caret="true"
                      right
                    >
                      <template #button-content>
                        <div class="flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                          </svg>
                        </div>
                      </template>
                      <b-dropdown-item @click="viewProductDetails(data.item)">
                        <div class="flex items-center space-x-2 py-2.5">
                          <p>
                            <svg
                              class="cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#74d321"
                              stroke-width="2"
                              stroke-linecap="square"
                              stroke-linejoin="bevel"
                            >
                              <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
                              <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
                            </svg>
                          </p>

                          <p class="text-xs">
                            View Product
                          </p>
                        </div>
                      </b-dropdown-item>
                      <b-dropdown-item @click="handleEdit(data.item)">
                        <div class="flex items-center space-x-2 py-2.5">
                          <p>
                            <svg
                              class="cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#74d321"
                              stroke-width="2"
                              stroke-linecap="square"
                              stroke-linejoin="bevel"
                            >
                              <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
                              <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
                            </svg>
                          </p>

                          <p class="text-xs">
                            Edit Product
                          </p>
                        </div>
                      </b-dropdown-item>
                      <b-dropdown-item @click="handleDelete(data.item)">
                        <div class="flex items-center space-x-2 py-2.5">
                          <p>
                            <svg
                              class="cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#d33a21"
                              stroke-width="2"
                              stroke-linecap="square"
                              stroke-linejoin="bevel"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1="10" y1="11" x2="10" y2="17" />
                              <line x1="14" y1="11" x2="14" y2="17" />
                            </svg>
                          </p>
                          <p class="text-xs">
                            Delete Product
                          </p>
                        </div>
                      </b-dropdown-item>
                    </b-dropdown>
                  </template>
                </b-table>
                <div class="flex justify-end items-end">
                  <b-pagination
                    v-model="currentPage"
                    :total-rows="totalRows"
                    :per-page="perPage"
                    size="md"
                    class="my-3"
                  />
                </div>
              </b-card>
            </div>
          </div>
        </div>

        <div
          v-if="showClaimModal"
          class="backdrop backdrop-blur-sm overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex h-screen"
        >
          <div class="absolute top-10 md:ml-32">
            <img
              src="@/assets/img/close.svg"
              class="cursor-pointer hidden md:block"
              alt=""
              @click="showClaimModal = !showClaimModal"
            >
          </div>

          <div
            :class="[showClaimModal ? 'z-50' : '']"
            class="w-11/12 md:w-5/12 absolute top-0 right-0  bg-white p-5 md:p-10 shadow-md h-screen overflow-y-auto"
          >
            <img
              src="@/assets/img/close.svg"
              class="cursor-pointer md:hidden"
              alt=""
              @click="showClaimModal = !showClaimModal"
            >
            <div class="flex justify-between items-center bg-white rounded-lg pb-6">
              <div class="space-y-2">
                <h1 style="color: #1e1f20" class="font-bold text-3xl">
                  Product /
                  <span class="text-green-400" style="color: #3baa90">Details</span>
                </h1>
                <p class="text-sm text-gray-500 font-light">
                  Outline details of selected product
                </p>
              </div>
            </div>

            <hr>

            <div>
              <div class="overflow-x-auto shadow-md rounded-md p-6">
                <div class="space-y-6 text-sm text-gray-600 pt-3">
                  <div class="flex justify-center items-center cursor-pointer">
                    <div class="p-2 rounded-full flex justify-center items-center h-32 w-full">
                      <img
                        title="Click to view Image"
                        :src="selectedProduct.imageUrl"
                        alt=""
                        class="rounded-md object-cover cursor-pointer h-32 w-full"
                      >
                    </div>
                  </div>

                  <div class="flex items-center space-x-6 justify-between">
                    <p class="text-xs md:text-sm">
                      <b class="uppercase text-xs">Product Name :</b>
                    </p>
                    <p class="text-xs">
                      {{ selectedProduct.productName }}
                    </p>
                  </div>

                  <div class="flex items-center space-x-6 justify-between">
                    <p class="text-xs md:text-sm">
                      <b class="uppercase text-xs">Description :</b>
                    </p>
                    <p class="text-xs">
                      {{ selectedProduct.productDescription }}
                    </p>
                  </div>

                  <div class="flex items-center space-x-6 justify-between">
                    <p class="text-xs md:text-sm">
                      <b class="uppercase text-xs">Publication Status :</b>
                    </p>
                    <p class="text-xs">
                      {{ selectedProduct.isPublished }}
                    </p>
                  </div>

                  <div class="flex items-center space-x-6 justify-between">
                    <p class="text-xs md:text-sm">
                      <b class="uppercase text-xs">Price :</b>
                    </p>
                    <p class="text-xs">
                      NGN {{ selectedProduct.productPrice }}
                    </p>
                  </div>

                  <div class="flex items-center space-x-6 justify-between">
                    <p class="text-xs md:text-sm">
                      <b class="uppercase text-xs">Number In Stock :</b>
                    </p>
                    <p class="text-xs">
                      {{ selectedProduct.numberInStock }}
                    </p>
                  </div>

                  <div class="flex items-center space-x-6 justify-between">
                    <p class="text-xs md:text-sm">
                      <b class="uppercase text-xs">Date Created :</b>
                    </p>
                    <p class="text-xs">
                      {{ $moment(selectedProduct.createdAt).format('LL') ?? 'N/A' }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <b-modal
      id="addProduct"
      centered
      no-close-on-backdrop
      no-close-on-esc
      no-stacking
      hide-footer
      hide-header
    >
      <form class="mx-auto mb-0 pb-3 max-w-md space-y-4 p-2" @submit.prevent="saveProduct">
        <h1 class="text-center text-lg text-gray-700 py-2">
          {{ isEdit ? 'Edit' : 'Add' }} Product
        </h1>
        <div class="flex justify-center items-center flex-col space-y-2">
          <img
            v-if="profilePreview && !uploadingProfile"
            alt
            class="h-14 w-14 rounded-full object-cover"
            :src="profilePreview"
          >
          <spinner v-if="uploadingProfile" />
          <img v-if="!profilePreview && !uploadingProfile" class="h-16 w-16" alt="" src="@/assets/img/userIcon.svg">
          <input id="profile" class="hidden" type="file" @change="handleProfileUpload">
          <label
            for="profile"
            class="text-indigo-700 text-xs font-medium cursor-pointer"
            :class="[uploadingProfile ? 'opacity-25 cursor-not-allowed' : '']"
          >{{
            uploadingProfile ? 'Uploading...' : 'Click to upload product image'
          }}</label>
        </div>
        <div>
          <label for="productName" class="text-xs pb-2">Product Name</label>

          <div class="relative">
            <span>
              <input
                v-model="form.productName"
                type="text"
                class="
                w-full
                rounded-lg
                border
                outline-none
                py-2.5
                px-3
                pr-12
                text-xs
              "
                placeholder="Enter product name"
              >
            </span>
          </div>
        </div>

        <div>
          <label for="productDescription" class="text-xs pb-2">Product Description</label>

          <div class="relative">
            <span>
              <textarea
                v-model="form.productDescription"
                style="resize: none;"
                rows="3"
                cols="3"
                class="
                w-full
                rounded-lg
                border
                outline-none
                px-3
                py-2.5
                pr-12
                text-xs
              "
                placeholder="Enter product description"
              />
            </span>
          </div>
        </div>

        <div>
          <label for="numberInStock" class="text-xs pb-2">Number in stock</label>

          <div class="relative">
            <span>
              <input
                v-model="form.numberInStock"
                type="tel"
                class="
                w-full
                rounded-lg
                border
                outline-none
                px-3
                py-2.5
                pr-12
                text-xs
              "
                placeholder="Enter number available in stock"
              >
            </span>
          </div>
        </div>

        <div>
          <label for="numberInStock" class="text-xs pb-2">is this book published already?</label>

          <div class="relative flex space-x-3">
            <p class="flex items-center">
              <input
                v-model="form.isPublished"
                type="radio"
                class="
                w-full
                rounded-lg
                border
                outline-none
                px-3
                py-2.5
                pr-12
                text-xs
              "
                value="true"
                name="true"
                placeholder="Enter number available in stock"
              > <label
                class="pl-1 text-sm"
                for="true"
              >Yes</label>
            </p>
            <p class="flex items-center">
              <input
                v-model="form.isPublished"
                type="radio"
                class="
            w-full
            rounded-lg
            border
            outline-none
            px-3
            py-2.5
            pr-12
            text-xs
          "
                value="false"
                name="false"
                placeholder="Enter number available in stock"
              > <label
                class="pl-1 text-sm"
                for="false"
              >No</label>
            </p>
          </div>
        </div>

        <div>
          <label for="price" class="text-xs pb-2">Product Price</label>

          <div class="relative">
            <input
              v-model="form.price"
              type="tel"
              class="
              w-full
              rounded-lg
              border
              outline-none
              px-3
              py-2.5
              pr-12
              text-xs
            "
              placeholder="Enter product price"
            >
          </div>
        </div>

        <div class="flex items-center space-x-16 pt-3">
          <button
            type="button"
            class="
            w-full
            inline-block
            rounded-lg
            bg-gray-300
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
           "
            @click="hideProductModal"
          >
            Cancel
          </button>

          <button
            v-if="!isEdit"
            :disabled="processing || !isFormValid"
            type="submit"
            :class="[processing || !isFormValid ? 'cursor-not-allowed opacity-20' : '']"
            class="
          w-full
          inline-block
          rounded-lg
          bg-black
          px-5
          py-2.5
          text-sm
          font-medium
          text-white
        "
          >
            {{ processing ? "processing..." : "Proceed" }}
          </button>

          <button
            v-if="isEdit"
            :disabled="processing || !isFormValid"
            type="submit"
            :class="[processing || !isFormValid ? 'cursor-not-allowed opacity-20' : '']"
            class="
        w-full
        inline-block
        rounded-lg
        bg-black
        px-5
        py-2.5
        text-sm
        font-medium
        text-white
      "
          >
            {{ processing ? "processing..." : "Save Edit" }}
          </button>
        </div>
      </form>
    </b-modal>
  </section>
</template>

<script>
import swal from 'sweetalert2/dist/sweetalert2.js'
export default {
  layout: 'dashboardLayout',
  scrollToTop: true,
  data () {
    return {
      uploadingFile: false,
      currentPage: 1,
      perPage: 7,
      search: '',
      totalRows: 1,
      processing: false,
      uploadingProfile: false,
      profilePreview: '',
      showClaimModal: false,
      loading: true,
      selectedProduct: {},
      processingDelete: false,
      isEdit: false,
      editId: '',
      productList: [],
      fields: [
        // {
        //   key: 'sn',
        //   label: 'S/N',
        //   class: 'text-xs'
        // },
        {
          key: 'product',
          label: 'Product',
          class: 'text-xs'
        },
        {
          key: 'description',
          label: 'Description',
          class: 'text-xs'
        },
        {
          key: 'publication_status',
          label: 'Publication status',
          class: 'text-xs'
        },
        {
          key: 'price',
          label: 'Price',
          class: 'text-xs'
        },
        {
          key: 'number_in_stock',
          label: 'Number In Stock',
          class: 'text-xs'
        },
        {
          key: 'date_added',
          label: 'Date Added',
          class: 'text-xs'
        },
        {
          key: 'actions',
          label: 'Actions',
          class: 'text-end text-xs'
        }
      ],
      form: {
        productName: '',
        productDescription: '',
        numberInStock: '',
        price: '',
        productImage: '',
        isPublished: ''
      }
    }
  },
  computed: {
    isFormValid () {
      return !!(this.form.productName && this.form.productDescription && this.form.numberInStock && this.form.price && this.form.productImage && this.form.isPublished)
    },

    filteredProducts () {
      return this.productList.filter((product) => {
        const search = this.search?.toLowerCase?.()
        return (
          product?.productName?.toLowerCase?.().includes(search) ||
          product?.productDescription?.toLowerCase?.().includes(search)
        )
      })
    }
  },
  mounted () {
    this.loadProducts()
  },
  methods: {
    openAddProductModal () {
      this.$bvModal.show('addProduct')
      this.form.productName = null
      this.form.productDescription = null
      this.form.numberInStock = null
      this.form.price = null
      this.form.isPublished = null
      this.form.productImage = null
      this.profilePreview = null
    },
    hideProductModal () {
      console.log('ypu cliecked')
      this.$bvModal.hide('addProduct')
      if (this.isEdit) {
        this.isEdit = !this.isEdit
      }
      this.form.productName = null
      this.form.productDescription = null
      this.form.numberInStock = null
      this.form.price = null
      this.form.isPublished = null
      this.form.productImage = null
      this.profilePreview = null
    },
    handleEdit (product) {
      console.log(product)
      this.$bvModal.show('addProduct')
      this.editId = product.id
      this.isEdit = true
      this.form.productName = product.productName
      this.form.productDescription = product.productDescription
      this.form.numberInStock = product.numberInStock
      this.form.isPublished = product.isPublished
      this.form.price = product.productPrice
      this.form.productImage = product.imageUrl
      this.profilePreview = product.imageUrl
    },
    saveProduct () {
      this.processing = true

      const token = this.$store?.state?.app.auth?.accessToken || ''
      const defaultOptions = {
        headers: {
          Authorization: token ? `JWT ${token}` : ''
        }
      }

      const formData = new FormData()
      formData.append('productImage', this.form.productImage)
      formData.append('productName', this.form.productName)
      formData.append('productDescription', this.form.productDescription)
      formData.append('productPrice', this.form.price)
      formData.append('numberInStock', this.form.numberInStock)
      formData.append('isPublished', this.form.isPublished)

      if (this.isEdit) {
        return this.$axios.put(`/product/${this.editId}`, formData, defaultOptions).then((res) => {
          this.$bvModal.hide('addProduct')
          this.loadProducts()
        }).catch((error) => {
          console.log(error)
        }).finally(() => {
          this.processing = false
        })
      }

      this.$axios.post('/product', formData, defaultOptions).then((res) => {
        console.log(res)
        this.$bvModal.hide('addProduct')
        this.loadProducts()
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        this.processing = false
      })
    },
    handleProfileUpload (e) {
      const selectedProfile = e.target.files[0]
      this.form.productImage = selectedProfile
      this.profilePreview = URL.createObjectURL(selectedProfile)
    },
    handleImagePreview (value) {
      this.$zoom(value, {
        allowZoom: true,
        autoScale: true,
        closeOnClickModal: false
      })
    },
    viewProductDetails (product) {
      this.selectedProduct = product
      this.showClaimModal = !this.showClaimModal
    },
    async loadProducts () {
      this.loading = true
      try {
        const token = this.$store?.state?.app.auth?.accessToken || ''
        const defaultOptions = {
          headers: {
            Authorization: token ? `JWT ${token}` : ''
          }
        }

        const currentStoreData = this.$store.state.app.products

        const response = await this.$axios.get('/product', defaultOptions)
        this.productList = response.data

        if (currentStoreData.length === this.productList.length && this.productList.every((value, index) => value === currentStoreData[index])) {
          this.productList = this.$store.state.app.products
          this.totalRows = this.$store.state.app.products.length
        } else {
          this.productList = response.data
          this.$store.commit('app/setProducts', response.data)
          this.totalRows = response.data.length
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    handleDelete (product) {
      const token = this.$store?.state?.app.auth?.accessToken || ''
        const defaultOptions = {
          headers: {
            Authorization: token ? `JWT ${token}` : ''
          }
        }
      swal.fire({
        title: 'Please Confirm',
        text: `Are you sure you want to remove ${product.productName}?`,
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete!',
        preConfirm: () => {
          return this.$axios
            .delete(`/product/${product.id}`, defaultOptions)
            .catch((error) => {
              const msg =
                error.response && error.response.data
                  ? error.response.data.message
                  : 'An error occurred, please try again.'
              swal().showValidationMessage(msg)
            })
        },
        allowOutsideClick: () => !swal.isLoading()
      }).then((res) => {
        if (res.value) {
          swal.fire(
            {
              title: 'Success!',
              text: `${product.productName} was successfully removed.`,
              icon: 'success',
              showCloseButton: true
            })
          this.loadProducts()
        }
      })
    }
  }
}
</script>

<style scoped>
.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
}

.fade-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.fade-leave-to {
  transform: scale(0.8);
}

.background {
  background-image: url('@/assets/img/analytics.jpg');
  background-size: cover;
}
</style>
