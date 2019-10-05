import React, {Component} from 'react';
import {Tag} from "antd";

const tag = {
    top:{
        color:'red',
        txt:'置顶'
    },
    job:{
        color:'magenta',
        txt:'招聘'
    },
    dev:{
        color:'cyan',
        txt:'测试'
    },
    good:{
        color:'magenta',
        txt:'精华'
    },
    ask:{
        color:'purple',
        txt:'问答'
    },
    share:{
        color:'geekblue',
        txt:'分享'
    },
};

function getData( data ) {
    return (
        data.top ? 'top' :
            data.good ? 'good' :
                data.tab
    )
}
/*
* 置顶
* */
class TxtTag extends Component {
    render() {
        // console.log(this.props.data);
        let nowTag = tag[getData(this.props.data)]
        return (
            <Tag color={nowTag.color}>{nowTag.txt}</Tag>
        );
    }
}

export default TxtTag;