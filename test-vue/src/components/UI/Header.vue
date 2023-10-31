<template>
  <header class="header">
    <nav>
      <router-link to="/">Дом</router-link>
      <router-link to="/test">Вторая страница (пустая :( )</router-link>
    </nav>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
  height: 4rem;
  padding: 2rem;
}

nav {
  a {
    color: #000;
    font-size: 2rem;
    text-decoration: none;
    cursor: pointer;
    transition: color .2s ease;
    &:hover {
      color: #dddd;
    }
  }
  display: flex;
  gap: 2rem
}
</style>