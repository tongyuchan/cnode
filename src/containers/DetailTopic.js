import React,{Component} from 'react';
import {connect} from 'react-redux';

class DetailTopic extends Component{
    render(){
        return (<div>1</div>)
    }
}

function mapStateToProps(){
    return {}
}

export default connect(mapStateToProps)(DetailTopic)


