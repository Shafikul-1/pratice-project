<script setup>
defineProps(['sobDetails'])

</script>

<template>
            <div class="container px-6 py-10 mx-auto">
                <div class="lg:flex lg:items-center">
                    <div class="w-full space-y-12 lg:w-1/2 ">
                        <div>
                            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">{{ sobDetails.heading.headingOne }} <br> {{ sobDetails.heading.headingTwo }}</h1>
                        
                            <div class="mt-2">
                                <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                                <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                                <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                            </div>
                        </div>

                        <div class="md:flex md:items-start md:-mx-4" v-for="(other, index) in sobDetails.others" :key="index">
                            <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500" v-html="other.icon"> </span>

                            <div class="mt-4 md:mx-4 md:mt-0">
                                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{{ other.Heading }}</h1>
                                <p class="mt-3 text-gray-500 dark:text-gray-300">{{ other.Paragrape }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                        <img class="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" :src="sobDetails.image" alt="">
                    </div>
                </div>
                <hr class="border-gray-200 my-12 dark:border-gray-700">
            </div>
</template>

<style scoped>

</style>