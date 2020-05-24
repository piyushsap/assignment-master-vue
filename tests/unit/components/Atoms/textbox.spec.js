import Textbox from '@/components/Atoms/Textbox/textbox.vue';
import {mount} from '@vue/test-utils'

describe("textbox.vue", ()=>{
    it("Textbox emitting value on input",()=>{
        const btnText = 'Buttons Texy';
        const wrapper = mount(Textbox)

        const inputField = wrapper.find('input')
        inputField.setValue('check');
        
        expect(wrapper.emitted().inputVal).toBeTruthy();
        expect(wrapper.emitted().inputVal).toEqual([ [ 'check' ] ])
    })
})