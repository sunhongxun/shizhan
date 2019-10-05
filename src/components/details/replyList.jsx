import React, {Component} from 'react';
import {List,Card} from "antd";
import Avatar from "antd/es/avatar";
import {Link} from "react-router-dom";
import dataDelail from "./dataDetail";

/*
* 回复信息列表
* */
class ReplyList extends Component {
    render() {
        // console.log(this.props.replys);
        return (
            <div  className={'warp'}>
                <Card
                    title={'回复数量:'+this.props.replyCount+'条'}
                >
                </Card>
                <List
                    loading={false}
                    dataSource={this.props.replys}
                    renderItem={
                        item => (<List.Item
                            className={'listItem'}
                            extra={item.ups.length > 0 ? <span>{item.ups.length}</span> : ''}
                            // actions={[
                            //     '一共有'+item.
                            // ]}
                        >
                            <List.Item.Meta
                                avatar={
                                    <Avatar src={item.author.avatar_url}/>
                                }
                                description={
                                    <p>
                                        <Link to={'/user/'+item.author.loginname}>{item.author.loginname}</Link>

                                        <span style={{marginLeft:'5px'}}>发表于:{item.create_at.split('T')[0]}</span>
                                    </p>

                                }

                            >

                            </List.Item.Meta>

                            <div
                                dangerouslySetInnerHTML={{
                                    __html:item.content
                                }}
                            >
                            </div>
                            </List.Item>)
                    }

                >

                </List>
            </div>
        );
    }
}

export default ReplyList;