import * as usersService from './services';

export default {
    namespace: 'users',
    state: {
        list: []
    },
    reducers: {
        save(state, {payload: {data: list}}) {
            return {...state, list};
        }
    },
    effects: {
        * fetch({payload: {page = 1}}, {call, put}) {
            const {data} = yield call(usersService.fetch, {page});
            yield put({
                type: 'save',
                payload: {
                    data: data.data
                }
            });
        },
        * remove({payload: id}, {call, put}) {
            yield call(usersService.remove, id);
            yield put({type: 'reload'});
        },
        * patch({payload: {id, values}}, {call, put}) {
            yield call(usersService.patch, id, values);
            yield put({type: 'reload'});
        },
        * create({payload: values}, {call, put}) {
            yield call(usersService.create, values);
            yield put({type: 'reload'});
        },
        * reload(action, {put, select}) {
            const page = yield select(state => state.users.page);
            yield put({type: 'fetch', payload: {page}});
        }
    },
    subscriptions: {
        setup({dispatch, history}) {
            return history.listen(({pathname, query}) => {
                if (pathname === '/users') {
                    dispatch({type: 'fetch', payload: query});
                }
            });
        }
    }
};
