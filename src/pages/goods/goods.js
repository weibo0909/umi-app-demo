import React, {useEffect} from 'react';
import {connect} from 'dva';

import {List} from 'antd';

import './goods.less';

const Goods = ({
    goodList, loading,
    dispatch
}) => {

    useEffect(() => {
        dispatch({type: 'goods/getList'});
    }, []);
    return (
        <List
            size="small"
            bordered
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            dataSource={goodList}
            renderItem={item => <List.Item>{item?.title}</List.Item>}
        />
    );
};

export default connect(state => ({
    goodList: state.goods.list, // 从指定命名空间内获取state
    loading: state.loading // 通过loading命名空间获取加载的状态
}))(Goods);
