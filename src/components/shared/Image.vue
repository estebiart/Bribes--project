<template>
    <v-img class="rounded-[8px] bg-gray-200" :aspect-ratio="1 / 1" :width="width" :height="height" :src="src" cover>
        <template v-slot:placeholder>
            <div class="p-2 opacity-50 aspect-square">
                <img src="@/assets/dairy-products.png" class="cover" :alt="`${alt} image`" />
            </div>
        </template>
    </v-img>
</template>
<script>
export default {
    name: "Image",
    props: {
        alt: {
            require: true,
            type: String,
            default: "Image alt"
        },
        src: {
            require: true,
            type: String,
            default: "/"
        },
        width: {
            type: Number,
        },
        height: {
            type: Number,
        }
    }
}
</script>
