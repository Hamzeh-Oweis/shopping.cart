<template>
  <!-- <div class="d-flex flex-row justify-content-around"> -->
    <!-- <div class="d-flex flex-column"> -->
      <div class="d-flex flex-row justify-content-start flex-wrap m-5">
        <div 
          v-for="(product, index) in products" 
          :key="product.id" 
          class="mx-3"
        >
          <b-card
            :title="product.name[locale]"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            style="max-width: 20rem;"
            class="mb-3"
          >
            <b-card-text>
              {{ product.description[locale] }}
            </b-card-text>
            <div class="d-flex flex-column">
              <b-button 
                variant="outline-primary"
                class="mb-1"
                @click="(event) => viewProduct(event, product)"
              > 
                {{ $t('details') }} 
              </b-button>
              <b-button 
                :disabled="checkIfProductInCart(product)"
                variant="primary"
                @click="(event) => addToCart(event, product)"
              > 
                {{ $t('add-to-cart') }} 
              </b-button>
            </div>
          </b-card>
        </div>
      </div>
    <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import Vue from "vue";
import productJson from '../products.json'

export default Vue.extend({
  name: "HomeView",
  components: {
    
  },
  data() {
    return {
      products: productJson,
    }
  },
  computed: {
    cartProductsIds() {
      return this.$store.state.cart.products.map(product => product.id)
    },
    locale() {
      return this.$store.state.locale
    }
  },
  methods: {
    viewProduct(event, product) {
      this.$router.push({ name: 'ProductView', params: product })

    },
    addToCart(event, product) {
      this.$store.commit('addProduct', product )
    },
    checkIfProductInCart(product) {
      return this.cartProductsIds.includes(product.id)
    }
  }
});
</script>
