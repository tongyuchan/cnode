import React,{Component} from 'react';
import {connect} from 'react-redux';

import Header from '../components/common/Header/Header';
import CircleLoading from '../components/common/CircleLoading';


class DetailTopic extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {data,isFetching}=this.props;
        return (<div>
            <Header title="详情" isFetching={isFetching}/>

        </div>)
    }
}

function mapStateToProps(state){
    const {detailTopic} =state;
    const{data,isFetching}=detailTopic;
    return {data,isFetching};
}

export default connect(mapStateToProps)(DetailTopic)


