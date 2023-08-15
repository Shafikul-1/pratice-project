<script setup>
 import About from '../components/About.vue';
const person = {
  title: 'Maliha Welch',
  titls: 'Trendy Pants and Shoes',
  descripiton: 'Trendy Pants and Shoes',
  image: 'Trendy Pants and Shoes',
  image: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg'
}
const person1 = {
  title: 'Maliha Welch',
  titls: 'Trendy Pants and Shoes',
  descripiton: 'Trendy Pants and Shoes',
  image: 'Trendy Pants and Shoes',
  image: 'https://mdbcdn.b-cdn.net/img/new/avatars/12.jpg'
}
</script>
<template>
  <div>
        <!-- Container for demo purpose -->
        <div class="container my-24 mx-auto md:px-6">
            <!-- Section: Design Block -->
            <section class="mb-32 text-center lg:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">
                Meet the <u class="text-primary dark:text-primary-400">team</u>
                </h2>

                <div class="grid gap-6 md:grid-cols-3 xl:gap-x-12">
                    <About :titls="person.titls" :title="person.title" :descripiton="person.descripiton" :image="person.image"/>
                    <About v-bind="person1"/>
                    <About titls="Trendy Pants and Shoes" title="Maliha Welch" descripiton="Web Developer" image="https://mdbcdn.b-cdn.net/img/new/avatars/4.jpg"/>
                </div>

                <div class="grid gap-6 md:grid-cols-3 xl:gap-x-12">
                    <About titls="Trendy Pants and Shoes" title="Maliha Welch" descripiton="Web designer" image="https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg"/>
                    <About titls="Avaya Hills" title="Avaya Hills" descripiton="Graphic Designer" image="https://mdbcdn.b-cdn.net/img/new/avatars/12.jpg"/>
                    <About titls="Trendy Pants and Shoes" title="Maliha Welch" descripiton="Web Developer" image="https://mdbcdn.b-cdn.net/img/new/avatars/4.jpg"/>
                </div>


                <div class="grid gap-6 md:grid-cols-3 xl:gap-x-12">
                    <About titls="Trendy Pants and Shoes" title="Maliha Welch" descripiton="Web designer" image="https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg"/>
                    <About titls="Avaya Hills" title="Avaya Hills" descripiton="Graphic Designer" image="https://mdbcdn.b-cdn.net/img/new/avatars/12.jpg"/>
                    <About titls="Trendy Pants and Shoes" title="Maliha Welch" descripiton="Web Developer" image="https://mdbcdn.b-cdn.net/img/new/avatars/4.jpg"/>
                </div>
            </section>
            <!-- Section: Design Block -->
        </div>
    <!-- Container for demo purpose -->
    </div>
</template>

<style>

</style>
