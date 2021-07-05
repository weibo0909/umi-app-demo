import {Menu} from 'antd';
import {
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined
} from '@ant-design/icons';

import {Link} from 'umi';

const CustomizedMenu = ({
    collapsed
}) => {

    return (
        <div className="customized-menu">
            <Menu theme="light"
                  mode="inline"
                  inlineCollapsed={collapsed}>
                <Menu.Item key="1" icon={<PieChartOutlined/>}>
                    <Link to="/">index</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined/>}>
                    <Link to="/users">users</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<ContainerOutlined/>}>
                    <Link to="/goods">goods</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default CustomizedMenu;
