<template>
  <router-link :to="{name: 'cart'}" class="header__cart" aria-label="Корзина с товарами">
    <svg width="30" height="21" fill="currentColor">
      <use xlink:href="#icon-cart"></use>
    </svg>
    <span class="header__count" aria-label="Количество товаров">
      {{ $store.state.cardProducts.length }}
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'CartIndicator',
};
</script>

<style scoped>

</style>
