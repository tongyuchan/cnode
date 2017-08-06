import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List,ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const PersonList=(props)=>{
    const {user}=props;
    return (
        <MuiThemeProvider>
            <div>
                <div className="personTop">
                    <div>
                        <img src={user.avatar_url}/>
                    </div>
                    <p>{user.loginname}</p>
                    <p>积分：{user.score}</p>
                </div>
                <List className="personList">
                    <Link to="/topicList/0">
                        <ListItem
                            leftAvatar={<i className="iconfont icon-create"></i>}
                            primaryText={
                                <div>
                                    我创建的
                                    <span style={{float:'right'}} className="iconfont icon-right"></span>
                                </div>
                            }
                        />
                    </Link>
                    <Link to="/topicList/1">
                        <ListItem
                            leftAvatar={<i className="iconfont icon-join"></i>}
                            primaryText={
                                <div>
                                    我参与的
                                    <span style={{float:'right'}} className="iconfont icon-right"></span>
                                </div>
                            }
                        />
                    </Link>
                    <Link to="/topicList/2">
                        <ListItem
                            leftAvatar={<i className="iconfont icon-collect"></i>}
                            primaryText={
                                <div>
                                    我收藏的
                                    <span style={{float:'right'}} className="iconfont icon-right"></span>
                                </div>
                            }
                        />
                    </Link>
                    <ListItem
                        leftAvatar={<i className="iconfont icon-message"></i>}
                        primaryText={
                            <div>
                                我的消息
                                <span style={{float:'right'}} className="iconfont icon-right"></span>
                            </div>
                        }
                    />
                </List>
            </div>
        </MuiThemeProvider>
    )
};

export default PersonList;
