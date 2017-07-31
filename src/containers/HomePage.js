import React,{Component} from 'react';
import {connect} from 'react-redux';

import Header from '../components/common/Header/Header';
import CircleLoading from '../components/common/CircleLoading';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tab,Tabs} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views';

const styles={
    tab:{
        position:'fixed',
        top:64,
        left:0,
        width:'100%'
    },
    content:{
        width:'100%',
        height:'100%',
        paddingTop:112
    }
};

class HomePage extends Component{
    constructor(props){
        super(props);
    }

    state={
        fadeIn:true,
        openDrawer:false,
        openSnackbar:false,
        isFreshing:false,
        fixedTop:0,
        scrollT:0,
        slideIndex:0    //切换tab
    }

    tabs=[
        {
            title:'全部',
            filter:'all'
        },
        {
            title:'精华',
            filter:'good'
        },
        {
            title:'分享',
            filter:'share'
        },
        {
            title:'问答',
            filter:'ask'
        },
        {
            title:'招聘',
            filter:'job'
        }
    ]

    handleChange = (value)=>{
        this.setState({
           slideIndex:value
        });
    }

    render(){
        const {
            selectedTab,
            tabData,
            isFetching,
            page,
            scrollT,
            topics,
            dispatch
        }=this.props;
        return (
            <div className={this.state.fadeIn?'fade-in':''}>
                <Header filter={selectedTab} fixedTop={this.state.fixedTop} tabs={this.tabs} />
                <MuiThemeProvider>
                    <div>
                        <Tabs style={styles.tab} value={this.state.slideIndex} onChange={this.handleChange}>
                            {
                                this.tabs.map((tab,index)=>{
                                    return (
                                        <Tab label={tab.title} value={index} key={index}></Tab>
                                    )
                                })
                            }
                        </Tabs>
                        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} style={styles.content}>
                            {
                                this.tabs.map((tab,index)=>{
                                    return (
                                        <div key={index}>{tab.title}</div>
                                    )
                                })
                            }
                        </SwipeableViews>
                    </div>
                </MuiThemeProvider>


            </div>
        )
    }
};

function mapStateToProps(state,ownProps){
    const {
        homePage
    }=state;
    const {
        selectedTab,
        tabData
    }=homePage;
    const {
        isFetching,
        page,
        scrollT,
        topics
    }=tabData[selectedTab] || {isFetching:false,page:0,scrollT:0,topics:[]};

    return {
        selectedTab,
        tabData,
        isFetching,
        page,
        scrollT,
        topics
    }
}

//mapDispatchToProps不传会默认给组件的props添加dispatch
export default connect(mapStateToProps)(HomePage);