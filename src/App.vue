<script setup>
import { RouterLink, RouterView } from 'vue-router'
const bold = 'font-bold'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink class="font-bold mx-3" to="/">Home</RouterLink>
        <RouterLink class="font-bold mx-3" to="/about">About</RouterLink>
        <RouterLink class="font-bold mx-3" to="/note">Note</RouterLink>
        <RouterLink class="font-bold mx-3" to="/check">CheckBox</RouterLink>
        <RouterLink class="font-bold mx-3" to="/card">Card</RouterLink>
        <RouterLink class="font-bold mx-3" to="/card-component">Card Component</RouterLink>
        <RouterLink class="font-bold mx-3" to="/post">Post</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
