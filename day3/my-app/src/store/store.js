import { createStore } from 'redux';
// 构造数据处理中心
const counter = (state = {
    num: 100,
    name: 'yao'
}, action) => {
    // 执行对应的动作
    switch (action.type) {
        case 'GETSUM':
            return {
                num: state.num + 10
            }
        case 'SETNAME':
            return {
                name: action.name
            }
        default:
            return { ...state }
    }
}
// 创建仓库
const store = createStore(counter);
export default store;