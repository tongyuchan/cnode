import React,{Component} from 'react';
import {connect} from 'react-redux';

import Header from '../components/common/Header/Header';
import CircleLoading from '../components/common/CircleLoading';

class HomePage extends Component{
    constructor(){
        super();
        this.state={
            fadeIn:true,
            openDrawer:false,
            openSnackbar:false,
            isFreshing:false,
            fixedTop:0,
            scrollT:0
        };
        this.tabs=[
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
                <Header filter={selectedTab} fixedTop={this.state.fixedTop} tabs={this.tabs}>
                    {
                        this.tabs.map((tab,index)=>{
                            {console.log(1)}

                            (<div key={index}>
                                {((isFetching&&page==0)||(tab.filter!==selectedTab&&!tabData[tab.filter])) && <CircleLoading/>}
                                11
                            </div>)
                        })
                    }
                </Header>
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