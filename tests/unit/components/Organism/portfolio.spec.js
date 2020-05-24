import stock from '@/components/Organism/portfolio/stock.vue';
import { mount, createLocalVue } from '@vue/test-utils'
import portfolio from '@/store/modules/portfolio.js';
import Vuex from 'vuex'


const localVue = createLocalVue()

localVue.use(Vuex)

describe("stock.vue", () => {
  let actions
  let state
  let store
  let getters
  beforeEach(() => {
      actions = {
          sellStock: jest.fn(),
      }
      store = new Vuex.Store({
          actions,
      })
  })
  it("Textbox emitting value on input", () => {
    const wrapper = mount(stock, {
      propsData: {
        stock: { id: 1, name: "Kia", price: 100 }
      },
      store,
      localVue
    });
    wrapper.find('input').setValue('2');
    wrapper.find('button').trigger('click');

    expect(actions.sellStock).toHaveBeenCalled()
  })
})