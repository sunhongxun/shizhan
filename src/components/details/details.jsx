import React, {Component} from 'react';
import dataDelail from "../details/dataDetail" ;
import TxtTag from "../txtTag";
import {Card} from "antd";
import 'antd/dist/antd.css'
import {Link} from "react-router-dom";
import Avatar from "antd/es/avatar";
import ReplyList from "./replyList";
import {connect} from "react-redux";


/*
* 详情组件
* */
class Details extends Component {
    render() {
        // console.log(dataDelail);
        return (
            <div>
                <Card
                    className={'warp'}
                >
                    <Card.Meta
                        title={
                            <div >
                                <h2>{dataDelail.data.title}</h2>
                                <p>
                                    <TxtTag data={dataDelail.data}/>
                                    {/*{console.log(dataDelail.data)}*/}
                                    <Avatar style={{marginRight:'8px'}} src={dataDelail.data.author.avatar_url}/>
                                    <Link to={'/user/'+dataDelail.data.author.loginname}>{dataDelail.data.author.loginname}</Link>

                                    <span >发表于:{dataDelail.data.create_at.split('T')[0]}</span>
                                </p>
                            </div>
                        }
                    >
                    </Card.Meta>
                    <div
                        dangerouslySetInnerHTML={{
                            __html:dataDelail.data.content
                        }}
                    >
                    </div>
                </Card>
                <ReplyList
                    replys={dataDelail.data.replies}
                    replyCount={dataDelail.data.reply_count}

                />
            </div>
        );
    }
}

export default connect(state=>state.list)(Details);