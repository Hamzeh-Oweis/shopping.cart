<template>
    <div class="d-flex flex-row justify-content-around">
        <div class="d-flex flex-column mx-auto">
            <div class="mt-3">
                <b-card v-if="product?.id" :title="product.name[locale]" img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image" img-top style="max-width: 65rem;" class="mb-2">
                    <b-card-text>
                        {{ product.fullDescription[locale] }}
                    </b-card-text>

                    <b-button :disabled="checkIfProductInCart(product)" variant="primary"
                        @click="(event) => addToCart(event, product)">
                        {{ $t('add-to-cart') }}
                    </b-button>
                </b-card>
            </div>
        </div>
    </div>
</template>
  
<script>
import Vue from "vue";

export default Vue.extend({
    name: "ProductView",
    components: {

    },
    data() {
        return {
            product: null
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
    mounted() {
        this.product = this.$route.params ?? false

        if (!this.product.id) {
            this.$router.push({ path: '/' })
        }
    },
    methods: {
        addToCart(event, product) {
            this.$store.commit('addProduct', product)
        },
        checkIfProductInCart(product) {
            return this.cartProductsIds.includes(product.id)
        }
    }
});
</script>
  