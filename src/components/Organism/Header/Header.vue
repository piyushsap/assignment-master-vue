<template>
  <div>
    <nav aria-label="breadcrumb">      
      <Navigation :navitems="breadcrumb" :navClass="'breadcrumb'"></Navigation>
    </nav>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-bottom:30px;">
        <router-link to="/stock-trader" class="navbar-brand">StockTrader</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <Navigation :navitems="mainNav" :navClass="'mr-auto'"></Navigation>
          <Secondarynav></Secondarynav>
        </div>
      </nav>
    </div>
  </div>
</template>
<script src="./Header.js"></script>

