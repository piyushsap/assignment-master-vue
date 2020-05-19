import Vue from 'vue';
export default  Vue.extend({
    name:'Progressbar',
    props:{
        progress:Number,
        progressBarClass: {
            type:String,
            default:'progress-bar-striped'
        }
    }
  });