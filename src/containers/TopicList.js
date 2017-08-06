import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Header from '../components/common/Header/Header';
import CircleLoading from '../components/common/CircleLoading';
import transformDate from '../utils/transforDate';
import {fetchCollect} from '../actions/index'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List,ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

class TopicList extends Component{

    componentWillMount(){
        const {match,dispatch}=this.props;
        const index=match.params.id;
        if(index==2){
            dispatch(fetchCollect());
        }
    }

    render(){
        const {match,history,collect,recent_replies,recent_topics,isFetching}=this.props;
        const titleArr=['我创建的','我参与的','我收藏的'];
        const topicArr=[recent_topics,recent_replies,collect];
        const index=match.params.id;
        const arr=topicArr[index] || [];
        return (
            <div>
                <Header history={history} title={titleArr[index]}/>
                {isFetching?<CircleLoading/>:
                    <MuiThemeProvider>
                        <List style={{paddingTop:70}}>
                            {
                                arr.map((topic,index)=>{
                                    return (
                                        <Link key={index} to={`/topic/${topic.id}`} className="listItemLink">
                                            <ListItem
                                                leftAvatar={<Avatar src={topic.author.avatar_url}/>}
                                                primaryText={
                                                    <div className="listItemTitle">
                                                        <span>{topic.title}</span>
                                                    </div>
                                                }
                                                secondaryText={
                                                    <div className="listItemInfo">
                                                        <span style={{float:'right'}}>{transformDate(topic.create_at)}</span>
                                                    </div>
                                                }
                                            />
                                            <Divider />
                                        </Link>
                                    )
                                })
                            }
                            {
                                arr.length?'':
                                    <ListItem
                                        primaryText='暂时没有数据'
                                        style={{textAlign:'center',lineHeight:'200px'}}
                                    />
                            }
                        </List>
                    </MuiThemeProvider>
                }
            </div>
        )
    }
};

function mapStateToProps(state){
    const {person}=state;
    const {collect,recent_replies,recent_topics,isFetching}=person;
    return {collect,recent_replies,recent_topics,isFetching};
}

export default connect(mapStateToProps)(TopicList);