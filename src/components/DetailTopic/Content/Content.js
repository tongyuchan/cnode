import React,{Component} from 'react';

import transforDate from '../../../utils/transforDate';
import './style.scss';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List,ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';


const Content=(prop)=>{
    const {data}=prop;

    return (
        <MuiThemeProvider>
            <List className="detailTopicList" style={{padding:0}}>
                <ListItem
                    leftAvatar={<Avatar src={data.author.avatar_url}/>}
                    primaryText={
                        <div className="titleBox">
                            <div className="leftTitle">
                                <h3>{data.author.loginname}</h3>
                            </div>
                            <div className="rightTitle">
                                <div>发表于{transforDate(data.create_at)}</div>
                                <p>
                                    <span style={{marginRight:10}}><i className="iconfont icon-reply"></i>{data.reply_count}</span>
                                    <span><i className="iconfont icon-visit"></i>{data.visit_count}</span>
                                </p>
                            </div>
                        </div>
                    }
                    className="topicTitle"
                />
               <ListItem>
                    <div dangerouslySetInnerHTML={{__html:data.content}}></div>
               </ListItem>
            </List>
        </MuiThemeProvider>
    )

};

export default Content;