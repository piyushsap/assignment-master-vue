import stock from '@/components/Organism/stocks/stock.vue';
import { mount, createLocalVue } from '@vue/test-utils'
import portfolio from '@/store/modules/portfolio.js';
import stocks from '@/store/modules/stocks.js';
import Vuex from 'vuex'


const localVue = createLocalVue()

localVue.use(Vuex)

describe("stock.vue", () => {
    let actions
    let state
    let store
    beforeEach(() => {
        state = {
            funds: 1200,
            stocks: { id: 1, name: "Kia", price: 100 }
        }

        actions = {
            randomizeStock: jest.fn(),
            loadPortfolio: jest.fn()
        }

        store = new Vuex.Store({
            modules: {
                myModule: {
                    state,
                    actions,
                    getters: stocks.getters
                }
            }
        })
    })

    it("Textbox emitting value on input", () => {
        const wrapper = mount(stock, { store, localVue }, {
            propsData: {
                quantity: null,
                textbox: {
                    id: 'qua',
                    value: null,
                    placeholder: 'Enter quantity here',
                    type: 'Number',
                    name:'qua'
                }
            }
        });
    })
})