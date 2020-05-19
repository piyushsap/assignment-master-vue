import Vue from 'vue';
import Stock from "../../components/Organism/stocks/stock.vue";
import {Textbox} from "../../components/Atoms/";
export default Vue.extend({
  components:{
      appStock: Stock,
      Textbox
  },
  computed:{
    stocks(){
      return this.$store.getters.stocks;
    }
  }
});