import React from 'react';
import getSize from '../../utils/getSize';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

const {windowH} = getSize();
const style={
    display:'block',
    margin:`${0.5*windowH-30}px auto`
};

const CircleLoading=()=>{
    <MuiThemeProvider>
        <CircularProgress size={60} thickness={7} style={style}/>
    </MuiThemeProvider>
};

export default  CircleLoading;
