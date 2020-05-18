const path = require('path')
const webpack = require('webpack')

let jsEntries = [
  // base
  'base/header/header',
  'base/footer/footer',
  'base/pagination/pagination',
  'base/right-side-reserve/right-side-reserve',
  // home
  'home/home-banner/home-banner',
  'home/home-cards/home-cards',
  // case
  'case/list/case-ban-cate',
  // store
  'store/list/store-ban-cate',
  'store/id/store-body',
  // product
  'product/list/product-ban-cate',
  'product/id/product-body',
  // plan
  'plan/list/plan-ban',
  // strategy
  'strategy/list/strategy-ban',
  'utils/lazy'
]
const arrToObj = arr => {
  const obj = {}
  arr.map(x => (obj[`js/${x}`] = `./js/${x}`))
  return obj
}
jsEntries = arrToObj(jsEntries)
const cssEntries = { 'css/style': './css/style.css' }

const plugins = []

module.exports = {
  entries: {
    jsEntries,
    cssEntries
  },
  plugins
}
