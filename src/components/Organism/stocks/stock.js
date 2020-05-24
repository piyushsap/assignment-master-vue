import Vue from 'vue';
import { Card, Formgroup } from '../../Molecule/';

export default Vue.extend({
    props:['stock'],
    data(){
        return{
            quantity:null,
            textbox:{
              id:'qua'+this.stock.id,
              value:null,
              placeholder:'Enter quantity here',
              type:'Number'
            }
        }
    },
    components:{
      Card,
      Formgroup,
    },
    computed:{
      funds(){
        return this.$store.getters.funds;
      },
      insufficientFunds(){
        return this.quantity * this.stock.price > this.funds
      }
    },
    methods:{
        getInput(value){
          this.quantity = value;
        },
        buyStock(){
            const order ={
                stockid : this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            console.log(order);
            this.$store.dispatch('buyStock',order)
            this.quantity = null;
        }
    }
});