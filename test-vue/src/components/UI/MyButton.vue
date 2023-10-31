<template>
  <button class="btn" >
   <slot />
  </button>
</template>

<script setup>

</script>

<style scoped>
.btn {
  padding: 1rem 3rem;
  color: #fff;
  font-size: 2rem;
  line-height: 1.5;
  text-transform: uppercase;
  background-color: #000;
  border: 1px solid greenyellow;
  border-radius: 1rem;
  cursor: pointer;
}
</style>