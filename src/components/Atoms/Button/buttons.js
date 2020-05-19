import Vue from 'vue';

export default Vue.extend({
    name: 'Button',
    props: {
        btnClass: String,
        text: String,
        href: String,
        type: String,
        disabled: Boolean,
    },
    computed: {
        htmlTag() {
            return this.href ? 'a' : 'button'
        }
    }
});