import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Contact extends Component {
    render () {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
             <Grid className="mainpage-grid">
                 <Cell col={12}>
                     
                     <div className="contact-text">
                      <h1>Contact me</h1>

                      <i class="fa fa-map-marker" aria-hidden="true" />
                     <p>Calgary, AB</p>

                     <i class="fa fa-phone" />
                     <p>+1(204)698-XXXX</p>

                     <i class="fa fa-envelope" />
                     <p>naiaralopesms@gmail.com</p>
                     
                      
                      
                     </div>
                 </Cell>
             </Grid>

            </div>
        )
    }
}

export default Contact;