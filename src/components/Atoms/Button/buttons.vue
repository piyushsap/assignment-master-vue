<template>
  <component 
    :is="htmlTag" 
    class="btn" 
    :class="btnClass"
    :type="href || type==='button' ? null : type"
    @click="$emit('click')"
    :href="href"
    :disabled="disabled ? false : disabled"
    >
    <slot></slot>
  </component>
</template>
<script src="./buttons.js"></script>