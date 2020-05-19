import Vue from 'vue';
import { Navigation, Secondarynav } from "../../Molecule"

export default Vue.extend({
  components:{
    Navigation,
    Secondarynav
  },
  data() {
    return {
      breadcrumb:[
        {navPath:'/', isDropdown: false, navText:'back to main'},
      ],
      mainNav:[
        {navPath:'/stock-trader/stocks', activeClass: 'active', isDropdown: false,navText:'Stocks'},
        {navPath:'/stock-trader/portfolio', activeClass: 'active', isDropdown: false,navText:'Portfolio'}
      ]
    };
  }
});