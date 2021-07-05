import {useSat} from 'antd';
import {Layout} from 'antd';

const {Header, Content, Footer} = Layout;

import Sider from './Sider';

import './index.less';

export default (props) => {


    return (
        <Layout className="app-content">
            <Sider/>
            <Layout>
                <Header>
                    <div style={{color: 'white'}}>umi app demo</div>
                </Header>
                <Content className="app-content-box"
                    style={{padding: '50px'}}>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
}
