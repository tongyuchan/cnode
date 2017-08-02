import React from 'react';
import classnames from 'classnames';    //动态修改css
import css from './Header.scss';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

const Header=props=>{
    const {isFetching,title}=props;
    return (
        <div className="header">
            <MuiThemeProvider>
                <AppBar
                    title={<p className="title">{isFetching?'加载中':title}</p>}
                    iconElementLeft={
                        <IconButton iconClassName="iconfont icon-back" />
                    }
                    onLeftIconButtonTouchTap={
                        ()=>{
                            window.history.go(-1);
                        }
                    }
                />
            </MuiThemeProvider>
        </div>
    )
};

export default Header;