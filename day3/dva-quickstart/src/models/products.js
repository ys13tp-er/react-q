export default {
    namespace: 'products',
    state: {
        arr: ['ps', 'js', 'css']
    },
    reducers: {
        // 返回一个全新state
        'add'(state, { payload: arr }) {
            return {
                arr: [...state.arr,...arr]
            }
        },
    },
};