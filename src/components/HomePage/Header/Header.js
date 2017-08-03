import React,{Component} from 'react';

import './style.scss'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tab,Tabs} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';

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
        const {tabs,toggleFn} =this.props;
        return (
            <MuiThemeProvider>
                <div>
                    <div className="homePageHeader">
                        <AppBar
                            title={<p style={{textAlign:"center"}}>NodeJS论坛</p>}
                            onLeftIconButtonTouchTap={toggleFn}
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