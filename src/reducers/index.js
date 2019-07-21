// Redux 提供了一个combineReducers方法，用于 Reducer 的拆分。你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
import { combineReducers } from 'redux'
import { getStorage, setStorage } from '../storage'

const initState = 90;
const forms = getStorage('form')
const userInfo = getStorage('userInfo')


const computed = (state = initState, action) => {
    switch (action.type) {
        case 'add':
            return action.text
        case 'less':
            return action.text
        default:
            return state
    }
}

const account = (state = userInfo, action) => {
    switch (action.type) {
        case 'username':
        case 'tel':
            let obj = Object.assign({}, state)
            obj[action.type] = action.text
            setStorage('userInfo', obj, action)
            return obj
        default:
            return state
    }
}

const form = (state = forms, action) => {
    switch (action.type) {
        case 'index':
            let obj = Object.assign({}, state)
            obj[action.type] = action.text
            setStorage('form', obj, action)
            return obj
        default:
            return state
    }
}

export default combineReducers({
    account,
    computed,
    form
})