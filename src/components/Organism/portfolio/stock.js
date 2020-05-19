import Vue from 'vue';

import { mapActions } from 'vuex';
import { Card, Formgroup } from '../../Molecule/';

export default Vue.extend({
    props:['stock'],
    data(){
        return{
            quantity:0,
            textbox:{
              id:'qua'+this.stock.id,
              value:null,
              placeholder:'Please enter quantity',
              type:'Number'
            }
        }
    },
    components:{
      Card,
      Formgroup
    },
    computed:{
      insufficientQuantity(){
        return this.quantity > this.stock.quantity
      }
    },
    methods:{
        getInput(value){
          this.quantity = value;
        },
        ...mapActions({
            placeOrder: 'sellStock',
        }),
        sellStock(){
            const order ={
                stockid : this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            this.placeOrder(order);
            this.quantity = null;
        }
    }
});