 <template >
  <div class="barba-container" data-barba-namespace="home">
    <SearchBar :labelText="'Buscar Productos'" :productList="store.state.cartItems" @onSearchParam="handleFilters"  />
    <v-row>
      <template v-if="isLoading">
        <v-col class="px-1 py-2" cols="4" sm="4" md="2" v-for="item in 12">
          <CardSkeleton :key="item" />
        </v-col>
      </template>
      <template v-else>
        <v-col class="px-1 py-2" v-for="prod in filteredProducts" :key="prod.id" cols="6" sm="4" md="2">
          <CardHome :productCard="prod" />
        </v-col>
      </template>
    </v-row>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import SearchBar from '../components/SearchBar.vue';
import CardHome from '../components/CardHome.vue';

import CardSkeleton from '@/components/shared/CardSkeleton.vue';

export default {
  name: "Home",
  components: { SearchBar, CardHome, CardSkeleton },
  setup() {
    const store = useStore();

    const filteredProducts = ref([]);
    const isLoading = ref(true);



    const handleFilters = (val) => {
      const resp = store.state.cartItems.filter((product) => {
        if (product.name === val) {
          return product;
        }
        if (!val) {
          return product;
        }
      });
      filteredProducts.value = resp;
    };

    onMounted(() => {
      getProducts();
    });

    return {
      store,
      handleFilters,
      filteredProducts,
      getProducts,
      isLoading,
    };
  },
};
</script>
