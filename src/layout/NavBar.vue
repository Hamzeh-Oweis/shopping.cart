<template>
  <b-navbar toggleable="lg" class="navbar navbar-light" style="background-color: #e3f2fd;">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <div class="d-flex flex-row justify-content-between w-100">
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/">{{ $t('home') }}</router-link> 
          </b-nav-item>
        </b-navbar-nav>
  
        <b-navbar-nav>
          
          <b-nav-item-dropdown :text="$t('lang')" bottom>
            <b-dropdown-item @click="(event)=>changeLang(event, 'en')">{{ $t('en') }}</b-dropdown-item>
            <b-dropdown-item @click="(event)=>changeLang(event, 'ar')">{{ $t('ar') }}</b-dropdown-item>
          </b-nav-item-dropdown>
          
          <b-nav-item class="ml-2">
            <router-link to="/cart" class="position-relative">
              <!-- <i class="bi bi-cart-fill"></i> -->
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              <div
                v-if="cartProductsCount"
                class="cart-products-count"
              >
                <div class="d-flex flex-row justify-content-around h-100">
                  <div class="d-flex flex-column justify-content-around">
                    {{ cartProductsCount }}
                  </div>
                </div>
              </div>
            </router-link> 
          </b-nav-item>
        
        </b-navbar-nav>
      </div>
    </b-collapse>
  </b-navbar>
</template>
  
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  components: {

  },
  computed: {
    cartProductsCount() {
      return this.$store.state.cart.products.length
    }
  },
  methods: {
    changeLang(event, locale) {
      this.$store.commit('changeLang', locale)
    }
  }
});
</script>
  
<style>

.cart-products-count {
  width: 1.075rem;
  height: 1.075rem;
  border-radius: 50px;
  background-color: red;
  position: absolute;
  color: white;
  top: -5px;
  right: -5px;
  font-size: 12px;
}

</style>