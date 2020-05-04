import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, Grid } from 'react-mdl';

class Projects extends Component {
    render () {
        return(
            <Grid className="project-style" >
             <Card shadow={1} style={{display:'flex',  justifyContent:'center', width: '70%', height: '350px', marginTop: '50px', marginLeft: '15%', marginBottom: '20%'}}>
              <CardTitle expand style={{color: '#fff', background: 'url(https://i.ya-webdesign.com/images/dogs-and-cats-png-8.png)  100%  #46B6AC'}}>Adopt a pet</CardTitle>
                <CardText>
                A website that shows some shelter in Calgary city, and promote the importance of adopting a pet instead of buying! 
                </CardText>
              <CardActions border>
                  <Button colored >
                  <a href="https://nailopes.github.io/comit-project/" target="_blank" rel="noopener noreferrer">
                  Go to the website
                  </a>
                  </Button>
              </CardActions>
             </Card>
            </Grid>
        )
    }
}

export default Projects;