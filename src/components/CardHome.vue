<template>
    <v-card class="mx-auto bg-white w-full" max-width="400">
        <v-img class="card-image h-24 md:h-32" :src="productCard.image_url" :alt="productCard.name" contain>
            <template v-slot:placeholder>
                <div class=" p-5 opacity-50 w-full h-full">
                    <img src="" class="h-full w-full object-contain"
                        :alt="`${productCard.name} image`">
                </div>
            </template>
        </v-img>

        <v-card-title class="pb-0 capitalize text-stone-600 text-sm">
            {{ productCard.name }}
        </v-card-title>

        <v-card-subtitle>
            {{ totalItemPrice(productCard.price ) }}
        </v-card-subtitle>

        <v-card-actions class="justify-center">
            <CartCounter :productCard="productCard" />
        </v-card-actions>
    </v-card>
</template>
<script>
import { ref } from 'vue';
import CartCounter from './cart/CartCounter.vue';
import { formatter } from "@/composables/helpers/formatter";

export default {
    name: "CardHome",
    components: { CartCounter },
    props: {
        productCard: ref([]),
    },
    setup() {
        const { formatCurrency } = formatter();
        return {
            totalItemPrice: formatCurrency

        }
    },
};
</script>
<style lang="css">
.card-image .v-img__img {
    padding: 10px;
}

.v-card-actions {
    padding: 1rem !important;
}
</style>
