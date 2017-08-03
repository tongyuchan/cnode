import React,{Component} from 'react';
import {connect} from 'react-redux';

import Header from '../components/common/Header/Header';
import CircleLoading from '../components/common/CircleLoading';
import Content from '../components/DetailTopic/Content/Content';
import Reply from '../components/DetailTopic/Reply/Reply';

import {fetchDetailTopic,clearDetailTopic} from '../actions/index';


class DetailTopic extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {dispatch,match} =this.props;
        dispatch(fetchDetailTopic(match.params.id))
    }

    componentWillUnmount(){
        const {dispatch}=this.props;
        dispatch(clearDetailTopic);
    }

    render(){
        const {data,isFetching}=this.props;
        return (<div>
            <Header title="详情" isFetching={isFetching}/>
            {isFetching && <CircleLoading/>}
            {data.content && <Content data={data}/>}
            {data.reply_count && <Reply count={data.reply_count} replyList={data.replies}/>}
        </div>)
    }
}

function mapStateToProps(state){
    const {detailTopic} =state;
    const{data,isFetching}=detailTopic;
    return {data,isFetching};
}

export default connect(mapStateToProps)(DetailTopic)


