import stock from '@/components/Organism/stocks/stock.vue';
import { mount, createLocalVue } from '@vue/test-utils'
import stocks from '@/store/modules/stocks';
import Vuex from 'vuex'


const localVue = createLocalVue()

localVue.use(Vuex)

describe("stock.vue", () => {
    let actions
    let state
    let store
    let getters
    beforeEach(() => {
        getters = {
          funds: () => 2000,
        }
        actions = {
            buyStock: jest.fn(),
        }
        store = new Vuex.Store({
            actions,
            getters
        })
    })

    it("Textbox emitting value on input", () => {
        const wrapper = mount(stock, { 
            store, 
            localVue,
            propsData: {
                stock: { id: 1, name: "Kia", price: 100 }
            },
        });
        wrapper.find('input').setValue('2');
        wrapper.find('button').trigger('click');
        expect(actions.buyStock).toHaveBeenCalled()
    })
})