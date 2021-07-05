import {useState, createElement, useCallback} from 'react';
import {Button, Layout} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import CustomizedMenu from './Menu';

const {Header, Sider} = Layout;

import './Sider.less';

export default (props) => {

    const [collapsed, toggleCollapsed] = useState(false),
        setCollapsed = useCallback(() => {
            toggleCollapsed(!collapsed);
        }, [collapsed]);

    return (
        <Sider className="customized-sider"
               collapsed={collapsed}>
            <Header>
                <div className="logo"></div>
            </Header>
            <Button className="menu-collapsed-button"
                    type="primary"
                    onClick={setCollapsed}>
                {
                    createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)
                }
            </Button>
            <CustomizedMenu collapsed={collapsed}/>
        </Sider>
    );
}
