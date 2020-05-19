<template>
  <div class="progress">
    <div
      class="progress-bar"
      :class="progressBarClass"
      role="progressbar"
      :style="'width:'+progress+'%'"
      :aria-valuenow="progress"
      aria-valuemin="0"
      aria-valuemax="100"
    >
    <slot></slot>
    </div>
  </div>
</template>
<script src="./Progress.js"></script>