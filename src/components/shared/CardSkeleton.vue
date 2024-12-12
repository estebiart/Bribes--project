<template>
    <v-card>
        <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-4">
                <div class="h-32 w-full bg-slate-100 rounded"></div>
                <div class="space-y-3 py-2 pb-4 px-2">
                    <div class="h-3 max-w-[140px] bg-slate-100 rounded"></div>
                    <div class="h-3 max-w-[80px] bg-slate-100 rounded"></div>
                    <div class="h-7 w-24 mx-auto bg-slate-100 rounded-3xl"></div>
                </div>
            </div>
        </div>
    </v-card>


</template>
<script>
export default {
    name: 'CardSkeleton'
}
</script>
