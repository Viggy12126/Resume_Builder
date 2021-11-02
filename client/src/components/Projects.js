import React, { Component } from 'react'
import {Paper, withStyles, Grid,Typography,Card, CardHeader, CardContent, TextField,Divider,Button,Container} from '@material-ui/core';
import {Row, Col} from 'react-bootstrap';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import TitleIcon from '@material-ui/icons/Title';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinkIcon from '@material-ui/icons/Link';
import DescriptionIcon from '@material-ui/icons/Description';

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit * 1,
    },
    padding: {
      padding: theme.spacing.unit,
    },
  });



 class Projects extends Component {
    continue = e => {
        e.preventDefault ();
        this.props.nextStep ();
      };
    
      back = e => {
        e.preventDefault ();
        this.props.prevStep ();
      };

    render() {
        const {values} = this.props;
        return (
           <Card>
               <CardContent>
                   <Typography variant="h4">
                       Project Details
                   </Typography>

<br />
                   <div>
                       <Grid>
                           <Grid>
                               <Typography variant="h5">
                                   Project 1
                               </Typography>
                               <TextField 
                                margin="dense"
                                variant="outlined"
                                name="title1"
                                label="Title"
                                style={{width: '80%'}}
                                // required
                                value={values.title1}
                                onChange={this.props.handleChange}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <TitleIcon />
                                      </InputAdornment>
                                    ),
                                  }}

                            />
                            <TextField

                     
                                margin="dense"
                                variant="outlined"
                                name="link1"
                                label="Link"
                                style={{width: '80%'}}
                                // required
                                value={values.link1}
                                onChange={this.props.handleChange}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <LinkIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                               
                               />

                             <TextField 
                                margin="dense"
                                variant="outlined"
                                name="projectDescription1"
                                label="Description"
                                style={{width: '80%'}}
                                // required
                                value={values.projectDescription1}
                                onChange={this.props.handleChange}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <DescriptionIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                               />
                               
                           </Grid>
                           <br />
                           <Divider />
                           <br />

                           <Grid>
                               <Typography variant="h5">
                                   Project 2
                               </Typography>
                               <TextField 
                                margin="dense"
                                variant="outlined"
                                name="title2"
                                label="Title"
                                style={{width: '80%'}}
                                // required
                                value={values.title2}
                                onChange={this.props.handleChange}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <TitleIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                               />

                          <TextField 
                                margin="dense"
                                variant="outlined"
                                name="link2"
                                label="Link"
                                style={{width: '80%'}}
                                // required
                                value={values.link2}
                                onChange={this.props.handleChange}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <LinkIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                               />

                             <TextField 
                                margin="dense"
                                variant="outlined"
                                name="projectDescription2"
                                label="Description"
                                style={{width: '80%'}}
                                // required
                                value={values.projectDescription2}
                                onChange={this.props.handleChange}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <DescriptionIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                               />
                               
                           </Grid>

                           <br />
                           <Divider />
                           <br />

                           <Grid>
                               <Typography variant="h5">
                                   Project 3
                               </Typography>
                               <TextField 
                                margin="dense"
                                variant="outlined"
                                name="title3"
                                label="Title"
                                style={{width: '80%'}}
                                // required
                                value={values.title3}
                                onChange={this.props.handleChange}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <TitleIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                               />

                          <TextField 
                                margin="dense"
                                variant="outlined"
                                name="link3"
                                label="Link"
                                style={{width: '80%'}}
                                // required
                                value={values.link3}
                                onChange={this.props.handleChange}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <LinkIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                               />

                             <TextField 
                                margin="dense"
                                variant="outlined"
                                name="projectDescription3"
                                label="Description"
                                style={{width: '80%'}}
                                // required
                                value={values.projectDescription3}
                                onChange={this.props.handleChange}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <DescriptionIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                               />
                               
                           </Grid>
                       </Grid>
                   </div>
               </CardContent>

               <div className="buttons">
          <Row>
            {/* <Col xs={4} /> */}
            <Col xs={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.back}
                startIcon={<NavigateBeforeIcon />}
              >
                Back
              </Button>
            </Col>
            <Col xs={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.continue}
                endIcon={<NavigateNextIcon />}
              >
                Next
              </Button>
            </Col>
            {/* <Col xs={4} /> */}
          </Row>
        </div>
        <p className="text-center text-muted">Page 3</p>
           </Card>
        )
    }
}

export default withStyles (styles) (Projects);