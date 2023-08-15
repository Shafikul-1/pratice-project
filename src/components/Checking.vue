
<script setup>
// defineProps(['label','show', 'check'])
defineProps({
        title : String,
        country : Array
})
</script>
<template>
    <div>
        <div class="flex items-center mb-4">
            <input id="country-option-1" type="radio" name="" :value="title" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" >
            <label for="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">{{ title }}</label>
        </div>


        <div class="flex items-center mb-4">
                <input id="country-option-2" type="radio" name="" value="Germany" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2" checked>
                <label for="country-option-2" class="text-sm font-medium text-gray-900 ml-2 block">
                Germany
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="country-option-3" type="radio" name="" value="Spain" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-3" aria-describedby="country-option-3" checked>
                <label for="country-option-3" class="text-sm font-medium text-gray-900 ml-2 block">
                Spain
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="country-option-4" type="radio" name="" value="United Kingdom" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-4" aria-describedby="country-option-4">
                <label for="country-option-4" class="text-sm font-medium text-gray-900 ml-2 block">
                United Kingdom
                </label>
            </div>

            <div class="flex items-center">
                <input id="option-disabled" type="radio" name="" value="China" class="h-4 w-4 border-gray-200 focus:ring-2 focus:ring-blue-300" aria-labelledby="option-disabled" aria-describedby="option-disabled" disabled="">
                <label for="option-disabled" class="text-sm font-medium text-gray-400 ml-2 block">
                China (disabled)
                </label>
            </div>
    </div>
</template>


<style scoped>

</style>