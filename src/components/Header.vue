<template>
    <v-app-bar app dark color="primary" class="sidebar">

            <v-icon aria-hidden="false">
                mdi-account
              </v-icon>
            
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>

</template>

<script>

</script>

<style lang="scss">
#app .v-main .v-container .sidebar{
    width: auto !important;
    height: 100%;
}
.v-overlay {
    &__content {
        align-items: center;
    }
}

* {
    padding: 0;
    margin: 0
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
