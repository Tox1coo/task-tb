<template>
  <div @click.stop="hideModal" class="modal">
    <div @click.stop class="modal_wrapper">
      <h2 class="modal-title">Заголовок</h2>
      <form ref="form" @submit="submitForm" action="/" method="post" class="modal_form">
        <div class="modal-fields">
          <Field v-for="field in fields" :key="field.name"
                 :name="field.name"
                 v-model="field.value"
                 :label="field.label"
                 :placeholder-value="field.placeholder"
                 :type-input="field.type" />

        </div>
        <div class="modal_bottom">
          <MyButton @click="submitForm">
            Отправить
          </MyButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import Field from "./Field.vue";
import MyButton from "./MyButton.vue";

defineProps({
  show: {
    type: Boolean,
    required:true
  }
})

const fields = reactive([
  {
    name: 'name',
    placeholder: "Enter Name",
    value: '',
    type: 'text',
    label: "Имя"
  },
  {
    name: 'surname',
    placeholder: "Enter surname",
    value: '',
    type: 'text',
    label: "Фамилия"
  },
  {
    name: 'email',
    placeholder: "Enter email",
    value: '',
    type: 'email',
    label: "Email"
  },
  {
    name: 'report',
    placeholder: "Enter report",
    value: '',
    type: 'text',
    label: "Ошибка"
  },
  {
    name: 'message',
    placeholder: "Enter message",
    value: '',
    type: 'text',
    label: "Сообщение"
  },
])
const emits = defineEmits(['update:show', 'showFields']);
const form = ref(null);
const hideModal = () => {
  emits('update:show', false);
}

const submitForm = (event) => {
  event.preventDefault();
  emits('showFields', fields);
  form.value.reset();
  hideModal();
}





</script>

<style scoped>

</style>