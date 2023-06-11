<template>
  <b-navbar toggleable="lg" class="navbar navbar-light" style="background-color: #e3f2fd;">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/">Home</router-link> 
        </b-nav-item>
        <b-nav-item>
          <router-link to="/about">About</router-link>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">AR</b-dropdown-item>
        </b-nav-item-dropdown>
        
        <b-nav-item class="ml-2">
          <router-link to="/cart">
            <!-- <i class="bi bi-cart-fill"></i> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
          </router-link> 
        </b-nav-item>
      
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
  
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  components: {

  },
});
</script>
  