import React, {useCallback, useMemo} from 'react';
import {connect} from 'dva';
import {Table, Pagination, Popconfirm} from 'antd';
import {routerRedux} from 'dva/router';

import './index.less';

const Users = ({
    dispatch, list, loading
}) => {

    const deleteHandler = useCallback(id => {
            dispatch({
                type: 'users/remove',
                payload: id
            });
        }, []),

        pageChangeHandler = useCallback((page) => {
            dispatch(
                routerRedux.push({
                    pathname: '/users',
                    query: {page}
                })
            );
        }, []),

        editHandler = useCallback((id, values) => {
            dispatch({
                type: 'users/patch',
                payload: {id, values}
            });
        }, []),

        columns = useMemo(() => [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="">{text}</a>
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email'
            },
            {
                title: 'Website',
                dataIndex: 'website',
                key: 'website'
            },
            {
                title: 'Operation',
                key: 'operation',
                render: (text, record) => 'operation'
            }
        ], []);

    return (
        <div>
            <div>
                <Table
                    columns={columns}
                    dataSource={list}
                    loading={loading}
                    rowKey={record => record.id}
                    pagination={false}
                />
                <Pagination
                    className="ant-table-pagination"
                    total={100}
                    current={1}
                    pageSize={10}
                    onChange={pageChangeHandler}
                />
            </div>
        </div>
    );
};

export default connect(state => ({
    loading: state.loading.models.users,
    list: state.users.list,
    total: state.users.total,
    page: state.users.page
}))(Users);
