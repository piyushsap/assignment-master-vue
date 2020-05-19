<template>
  <component 
    :is="as"
    :class="listClass"
    >
    <slot></slot>
  </component>
</template>
<script src="./list.js"></script>