import React,{Component} from 'react';

import Header from '../components/common/Header/Header';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component{
    render(){
        const {history}=this.props;
        return (
            <MuiThemeProvider>
               <div>
                   <Header history={history} title="登录" isFetching={false}/>
                   <div style={{paddingTop:110,textAlign:'center'}}>
                       <TextField
                           hintText="请输入Access Token"
                           floatingLabelText="请输入Access Token"
                       />
                        <RaisedButton
                            label="登录"
                            primary={true}
                            style={{display:'block',margin:'20px auto 0',width:100}}
                        />
                   </div>
               </div>
            </MuiThemeProvider>
        )
    }
}

export default Login;