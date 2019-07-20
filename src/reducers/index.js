// Redux 提供了一个combineReducers方法，用于 Reducer 的拆分。你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
import { combineReducers } from 'redux'
const initState = 90;
const userInfo = {
    username: '未登录',
    password: null
}

const computed = (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            return action.text
        case 'LESS':
            return action.text
        default:
            return state
    }
}

const account = (state = userInfo, action) => {
    switch (action.type) {
        case 'USERNAME':
            return action.text
        case 'PASSWORD':
            return action.text
        default:
            return state
    }
}

export default combineReducers({
    account,
    computed,
})