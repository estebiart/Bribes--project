<template>
  <v-app>
    <v-main>
      <v-container class="h-full">
        <router-view name="NavigationBar"></router-view>
        <router-view></router-view>
        <!-- <router-view v-slot="{ Component, route }">
          <keep-alive>
            <component :is="Component" :key="route.name" />
          </keep-alive>
        </router-view> -->
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import { useRoute } from "vue-router";
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
export default {
  name: "App",
  

  setup() {
    const route = useRoute();
    const container = ref(null);
    const content = ref(null);
    const  paraOne= ref(null);
    const  paraTwo = ref(null);

  onMounted(async() =>{
    console.log(paraTwo.value);
    const tl = gsap.timeline({ delay: 1, paused: true});
    tl.from(paraOne.value,{ x: -200, autoAlpha:0, duration: 1 });
    tl.from(paraTwo.value,{ x: -200, autoAlpha:0, duration: 1 });
    gsap.from(content.value,{
        delay:0.5,
        duration: 1,
        y: '+100',
        autoAlpha: 0,
        ease: "back.out(1.7)"
    })
})
    return {
      route,
    };
  },
};
</script>
