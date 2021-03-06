import Vue from 'vue';
import Stock from "../../components/Organism/portfolio/stock.vue";
import { mapGetters } from "vuex";
export default Vue.extend({
  components: {
    appStock: Stock
  },
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  }
});