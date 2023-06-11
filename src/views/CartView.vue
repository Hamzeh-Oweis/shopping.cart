<template>
    <div class="d-flex flex-column">
        <div class="d-flex flex-row justify-content-start mt-5 mx-5">
            <div>
                <h1> {{ $t('your-cart') }} </h1>
            </div>
        </div>
        <div 
            v-if="cartProducts.length > 0"
            class="d-flex flex-row mt-5 mx-5 flex-wrap jsutify-content-start"
        >
            <div 
                v-for="(product, index) in cartProducts"
                :key="product.id"
                class="mx-3 mb-5"
            >
                <b-card
                    :title="product.name"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    style="width: 20rem;"
                    class="mb-2"
                >   
                    <b-card-text>
                        {{ product.description }}
                    </b-card-text>
                    <b-button 
                        variant="primary"
                        @click="(event) => removeFromCart(event, product)"
                    >
                        {{ $t('remove') }}
                    </b-button>
                </b-card>
            </div>
        </div>
        <div 
            v-else
            class="d-flex flex-row mt-5 mx-5 jsutify-content-around mt-5"
        >
            <h2 class="mx-auto" style="color: grey; margin-top: 100px;">
                {{ $t('your-cart-is-empty') }}
            </h2>
        </div>
    </div>
</template>
  
<script>
import Vue from "vue";

export default Vue.extend({
    name: "CartView",
    components: {

    },
    data() {
        return {

        }
    },
    computed: {
        cartProducts() {
            console.log(this.$store.state.cart.products);
            return this.$store.state.cart.products;
        }
    },
    methods: {
        removeFromCart(event, product) {
            this.$store.commit('removeProduct', product)
        }
    }
});
</script>
  