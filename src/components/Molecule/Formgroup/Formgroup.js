import Vue from 'vue';
import { Textbox, Content } from '../../Atoms'

export default Vue.extend({
    name: 'Formgroup',
    props: {
        Textbox: Object,
        labelAs: String,
        contentClass:{
            type:String,
            default:'form-label'
        }
    },
    methods:{
        getInput(value){
            this.$emit('inputVal',value)
        }
    },
    components:{
        Textbox, 
        Content
    }
});