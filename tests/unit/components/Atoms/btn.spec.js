import Button from '@/components/Atoms/Button/buttons.vue';
import {mount} from '@vue/test-utils'

describe("buttons.vue", ()=>{
    it("display button",()=>{
        const btnText = 'Buttons Texy';
        const wrapper = mount(Button,{
            slots: { 
                default: btnText 
            },
            propsData:{
                btnClass: 'btn-primary',
                type:'submit'
            }
        })
        expect(wrapper.find('button').text()).toBe('Buttons Texy');
        expect(wrapper.classes()).toContain('btn-primary');
    })
})