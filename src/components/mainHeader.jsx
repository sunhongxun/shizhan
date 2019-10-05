import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Layout,Row,Col,Divider,Menu,Icon} from "antd";

import 'antd/dist/antd.css'
/*
* 头部组件
* */
class MainHeader extends Component {

    render() {
        return (
            <div className={'header'}>

                <Layout.Header>

                    <Row className={'warp'}>
                        <Col md={6} >
                            <h1 className={'logo'}>discussion</h1>
                        </Col>
                        <Col md={18}>
                            <Divider type={'vertical'} className={'H-divider'}/>
                           <Menu mode={'horizontal'} className={'H-menu'}>
                               <Menu.Item>
                                   <Link to={'/index/all'} >
                                       <Icon type={'home'}/>
                                       首页
                                   </Link>
                               </Menu.Item>
                               <Menu.Item>
                                   <Link to={'/book'}>
                                       <Icon type={'book'}/>
                                       教程
                                   </Link>
                               </Menu.Item>
                               <Menu.Item>
                                   <Link to={'/about'}>
                                       <Icon type={'info-circle-o'}/>
                                       关于
                                   </Link>
                               </Menu.Item>
                           </Menu>
                        </Col>
                    </Row>
                </Layout.Header>

            </div>
        );
    }
}

export default MainHeader;