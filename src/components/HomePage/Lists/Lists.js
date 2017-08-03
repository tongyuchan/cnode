import React,{Component} from 'react';
import FlipMove from 'react-flip-move'; //This module was built to tackle the common but arduous problem of animating a list of items when the list's order changes.
import {Link} from 'react-router-dom';

import './style.scss';
import transformDate from '../../../utils/transforDate'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import{List,ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';    //Avatars can be used to represent people or objects.



const Lists=(props)=>{
    const{topics}=props;
    let disableAllAnimations=topics.length==20?false:true;
    let enterAnimation={
        from:{
            transform:'translateY(-80px)',
            opacity:0
        },
        to:{
            transform:'translateY(0)',
            opacity:1
        }
    };
    const tabChineseName={
        all:'全部',
        good:'精华',
        share:'分享',
        ask:'问答',
        job:'招聘'
    };
    return (
        <div>
            <div className='lists'>
                <MuiThemeProvider>
                    <List>
                        <FlipMove
                            disableAllAnimations={disableAllAnimations}
                            enterAnimation={enterAnimation}
                            easing="ease-out"
                            duration="400"
                            staggerDelayBy='40'
                            staggerDurationBy="4"
                        >
                            {
                                topics.map((topic,index)=>{
                                    return(
                                        <Link key={index} to={`/topic/${topic.id}`} className="listItemLink">
                                            <ListItem
                                                leftAvatar={<Avatar src={topic.author.avatar_url}/>}
                                                primaryText={
                                                    <div className="listItemTitle">
                                                        {topic.top &&　<span style={{color:'blue'}}>顶</span>}
                                                        {topic.good && <span style={{color:'red'}}>精</span>}
                                                        <span>{topic.title}</span>
                                                    </div>
                                                }
                                                secondaryText={
                                                    <div className="listItemInfo">
                                                        <span>{`${topic.reply_count}/${topic.visit_count}`}</span>
                                                        <span>{tabChineseName[topic.tab]}</span>
                                                        <span style={{float:'right'}}>{transformDate(topic.create_at)}</span>
                                                    </div>
                                                }
                                            />
                                            <Divider inset={true} />
                                        </Link>
                                    )
                                })
                            }
                        </FlipMove>
                    </List>
                </MuiThemeProvider>
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        </div>
    )
};

export default Lists;