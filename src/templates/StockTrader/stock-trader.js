import Vue from 'vue';
import Header from "../../components/Organism/Header/Header.vue";
export default Vue.extend({
    components:{
        'stock-header' : Header
    },
    created(){
      this.$store.dispatch('initStock')
    }
});