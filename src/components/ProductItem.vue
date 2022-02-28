<template>
  <li class="catalog__item">
    <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}">
      <img :src="product.image" alt="Название товара">
    </router-link>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price">{{ product.price | numberFormat }} ₽</span>

    <ul class="colors colors--black">
      <li v-for="(colorEl, index) in product.colors"
          :key="index" class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" :value="colorEl" v-model="color">
          <span class="colors__value" :style="`background-color: ${colorEl};`"></span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
import gotoPage from '../helpers/gotoPage';
import numberFormat from '../helpers/numberFormat';

export default {
  data() {
    return {
      color: '#73B6EA',
    };
  },
  name: 'ProductItem',
  filters: {
    numberFormat,
  },
  methods: {
    gotoPage,
  },
  props: ['product'],
};
</script>
