import React, {Component} from 'react';
import IndexList from "./indexList";
import DataList from "./dataList";
import {Layout,Row,Col,Divider,Menu,Icon} from "antd";
/*
* 首页组件
* */
class Index extends Component {
    render() {
        // console.log(this.props);
        let tab = this.props.match.params.id;
        // console.log(tab);
        return (
           <Layout.Content>
               <Row className={'warp'}>
                   <Col md={6}>
                       <IndexList id={'menuIndxe'}/>
                   </Col>
                   <Col md={18}>
                       <DataList
                            tab={tab}
                       />
                   </Col>
               </Row>
           </Layout.Content>
        );
    }
}

export default Index;