import Vue from 'vue';

export default Vue.extend({
    name: 'Content',
    props: {
        textClass: String,
        tagFor: String,
        as: String,
    },
    computed:{
        htmlTag(){
            return this.as ? this.as : 'p';
        }
    }
});