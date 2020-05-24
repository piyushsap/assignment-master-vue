import Secondarynav from '@/components/Molecule/Secondarynav/Secondarynav.vue';
import { mount, createLocalVue } from '@vue/test-utils'
import portfolio from '@/store/modules/portfolio.js';
import stocks from '@/store/modules/stocks.js';
import Vuex from 'vuex'


const localVue = createLocalVue()

localVue.use(Vuex)

describe("Secondarynav check", () => {
    let actions
    let state
    let store
    beforeEach(() => {
        state = {
            funds: 1200,
            stocks: []
        }
    
        actions = {
            randomizeStock: jest.fn(),
            loadPortfolio : jest.fn()
        }
    
        store = new Vuex.Store({
          modules: {
            myModule: {
              state,
              actions,
              getters: portfolio.getters
            }
          }
        })
      })

    it("Get computed funds", () => {
        const wrapper = mount(Secondarynav, { store, localVue });

        expect(wrapper.vm.funds).toBe(1200);
    })

    it("dispatch randomize event when click on end day ", () => {
        const wrapper = mount(Secondarynav, { store, localVue });
        wrapper.find('.end-day').trigger('click');
        expect(actions.randomizeStock).toHaveBeenCalled()
    })

    it("dispatch loadPortfolio event when click on loadData ", () => {
        const wrapper = mount(Secondarynav, { store, localVue });
        console.log(wrapper.find('.load-data'))
        //expect(actions.loadPortfolio).toHaveBeenCalled()
    })
})