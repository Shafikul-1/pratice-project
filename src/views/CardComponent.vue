<script setup>
import CardComponent from '../components/CardComponent.vue';

const cardDetails = {
        detalis: ['Fast Man Detalis', 'Second Man Details', 'Thred Man Details', 'Four Man Details'],
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80',
        heading: {
            headingOne : 'explore our',
            headingTwo: 'awesome Components'
        },
        fastHeading: 'Copy & paste components',
        fastParagrape: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet',
        secondHeading: 'Zero Configrations',
        secondParagrape: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet',
        thredHeading: 'elegant Dark Mode',
        thredParagrape: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet',
        logo: {
            logoFast: String,
            logoSecond: String,
            logoThred: String,
            logoFour: String,
            logoFive: String
        }
}
</script>
<template>
    <div>
        <CardComponent v-bind="cardDetails" />
    </div>
</template>


<style scoped>

</style>