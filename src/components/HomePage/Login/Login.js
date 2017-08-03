import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';

const Login=(props)=>{
    const {open,toggleFn}=props;
    return (
        <MuiThemeProvider>
            <Drawer
                docked={false}
                width={300}
                open={open}
                onRequestChange={toggleFn}
            >
                <div className="leftLoginTitle">
                    <div>
                        <Link to="/router" className="link">
                            <i className="iconfont icon-user"></i>
                        </Link>
                        <p>点击头像登录</p>
                    </div>
                </div>
            </Drawer>
        </MuiThemeProvider>
    )
};

export default Login;