import React,{Component} from 'react';

import './style.scss';
import {Link} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tab,Tabs} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

class Header extends Component{
    constructor(props){
        super(props)
    }

    state={
        slideIndex:0
    }

    handleChange = (value)=>{
        this.setState({
            slideIndex:value
        });
        this.props.onClick(this.props.tabs[value].filter)
    }

    componentWillMount(){
        const {tabs,filter}=this.props;
        let slideIndex;
        tabs.forEach((tab,index)=>{
            if(tab.filter==filter){
                slideIndex=index;
                return
            }
        });
        this.setState({
            slideIndex
        });
    }

    render(){
        const {tabs,toggleFn,badge,id} =this.props;
        return (
            <MuiThemeProvider>
                <div>
                    <div className="homePageHeader">
                        <AppBar
                            title={<p style={{textAlign:"center"}}>NodeJS论坛</p>}
                            onLeftIconButtonTouchTap={toggleFn}
                            iconElementRight={
                                id?
                                <Link to="/message">
                                    <Badge
                                        badgeContent={badge || 0 }
                                        primary={true}
                                        style={{color:'#fff'}}
                                        badgeStyle={{color:'#fff',background:'#f55d59'}}
                                    >
                                        <NotificationsIcon/>
                                    </Badge>
                                </Link>
                                :<i></i>
                            }
                        />
                        <Tabs value={this.state.slideIndex} onChange={this.handleChange} className='tabs'>
                            {
                                tabs.map((tab,index)=>{
                                    return (
                                        <Tab label={tab.title} value={index} key={index}></Tab>
                                    )
                                })
                            }
                        </Tabs>
                    </div>
                    <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
                        {this.props.children}
                    </SwipeableViews>
                </div>
            </MuiThemeProvider>
        )
    }

};

export default Header;