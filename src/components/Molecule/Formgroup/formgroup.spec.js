import Formgroup from '@/components/Molecule/Formgroup/Formgroup.vue';
import { mount } from '@vue/test-utils'

describe("Formgroup.vue", () => {
    it("Textbox emitting value on input", () => {
        const labeltText = 'Form Label';
        const wrapper = mount(Formgroup, {
            slots: {
                default: labeltText
            },
            propsData: {
                Textbox: {
                    id: 'textboxId'
                }
            }
        });
        const inputField = wrapper.find('input')
        inputField.setValue('textbox check');
        expect(wrapper.emitted().inputVal).toBeTruthy();
        expect(wrapper.emitted().inputVal).toEqual([ [ 'textbox check' ] ])
    })
})