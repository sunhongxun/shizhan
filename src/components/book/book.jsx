import React, {Component} from 'react';
import dataBook from "../book/dataBook";
import {Card} from "antd";
import 'antd/dist/antd.css'



/*
* 教程组件
* */
class Book extends Component {
    render() {
        // console.log(dataBook);
        return (
            <div>
                {
                    dataBook.map((item,index)=>{
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

export default Book;