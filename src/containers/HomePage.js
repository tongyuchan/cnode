import React,{Component} from 'react';
import {connect} from 'react-redux';

import Header from '../components/HomePage/Header/Header';
import CircleLoading from '../components/common/CircleLoading';
import Lists from '../components/HomePage/Lists/Lists'
import Login from '../components/HomePage/Login/Login';

import {fetchTopics,selectTab,fetchLogin,loginExit} from '../actions/index'
import getSize from '../utils/getSize';

class HomePage extends Component{
    constructor(props){
        super(props);
    }

    state={
        open:false,
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

    handleClick=(tab)=>{
        const {dispatch}=this.props;
        dispatch(selectTab(tab));
    }

    exit=()=>{
        const {dispatch}=this.props;
        window.localStorage.removeItem('cnodeL');
        window.localStorage.removeItem('cnodeA');
        dispatch(loginExit());
    }

    toggleFn=()=>{
        const {dispatch,accessToken,id}=this.props;
        if(!this.state.open && accessToken && !id){
            dispatch(fetchLogin(accessToken));
        }
        this.setState({open:!this.state.open});
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

    componentWillReceiveProps(newProps){
        const {selectedTab,isFetching,topics,dispatch,id,loginname,accessToken}=newProps;
        if(!isFetching && !topics.length){
            dispatch(fetchTopics(selectedTab))
        }
        //每次切换tab滚动条回到初始位置
        if(selectedTab!=this.props.selectedTab){
            window.scrollTo(0,0);
        }
        //保存登录信息
        if(id){
            window.localStorage.setItem('cnodeL',loginname);
            window.localStorage.setItem('cnodeA',accessToken);
        }
    }

    render(){
        const {
            selectedTab,
            tabData,
            isFetching,
            page,
            topics,
            avatar_url,
            loginname
        }=this.props;
        return (
            <div className={this.state.fadeIn?'fade-in':''}>
                <Header filter={selectedTab}  tabs={this.tabs} onClick={this.handleClick} toggleFn={this.toggleFn}>
                    {
                        this.tabs.map((tab,index)=>{
                            return (
                                <div key={index}>
                                    {((isFetching&&page===0) || (tab.filter!=selectedTab && !tabData[tab.filter])) && <CircleLoading/>}
                                    { (tab.filter==selectedTab && topics.length) ? <Lists topics={topics}/>:''}
                                </div>
                            )
                        })
                    }
                </Header>
                <Login open={this.state.open} toggleFn={this.toggleFn} loginname={loginname} img={avatar_url} exit={this.exit}/>
            </div>
        )
    }
};

function mapStateToProps(state,ownProps){
    const {
        homePage,
        login
    }=state;
    const {
        accessToken,
        id,
        loginname,
        avatar_url
    }=login;
    const {
        selectedTab,
        tabData
    }=homePage;
    const {
        isFetching,
        page,
        scrollT,
        topics
    }=tabData[selectedTab] || {isFetching:false,page:0,topics:[]};

    return {
        selectedTab,
        tabData,
        isFetching,
        page,
        topics,
        accessToken,
        id,
        loginname,
        avatar_url
    }
}

//mapDispatchToProps不传会默认给组件的props添加dispatch
export default connect(mapStateToProps)(HomePage);