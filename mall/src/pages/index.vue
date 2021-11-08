<template>
    <div>
        <service-bar></service-bar>
    </div>
</template>

<script>
// this page embed in router-view
import ServiceBar from './../components/ServiceBar.vue'

export default {
    name: 'index',

    components: {
        ServiceBar
    }
}
</script>

<style lang="scss">
    
</style>