import React, {Component} from 'react';
import {connect} from "react-redux";



/*
* 用户组件
* */
class User extends Component {
    render() {
        return (
            <div>
                用户
            </div>
        );
    }
}

export default connect(state=>state.list)(User);