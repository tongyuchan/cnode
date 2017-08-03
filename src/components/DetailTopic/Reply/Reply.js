import React,{Component} from 'react';

import './style.scss';
import transforDate from '../../../utils/transforDate';

import MuiThenemProvider from 'material-ui/styles/MuiThemeProvider';
import {List,ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';


const Reply=(props)=>{
    const {count,replyList}=props;
    console.log(replyList)
    return (
        <MuiThenemProvider>
            <div>
                <div className="replyTitle">回复列表（共{count}条）</div>
                <List>
                    {
                        replyList.map((reply,index)=>{
                            return (
                                <div  key={index}>
                                    <ListItem
                                        leftAvatar={<Avatar src={reply.author.avatar_url}/>}
                                        primaryText={
                                            <div className="replyName">
                                                <span style={{fontWeight:'bold'}}>{reply.author.loginname}</span>
                                                <span style={{float:'right',color:'#afafaf',fontSize:14}}>{transforDate(reply.create_at)}</span>
                                            </div>
                                        }
                                        secondaryText={
                                            <div dangerouslySetInnerHTML={{__html:reply.content}} className="replyContent"  style={{whiteSpace:'normal',overflow:'visible',textOverflow:'inherit',height:'auto'}}></div>
                                        }
                                    />
                                    <Divider/>
                                </div>
                            )
                        })
                    }
                </List>
            </div>
        </MuiThenemProvider>
    )
};

export default Reply;



