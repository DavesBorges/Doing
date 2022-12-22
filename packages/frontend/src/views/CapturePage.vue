<template>
    <h2>Capture</h2>
    <div v-if="isLoading">
        Loading...
    </div>
    <div v-if="isError">
        Error...
    </div>
    <ul v-if="items">
        <li v-for="item of items" :key="item.description">
            {{ item.description }} 
        </li>
    </ul>
</template>
<script setup lang="ts">
    import { useQuery } from '@tanstack/vue-query';
import { getAllItems } from '../data/ItemsData';

    const {data: items, isLoading, isError} =  useQuery({queryKey: ['items'], queryFn: getAllItems})

   

</script>