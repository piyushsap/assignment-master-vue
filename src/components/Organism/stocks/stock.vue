<template>
  <div class="col-sm-4 stock-item">
    <Card 
        :heading="stock.name" 
        :btn="{btnClass :'btn-success', 
              click:buyStock,
              disabled: insufficientFunds || quantity <= 0,
              text: insufficientFunds ? 'Insufficient Funds' : 'Buy'}">
        <Formgroup 
          :labelAs="'h6'"
           @inputVal="getInput"
           :contentClass="'card-subtitle mb-2 text-muted'"
          :Textbox="textbox">
            Price1: {{stock.price | currency}}
        </Formgroup>
    </Card>
  </div>
</template>
<script src="./stock.js"></script>
<style scoped>
.stock-item{
    margin-bottom: 25px;
}
</style>
