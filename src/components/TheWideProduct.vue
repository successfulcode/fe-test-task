<template>
  <div class="product3">
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
    <div class="product3-information">
      <div class="product3-brand">
        {{ brand }}
      </div>
      <div class="product3-description">
        {{ name }}
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'TheWideProduct',
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
.product3 {
  width: 45%;
  height: 440px;
  padding: 20px;
  // background-color: $product-background-color;
  margin: 1px;
  background: url('../assets/images/3.png');
  background-repeat: repeat-y;
  background-color: $product-background-color;
}
.product3-information {
  width: 182px;
  height: 48;
  margin-top: 160px;
  .product3-brand {
    color: $active-category-color;
    font-weight: bold;
    font-size: 16px;
  }
  .product3-description {
    color: $active-category-color;
    font-size: 16px;
    margin-bottom: 1px;
  }
}
</style>
