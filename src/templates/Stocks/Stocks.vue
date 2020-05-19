<template>
  <div>
    <div class="row">
      <app-stock :key="stock.id" :stock="stock" v-for="stock in stocks"></app-stock>
    </div>
  </div>
</template>
<script src="./Stocks.js"></script>
