import * as usersService from './services';

export default {
    namespace: 'goods',
    state: {
        list: []
    },
    reducers: {
        save(state, {payload: {data: list}}) {
            return {...state, list};
        }
    },
    effects: {
        * getList({}, {call, put}) {
            const {data} = yield call(usersService.fetch);
            yield put({
                type: 'save',
                payload: {
                    data: data?.result
                }
            });
        }
    }
};
