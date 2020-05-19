<template>
  <div class="col-sm-4 stock-item">
    <Card 
        :heading="stock.name" 
        :btn="{btnClass :'btn-success', 
              click:sellStock,
              disabled: insufficientQuantity || quantity <= 0,
              text: insufficientQuantity ? 'Not enough stock' : 'Sell'}">
        <Formgroup 
          :labelAs="'h6'"
           @inputVal="getInput"
           :contentClass="'card-subtitle mb-2 text-muted'"
          :Textbox="textbox">
            Price: {{stock.price | currency}} | Quatity {{stock.quantity}}
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
