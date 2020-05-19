import Vue from 'vue';
import {Card} from '../../components/Molecule/'
import {Progressbar} from '../../components/Atoms/'
export default  Vue.extend({
    data() {
      return {
        quote: "",
        quotes: []
      };
    },
    components:{
      Card,
      Progressbar
    },
    methods: {
      submitQuote() {
        if (this.quotes.length == 10) {
          alert("Please delete the quotes first");
        } else {
          this.quotes.push(this.quote);
          this.quote = null;
        }
      },
      deleteQuote(index) {
        this.quotes.splice(index, 1);
      }
    }
  });