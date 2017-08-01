import React,{Component} from 'react';
import {connect} from 'react-redux';

import Header from '../components/HomePage/Header/Header';
import CircleLoading from '../components/common/CircleLoading';
import Lists from '../components/HomePage/Lists/Lists'

import {fetchTopics} from '../actions/index'
import getSize from '../utils/getSize';

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

    loadMore=()=>{
        const {selectedTab,page,isFetching,dispatch}=this.props;
        let iPage=page;
        if(!isFetching){
            dispatch(fetchTopics(selectedTab,++iPage))
        }
    }

    componentDidMount(){
        const {selectedTab,page,dispatch}=this.props;
        if(page===0){
            dispatch(fetchTopics(selectedTab))
        }
        window.onscroll=()=>{
            const {windowH,scrollT,contentH} =getSize();
            if(windowH+scrollT+100>contentH){
                this.loadMore();
            }
        }
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
                            return (
                                <div key={index}>
                                    {((isFetching&&page===0) || (tab.filter!=selectedTab && !tabData[tab.filter])) && <CircleLoading/>}
                                    { tab.filter==selectedTab && <Lists topics={topics}/>}
                                </div>
                            )
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