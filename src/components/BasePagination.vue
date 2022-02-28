<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a :class="page === 1 ? 'pagination__link--disabled' : ''"
         class="pagination__link pagination__link--arrow"
         @click.prevent="paginate(page - 1)"
         aria-label="Предыдущая страница">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li v-for="pageNumber in pages" :key="pageNumber" class="pagination__item">
      <a class="pagination__link"
         href="#"
         @click.prevent="paginate(pageNumber)"
         :class="{'pagination__link--current': pageNumber === page}">
        {{ pageNumber }}
      </a>
    </li>
    <li class="pagination__item">
      <a :class="page === pages ? 'pagination__link--disabled' : ''"
        class="pagination__link pagination__link--arrow" href="#"
         @click.prevent="paginate(page + 1)"
         aria-label="Следующая страница">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },
  name: 'BasePagination',
  props: ['page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },
  },
};
</script>
