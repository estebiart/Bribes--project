<template>
    <v-list lines="two" class="px-2">
        <v-list-item rounded="xl" v-for="item in store.state.cartList" :key="item.id" :title="item.name"
            :subtitle="'$ ' + item.price" class="gap-x-2 border mb-4 px-3 list">
            <template v-slot:prepend>
                <!-- todo: Create global component for handle images -->
                <v-img class="rounded-[8px] bg-gray-200" :aspect-ratio="1 / 1" width="60" :src="item.image_url" contain>
                    <template v-slot:placeholder>
                        <div class="p-2 opacity-50 aspect-square">
                            <img src="" class="cover" :alt="`${item.name} image`">
                        </div>
                    </template>
                </v-img>
            </template>
            <template v-slot:append>
                <CartCounter :productCard="item" :maxQuantity="20" />
            </template>
        </v-list-item>
    </v-list>
</template>
<script>
import { useStore } from "vuex";
import CartCounter from './CartCounter.vue';

export default {
    name: "ItemCart",
    components: { CartCounter },
    setup() {
        const store = useStore();

        return {
            store
        };
    },
}
</script>

<style type="scss">
.v-list-item.list .v-list-item__append {
    align-self: center;
}
</style>