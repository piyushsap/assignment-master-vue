<template>
  <div>
    <div class="row">
    <app-stock v-for="stock in stocks" :stock="stock" :key="stock.id"></app-stock>
    </div>
  </div>
</template>
<script src="./Portfolio.js"></script>
