<template>
  <div id="app">
    <header>
      <div class="main-header">
        <div class="header-container">
          <the-top-navbar></the-top-navbar>
        </div>
      </div>
      <div class="container">
        <the-local-navbar
          @changeCategory="getProducts"
          :productsLength="!isLoading ? products.length : ''"
        ></the-local-navbar>
      </div>
    </header>
    <main class="container">
      <div v-if="isLoading" class="spinner">
        <spinner></spinner>
      </div>
      <div class="bottom-margin">
        <div class="products-container">
          <template v-for="product in products" :template-key="`mainKey${product.id}`">
            <template v-if="!product.wider">
              <the-narrow-product
                :key="`item1Key${product.id}`"
                :brand="product.brand"
                :name="product.name"
                :label="product.labels"
                :image="product.image"
              ></the-narrow-product>
            </template>
            <template v-else>
              <the-wide-product
                :key="`item2Key${product.id}`"
                :brand="product.brand"
                :name="product.name"
                :label="product.labels"
                :image="product.image"
              ></the-wide-product>
            </template>
          </template>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TheLocalNavbar from './components/TheLocalNavbar.vue';
import TheTopNavbar from './components/TheTopNavbar.vue';
import TheNarrowProduct from './components/TheNarrowProduct.vue';
import TheWideProduct from './components/TheWideProduct.vue';
import ApiService from '@/api';
import Spinner from '@/assets/loaders/Spinner';
export default {
  components: { TheTopNavbar, TheLocalNavbar, Spinner, TheNarrowProduct, TheWideProduct },
  name: 'App',
  data() {
    return {
      isLoading: false,
      products: []
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts(id = '1001') {
      try {
        this.isLoading = true;
        const { data, status } = await ApiService.getProducts(id);
        if (status === 200) {
          this.isLoading = false;
          this.products = data.map((item, index) => {
            const id = index + 1;
            if (Number.isInteger(id / 3)) {
              return { ...item, wider: true };
            }
            return { ...item, wider: false };
          });
          console.log('this.products', this.products);
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/base.scss';
#app {
  font-family: $base-font;
  background-color: $backround-color;
  height: 100vh;
}
.container {
  max-width: $max-width;
  padding: 0 0.625rem 0 0.625rem;
  margin: auto;
}
.main-header {
  background-color: $header-color;
  height: 3.75rem;
  width: 100%;
  display: flex;
}
.header-container {
  max-width: $max-width;
  padding: 0 0.625rem 0 0.625rem;
  margin: auto;
  width: 100%;
}
.spinner {
  text-align: center;
  margin: 4rem 0 4rem;
}
.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: unset;
}

.products-container :nth-child(6) {
  order: 4;
}
.products-container :nth-child(4) {
  order: 6;
}
.products-container :nth-child(5) {
  order: 5;
}
.products-container :nth-child(9) {
  order: 7;
}
.products-container :nth-child(7) {
  order: 9;
}
.products-container :nth-child(8) {
  order: 8;
}
.bottom-margin {
  padding-bottom: 10rem;
}
</style>
