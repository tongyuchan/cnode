import React,{Component} from 'react';
import {connect} from 'react-redux';

import Header from '../components/common/Header/Header';
import {inputAccessToken} from '../actions/index';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component{
    constructor(props){
        super(props)
    }

    state={
        opacity:1
    }

    inputValue=(value)=>{
        const {dispatch}=this.props;
        dispatch(inputAccessToken(value));
        if(value){
            this.setState({opacity:0});
        }else{
            this.setState({opacity:1});
        }
    }

    login=()=>{
        const {accessToken}=this.props;
        if(accessToken){

        }
    }

    render(){
        const {history,accessToken}=this.props;
        return (
            <MuiThemeProvider>
               <div>
                   <Header history={history} title="登录" isFetching={false}/>
                   <div style={{paddingTop:110,textAlign:'center'}}>
                       <TextField
                           floatingLabelText='请输入Access Token'
                           floatingLabelStyle={{opacity:this.state.opacity}}
                           value={accessToken}
                           onChange={
                               (event,newValue)=>{
                                   this.inputValue(newValue)
                               }
                           }
                       />
                        <RaisedButton
                            label="登录"
                            primary={true}
                            style={{display:'block',margin:'20px auto 0',width:100}}
                            onTouchTap={
                                (event)=>{

                                }
                            }
                        />
                   </div>
               </div>
            </MuiThemeProvider>
        )
    }
}

function mapStateToProps(state){
    const {login}=state;
    const {accesstoken}=login;
    return {
        accesstoken
    }
}

export default connect(mapStateToProps)(Login);