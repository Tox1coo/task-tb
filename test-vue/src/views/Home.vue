<template>
  <Modal v-if="showModal" v-model:show="showModal" @show-fields="getFields"/>
  <main class="main">

    <div class="center">
      <MyButton @click="showModal=true">
        Открыть
      </MyButton>
      <div v-if="fields" class="fields">
        <li v-for="field in fields" :key="field.name">
          <span>{{field.label}}: {{field.value}}</span>
        </li>
      </div>
    </div>
  </main>
</template>

<script setup>
import {ref} from "vue";
import Modal from "../components/UI/Modal.vue";
import MyButton from "../components/UI/MyButton.vue";

let showModal = ref(false);
let fields =ref(null);
const getFields = (fieldsInputs) => fields.value = fieldsInputs;
</script>

<style scoped>

</style>