import React, { Component } from 'react';
import { Grid } from 'react-mdl';

class Resume extends Component {
    render () {
        return(
            <div style={{margin: 'auto', width: '100%'}}>
             <Grid className="resume-grid">
                 <img 
                     src="https://static.wixstatic.com/media/709944_b0e366f84440466fac3cbe131ea230b4~mv2.gif"
                     alt="workinprogress"
                     className="workinprogress-img"
                 />
             </Grid>
            </div>
        )
    }
}

export default Resume;