<template>
  <v-autocomplete prepend-inner-icon="mdi-magnify" :label="labelText" :items="itemList" variant="solo"
    v-model="searchParam" @update:model-value="onSearchParam" clearable density="default"
    no-data-text="No se encontraron resultados" class="mb-5 mt-4 autocomplete">
  </v-autocomplete>
</template>

<script>
import { computed, ref } from "vue";

export default {
  name: "SearchBar",
  props: {
    productList: { Array, required: true, default: [] },
    labelText: { String, required: true, default: "Buscar" }
  },
  emits: ['onSearchParam'],

  setup(props, { emit }) {
    const searchParam = ref(null);

    const onSearchParam = () => {
      emit('onSearchParam', searchParam.value);
    }

    const itemList = computed(() => {
      return props.productList.map((item) => item.name);
    });


    return {
      itemList,
      searchParam,
      onSearchParam
    };
  },
};
</script>

<style>
/* [type="text"]:focus {
  --tw-ring-color: transparent !important;
  border-color: none;
} */

*,
::before,
::after {
  --tw-ring-color: transparent !important;
}
</style>
