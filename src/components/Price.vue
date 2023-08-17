<script setup>
defineProps({
    pricing: Array, 
})
</script>
<template>
    <div class="pricing" v-for="(price, index) in pricing" :key="index">
        <div class="w-full max-w-sm p-4 mx-4 text-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{{ price.plan }}</h5>
            <div class="flex items-baseline text-gray-900 dark:text-white">
                <span class="text-gray-500 dark:text-gray-400  text-3xl font-semibold">{{ price.marker }}</span>
                <span class="text-5xl font-extrabold tracking-tight  dark:text-gray-400 text-gray-500">{{ price.price }}</span>
                <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/{{ price.day }}</span>
            </div>
            <ul role="list" class="space-y-5 my-7">
                <li class="flex space-x-3 items-center"  v-for="(details, index) in price.planDetails" :key="index" :class="index > 2 ? 'line-through decoration-gray-500': ''">
                    <span v-html="details.applicable"></span>
                    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{{ details.applicableDetails }}</span>
                </li>
            </ul>
            <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">{{ price.buttonText }}</button>
        </div>
    </div>
</template>

<style scoped>

</style>