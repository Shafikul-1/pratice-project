
<script setup>
import checkingVue from '../components/Checking.vue';
const country = [
    {title: 'Bangladesh', complete: true},
    {title: 'Belarus', complete: true},
    {title: 'Azerbaijan', complete: false},
    {title: 'Ethiopia', complete: false},
    {title: 'Finland', complete: false},
    {title: 'Anguilla', complete: false},
    {title: 'Botswana', complete: false},
    {title: 'China', complete: false},
    {title: 'Denmark', complete: false},
]
</script>
<template>
    <div>
    <div class="max-w-lg mx-auto">
        
        <fieldset class="mb-5">
            <legend class="sr-only">
                Countries
            </legend>

           <checkingVue title="United State"/>
        </fieldset>
    </div>
    </div>
</template>

<style scoped>

</style>