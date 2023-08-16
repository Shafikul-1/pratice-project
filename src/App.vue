<script setup>
import { RouterLink, RouterView } from 'vue-router'
const bold = 'font-bold'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="my-3">
        <RouterLink class="font-bold mx-3" to="/">Home</RouterLink>
        <RouterLink class="font-bold mx-3" to="/about">About</RouterLink>
        <RouterLink class="font-bold mx-3" to="/note">Note</RouterLink>
        <RouterLink class="font-bold mx-3" to="/check">CheckBox</RouterLink>
        <RouterLink class="font-bold mx-3" to="/card">Card</RouterLink>
        <RouterLink class="font-bold mx-3" to="/card-component">Card Component</RouterLink>
        <RouterLink class="font-bold mx-3" to="/post">Post</RouterLink>
        <RouterLink class="font-bold mx-3" to="/price">Price</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
