const MonsterSlayer = resolve =>{
    require.ensure(['./templates/Monster/Monster.vue'],()=>{
        resolve(require('./templates/Monster/Monster.vue'))
    })
}
const Quotes = resolve =>{
    require.ensure(['./templates/Quotes/Quotes.vue'],()=>{
        resolve(require('./templates/Quotes/Quotes.vue'))
    })
}
const Stockmain = resolve =>{
    require.ensure(['./templates/StockTrader/stock-trader.vue'],()=>{
        resolve(require('./templates/StockTrader/stock-trader.vue'))
    })
}
const StockPortfolio = resolve =>{
    require.ensure(['./templates/Portfolio/Portfolio.vue'],()=>{
        resolve(require('./templates/Portfolio/Portfolio.vue'))
    })
}
const Stocks = resolve =>{
    require.ensure(['./templates/Stocks/Stocks.vue'],()=>{
        resolve(require('./templates/Stocks/Stocks.vue'))
    })
}
const Home = resolve =>{
    require.ensure(['./templates/HelloWorld.vue'],()=>{
        resolve(require('./templates/HelloWorld.vue'))
    })
}
const Header = resolve =>{
    require.ensure(['./components/Common/Header.vue'],()=>{
        resolve(require('./components/Common/Header.vue'))
    })
}
export const routes =[
    {path: '/', components:{
        default:Home,
        'header': Header
    }},
    {path: '/monster-slayer', components:{
        default: MonsterSlayer,
        'header': Header
    }},
    {path: '/quotes', components:{
        default: Quotes,
        'header': Header
    }},
    {path: '/stock-trader', component: Stockmain, children: [
            {path: '/stock-trader/portfolio', component: StockPortfolio},
            {path: '/stock-trader/stocks', component: Stocks},
            {path: '/stock-trader', component: Stocks}
        ]
    },
    {path: '*', redirect: '/'}
]