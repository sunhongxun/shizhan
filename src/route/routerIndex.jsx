import React, {Component} from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import Index from "../components/index/index";
import Book from "../components/book/book";
import About from "../components/about/about";
import Details from "../components/details/details";
import User from "../components/user/user";


/*
* 首页路由
* */
class RouterIndex extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={'/'} render={()=>(
                            <Redirect to={'/index/all'}/>
                        )}
                    />
                    <Route path={'/index/:id'} component={Index} />
                    <Route path={'/book'} component={Book} />
                    <Route path={'/about'} component={About} />
                    <Route path={'/details'} component={Details} />
                    <Route path={'/user'} component={User} />
                </Switch>


                {/*<Router path={'/'} coponent={} />*/}

            </div>
        );
    }
}

export default RouterIndex;