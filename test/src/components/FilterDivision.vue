<template>
    <div>
        <h1>Filter by division</h1>
        <p v-for="(items, index) in items" :key="index">{{items}}</p>
    </div>
</template>

<script>

import bd-divisions from './json/bd-divisions.json' 

export default {
    name: "DivisionFilter",
    data(){
        return {
            items: bd-divisions
        }
    }
}
</script>

<style scoped>

</style>