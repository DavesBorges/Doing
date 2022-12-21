<template>
    <h2>Capture</h2>
    <ul>
        <li v-for="item of items" :key="item">
            {{ item }} <BButton @click="removeItem(item)">Remove</BButton>
        </li>
    </ul>
    <div>
    <input type="text" v-model="newItem"/>
    <BButton @click="handleSubmitNewItem"> Add new item </BButton>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';

    const items = ref<string[]>([])
    const newItem = ref<string>("")

    const handleSubmitNewItem = () => {
        console.log("Yeah", items.value)
        if(!newItem.value){
            return;
        }
        items.value?.push(newItem.value)
        newItem.value = ""
    }
    
    const removeItem = (itemToRemove: string) => {
        items.value = items.value.filter(item => item !== itemToRemove)
    }

</script>