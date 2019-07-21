const userInfo = {
    username: '未登录',
    tel: '空的'
}

const form = {
    index: 123
}

const store = {
    userInfo,
    form
}

const getStorage = (name) => {
    let storage = JSON.parse(localStorage.getItem(name));
    return storage || store[name]
}

const setStorage = (name, obj, action) => {
    // 用户交互
    if (action.type) {
        let oldValue = store[name][action.type]; //旧值
        if (oldValue !== action.text) {
            Object.assign(store[name], obj) //改变初始对象
            localStorage.setItem(name, JSON.stringify(obj));
        }
    }
}

export { getStorage, setStorage }