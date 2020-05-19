<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <Progressbar :progress="(quotes.length / 10)*100">{{quotes.length+'/10'}}</Progressbar>        
      </div>
      <div class="col-sm-6 m-auto">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Quotes</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" v-model="quote" rows="3"></textarea>
          <button type="button" @click="submitQuote" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-sm-4"
        v-for="(quote, index) in quotes"
        @click="deleteQuote(index)"
        :key="index"
      >
        <Card>
            <blockquote class="blockquote">
              <p class="mb-0" >{{quote}}</p>
            </blockquote>
        </Card>
      </div>
    </div>
  </div>
</template>
<script src="./Quotes.js"></script>