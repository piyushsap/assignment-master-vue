import Vue from 'vue';

export default Vue.extend({
    name: 'Textbox',
    props: {
        textboxClass: String,
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: 'Type here'
        },
        name: String,
        id: String,
        readonly: Boolean,
        disabled: Boolean,
        value:String
    },
    methods:{
        handleInput(value){
            this.$emit('inputVal',value);
        }
    }
});