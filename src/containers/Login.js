import React,{Component} from 'react';
import {connect} from 'react-redux';

import Header from '../components/common/Header/Header';
import {inputAccessToken,fetchLogin} from '../actions/index';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component{
    constructor(props){
        super(props)
    }

    state={
        opacity:1,
        error:''
    }

    inputValue=(value)=>{
        const {dispatch}=this.props;
        dispatch(inputAccessToken(value));
        if(value){
            this.setState({opacity:0,error:''});
        }else{
            this.setState({opacity:1,error:''});
        }
    }

    login=()=>{
        const {accessToken,dispatch,error}=this.props;
        if(accessToken){
            dispatch(fetchLogin(accessToken));
            this.setState({error});
        }else{
            this.setState({error:'请输入Access Token'});
        }
    }

    componentWillReceiveProps(newProps){
        if(newProps.id){
            alert(1)
        }
    }

    render(){
        const {history,accessToken,isFetching,error}=this.props;
        return (
            <MuiThemeProvider>
               <div>
                   <Header history={history} title="登录" isFetching={false}/>
                   <div style={{paddingTop:110,textAlign:'center'}}>
                       <TextField
                           floatingLabelText='请输入Access Token'
                           floatingLabelStyle={{opacity:this.state.opacity}}
                           value={accessToken}
                           errorText={this.state.error || error}
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
                                    this.login();
                                }
                            }
                            disabled={isFetching}
                        />
                   </div>
               </div>
            </MuiThemeProvider>
        )
    }
}

function mapStateToProps(state){
    const {login}=state;
    const {accessToken,isFetching,error,id}=login;
    return {
        accessToken,
        isFetching,
        error,
        id
    }
}

export default connect(mapStateToProps)(Login);