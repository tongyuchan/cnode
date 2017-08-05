import React,{Component} from 'react';
import {connect} from 'react-redux';

import Header from '../components/common/Header/Header';
import PersonList from '../components/Person/PersonList/PersonList';
import CircleLoading from '../components/common/CircleLoading'
import {fetchPerson} from '../actions/index';

class Person extends Component{
    componentWillMount(){
        const {dispatch}=this.props;
        dispatch(fetchPerson());
    }

    render(){
        const {history,isFetching,user}=this.props;
        return (
            <div>
                <Header history={history} title="个人中心" isFetching=""/>
                {isFetching?<CircleLoading/>:
                    <PersonList user={user}/>
                }
            </div>
        )
    }
};

function mapStateToProps(state){
    const {person}=state;
    const {user,isFetching}=person;
    return {
        user,
        isFetching
    }
};

export default connect(mapStateToProps)(Person);
