import Vue from 'vue'
import { mapActions } from "vuex";

export default Vue.extend({
  data(){
    return {      
      isDropdownOpen: false,
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStock: "randomizeStock",
      loadPortfolio: "loadData"
    }),
    endDay() {
      this.randomizeStock();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.loadPortfolio();
    }
  }
})