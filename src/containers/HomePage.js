import React,{Component} from 'react';
import {connect} from 'react-redux';

import Header from '../components/HomePage/Header/Header';
import CircleLoading from '../components/common/CircleLoading';
import Lists from '../components/HomePage/Lists/Lists'

import {fetchTopics} from '../actions/index'


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

    componentDidMount(){
        const {selectedTab,page,dispatch}=this.props;
        if(page===0){
            dispatch(fetchTopics(selectedTab))
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
                                    {((isFetching&&page===0)) && <CircleLoading/>}
                                    {(!(isFetching&&page===0)) && <Lists topics={topics}/>}
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