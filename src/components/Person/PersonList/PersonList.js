import React,{Component} from 'react';
import './styles.scss';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const PersonList=(props)=>{
    const {user}=props;
    return (
        <MuiThemeProvider>
            <div>
                <div>
                    <img src={user.avatar_url}/>
                </div>
            </div>

        </MuiThemeProvider>
    )
};

export default PersonList;
