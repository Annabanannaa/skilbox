import BaseFormField from '../components/BaseFormField.vue';

export default {
  name: 'BaseFormTextarea',
  props: ['title', 'error', 'placeholder'],
  components: { BaseFormField },
  computed: {
    dataValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
