import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {List} from "antd";
import data from './data'
import TxtTag from "../txtTag";
import {connect} from "react-redux";
import Avatar from "antd/es/avatar";
import axios from "axios";

/*
* 数据列表
* */
class DataList extends Component {
    constructor(arg){
        super(arg);

        this.state={
            page:1,
            limit:10
        };
        this.getDeta(this.props.tab,this.state.page,this.state.limit);
        console.log(this.props);
    }
    //生命周期
    // componentWillReceiveProps(nextProps) {
    //     if( this.props.tab !== nextProps.tab ){
    //         this.setState({
    //             page:1
    //         });
    //         this.getDeta(nextProps.tab,this.state.page,this.state.limit)
    //     }
    //     return true
    // }
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.page !== nextState.page){
            this.getDeta(nextProps.tab,nextState.page,this.state.limit)
        }
        if( this.props.tab !== nextProps.tab ){
            this.setState({
                page:1
            });
            this.getDeta(nextProps.tab,this.state.page,this.state.limit)
        }
        return true
    }


    //首次加载获取数据并派送
    getDeta(tab,page,limit){
        this.props.dispatch((dispatch)=>{
                axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`)
                    .then((res)=>{
                        // console.log(res);
                        dispatch({
                            type:'LIST_UPDATE_SUCC',
                            data:res.data
                        })
                    }).catch((error)=>{

                    })
        })
    }

    render() {
        // console.log(this.props);
        let {loading,data} = this.props;
        let pagination = {
            current:this.state.page,
            pageSize:10,
            total:500,
            onChange:((current)=>{
                // console.log(current);
                this.setState({
                    page:current
                })
            })
        };

        return (
            <div>
                <List
                    loading={loading}
                    dataSource={data}
                    pagination={pagination}
                    renderItem={
                        item => (<List.Item
                            actions={[
                                '回复：'+ item.reply_count,
                                '访问：'+item.visit_count
                            ]}

                        >
                            <List.Item.Meta
                                className={'pic'}
                                avatar={
                                    <Avatar src={item.author.avatar_url}/>
                                }
                                title={
                                    <div>
                                        <TxtTag data={item}/>
                                        <Link to={'/details/'+item.id}>{item.title}</Link>
                                    </div>
                                }
                                description={
                                    <p>
                                        <Link to={'/user/'+item.author.loginname}>{item.author.loginname}</Link>

                                        <span >发表于:{item.create_at.split('T')[0]}</span>
                                    </p> }
                            >

                            </List.Item.Meta>
                        </List.Item>)
                    }
                >
                </List>
            </div>
        );
    }
}

export default connect(state=>state.list)(DataList);