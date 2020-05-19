<template>
  <component 
    :is="htmlTag"  
    :class="textClass"
    :for="tagFor">
    <slot></slot>
  </component>
</template>
<script src="./text.js"></script>