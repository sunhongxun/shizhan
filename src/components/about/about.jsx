import React, {Component} from 'react';
import dataAbout from "../about/dataAbout" ;
import {Card} from "antd";
import 'antd/dist/antd.css'


/*
* 关于模块组件
* */
class About extends Component {
    render() {
        console.log(dataAbout);
        return (
            <div>
                {
                    dataAbout.map((item,index)=>{
                        return(
                            <Card
                                key={index}
                                title={item.title}
                            >
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html:item.content
                                    }}
                                >
                                </div>
                                {/*{console.log(item)}*/}
                            </Card>
                        )

                    })
                }
            </div>
        );
    }
}

export default About;