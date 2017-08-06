import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import {List,ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';


const Login=(props)=>{
    const {open,toggleFn,img,loginname,exit}=props;
    return (
        <MuiThemeProvider>
            <Drawer
                docked={false}
                width={280}
                open={open}
                onRequestChange={toggleFn}
            >
                <div className="leftLoginTitle">
                    {
                        img?
                            <div>
                                <Link to="/Person" className="link">
                                    <img src={img}/>
                                </Link>
                                <p>{loginname}</p>
                            </div>
                        :<div>
                            <Link to="/login" className="link">
                                <i className="iconfont icon-user"></i>
                            </Link>
                            <p>点击头像登录</p>
                        </div>
                    }
                </div>
                {
                    img?
                        <List className="leftLoginContent">
                            <ListItem
                                leftAvatar={<i className="iconfont icon-user"></i>}
                                primaryText={
                                    <Link to="/Person">
                                        个人中心
                                        <span style={{float:'right'}} className="iconfont icon-right"></span>
                                    </Link>
                                }
                                style={{
                                    textAlign:'left'
                                }}
                            />
                            <RaisedButton
                                label="退出登录"
                                style={{
                                    marginTop:'20px'
                                }}
                                onTouchTap={
                                    (event)=>{
                                        exit();
                                    }
                                }
                            />
                        </List>
                    :''
                }
            </Drawer>
        </MuiThemeProvider>
    )
};

export default Login;