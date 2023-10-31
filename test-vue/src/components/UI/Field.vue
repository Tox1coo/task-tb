<template>
  <div class="field">
    <label :for="name">{{ label }}</label>
    <input :type="typeInput" :id="name" :name="name" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholderValue"/>
  </div>
</template>

<script setup>

defineProps({
  modelValue: {
    type: [Number, String],
    required:true
  },
  placeholderValue: {
    type: String,
    default: "Placeholder Text"
  },
  name: {
    type:String,
    required:true,
  },
  typeInput: {
    type: String,
    default: "text"
  },
  label: {
    type:String,
    required:true
  }
});

defineEmits(['update:modelValue'])

</script>

<style scoped>

</style>