import Vue from 'vue';
import {List} from '../../Atoms'

export default Vue.extend({
    name: 'Navigation',
    props: {
        navitems: Array,
        navClass: String
    },
    components:{
        List
    }
});