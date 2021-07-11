<template>
  <div class="product">
    <span v-if="label[0] === 'new'">
      <span class="new-label">
        NEW
      </span>
    </span>
    <span v-if="label[0] === 'hot'">
      <span class="hot-label">
        HOT
      </span>
    </span>

    <div class="product-photo-container1">
      <!-- <img :src="`..${image}`" alt="product" /> -->
    </div>
    <div class="product-information">
      <div class="brand">
        {{ brand }}
      </div>
      <div class="description">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNarrowProduct',
  props: ['brand', 'name', 'label', 'image']
};
</script>

<style scoped lang="scss">
@import '@/assets/base.scss';
.new-label {
  color: $new-label-color;
  border: 1px solid $new-label-color;
  font-weight: bold;
  width: 26px;
  height: 12px;
  font-size: 12px;
  padding: 0 2px 0 2px;
}
.hot-label {
  color: $hot-label-color;
  border: 1px solid $hot-label-color;
  font-weight: bold;
  width: 26px;
  height: 12px;
  font-size: 12px;
  padding: 0 2px 0 2px;
}
.product {
  width: 23%;
  height: 100%;
  background-color: $product-background-color;
  margin: 1px;
  padding: 20px;
}
.product-photo-container1 {
  width: 100%;
  height: 312px;
  padding: 37px 0 37px 0;
  margin: auto;
  text-align: center;
  background: url('../assets/images/1.png');
  background-repeat: repeat-y;
}

.product-information {
  .brand {
    color: $active-category-color;
    font-weight: bold;
    font-size: 14px;
  }
  .description {
    color: $active-category-color;
    font-size: 14px;
    margin-bottom: 1px;
  }
}
</style>
