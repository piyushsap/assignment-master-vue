import Vue from 'vue';
import { Button, Content } from '../../Atoms/'

export default Vue.extend({
    name: 'Card',
    props: {
        btn: Object,
        heading: String,
    },
    computed:{
        check(){
            return null
        }
    },
    components:{
        Button, 
        Content
    }
});