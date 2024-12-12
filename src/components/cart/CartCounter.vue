<template>
    <v-btn v-if="(productCard.quantity === 0)" rounded="pill" class="text-gray px-10" icon="mdi-plus" variant="outlined"
        @click="plusValue(productCard)" density="compact">
    </v-btn>
    <v-chip v-else class=" text-gray mr-0 px-1">
        <v-btn v-if="productCard.quantity === 1" @click.stop="deleteValue(productCard)" variant="flat" icon="mdi-delete"
            width="25" height="25" :ripple="false" class="text-gray-dark active:text-red-500 jump text-xs">
        </v-btn>
        <v-btn v-else @click.stop="minusValue(productCard)" variant="flat" icon="mdi-minus" width="25" height="25"
            :ripple="false" class="text-gray-600 active:text-red-500 jump text-xs">
        </v-btn>
        <p class="mx-2">{{ productCard.quantity }}</p>
        <v-btn @click.stop="plusValue(productCard)" variant="flat" icon="mdi-plus" width="25" height="25"
            :ripple="false" class="text-gray-600 active:text-green-700 jump text-xs ml-0" :disabled="productCard.quantity >= maxQuantity">
        </v-btn>
    </v-chip>

</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: "CartCounter",
    props: {
        productCard: ref([]),
          maxQuantity: {
            type: Number,
             default: 20
            }
    },
    setup() {
        const store = useStore();

        const minusValue = (product) => {
            store.dispatch("subtractProductToCart", product);
        };

        const plusValue = (product) => {
            store.dispatch("addProductToCart", product);
        };

        const deleteValue = (product) => {
            store.dispatch("deleteProductToCart", product);
        };

        return {
            minusValue,
            plusValue,
            deleteValue,
        }
    }
}
</script>
