import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Mainpage extends Component {
    render () {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
             <Grid className="mainpage-grid">
                 <Cell col={12}>
                     
                     <div className="banner-text">
                    
                     <img
                         src="https://media-exp1.licdn.com/dms/image/C4D03AQHuU47ZvdT38Q/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=mlppRNFylUiQYN49AGVeN_MAIqHGz2yaI5EAtKhr-I4"
                         alt="avatar"
                         className="avatar-img"
                     />
                     <h1>Naiara Lopes</h1>
                      <h1>Front End Web Developer</h1>
                      

                      <hr/>

                      <p>HTML | CSS | JavaScript | Bootstrap | React Native | NodeJs</p>
                      <div className="social-links">

                      {/* Linkedin */}
                      <a href="https://ca.linkedin.com/in/naiaralopes/en" rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-linkedin-square"  aria-hidden="true" />
                      </a>

                      {/* Github */}
                      <a href="https://github.com/nailopes" rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-github-square"  aria-hidden="true" />
                      </a>

                      </div>
                     </div>
                 </Cell>
             </Grid>

            </div>
        )
    }
}

export default Mainpage;