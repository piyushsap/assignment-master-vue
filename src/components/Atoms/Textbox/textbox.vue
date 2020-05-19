<template>
  <textarea v-if="type=='textarea'"
    :class="textboxClass"
    :type="type"
    class="form-control"
    :placeholder="placeholder"
    :name="name ? name : id"
    :id="id ? id : name"
    :readonly="readonly"
    :disabled="disabled"
    @input="handleInput($event.target.value)"
    :value="value"
  >
  </textarea>
  <input v-else
    :class="textboxClass"
    :type="type"
    class="form-control"
    :placeholder="placeholder"
    :name="name ? name : id"
    :id="id ? id : name"
    :readonly="readonly"
    :disabled="disabled"
    @input="handleInput($event.target.value)"
    :value="value"
  />
</template>
<script src="./textbox.js"></script>