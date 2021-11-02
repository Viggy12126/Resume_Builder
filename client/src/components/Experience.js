import React, { Component } from 'react'
import {Card, CardHeader, CardContent, TextField,Divider,Button,Container} from '@material-ui/core';
import {Paper, withStyles, Grid,Typography} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SchoolIcon from '@material-ui/icons/School';
import DateRangeIcon from '@material-ui/icons/DateRange';
import {Row, Col} from 'react-bootstrap';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit * 1.5,
    },
    padding: {
      padding: theme.spacing.unit,
    },
  });

 class Experience extends Component {
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
        const {classes}=this.props;

        return (
            <Card className={classes.padding}>
                <CardContent>
                    <Typography variant="h4">
                    Experience Details
                    </Typography>
                    <br />
                    <Divider />
                    <br />

                    <Typography variant="h6">
                        Experience 1
                    </Typography>

                    <div className={classes.margin}>
                     <Grid container spacing={2} alignItems="center" lg={12}>

                     <Grid item sm={12} lg={4} md={4} xs={12}>
                         <TextField 
                          margin="dense"
                          variant="outlined"
                          name="institute1"
                          label="Institue/Organization"
                          style={{width: '80%'}}
                          // required
                          value={values.institute1}
                          onChange={this.props.handleChange}
                         
                         />
                     </Grid>

                    <Grid  item sm={6} lg={4} md={4} xs={12}>
                        <TextField 
                         margin="dense"
                         variant="outlined"
                         name="position1"
                         label="Position"
                        
                         style={{width: '80%'}}
                        //  required
                         value={values.position1}
                         onChange={this.props.handleChange}
                        />
                    </Grid>
                   
                   <Grid item sm={12} lg={4} md={4} xs={12}>
                   <TextField 
                     margin="dense"
                     variant="outlined"
                     name="duration1"
                     label="Duration"
                     
                     style={{width: '80%'}}
                    //  required
                     value={values.duration1}
                     onChange={this.props.handleChange}
                   
                   />
                   </Grid>

                   <Grid item lg={4} md={4} xs={12} sm={12}> 
                     <TextField 
                      
                      margin="dense"
                      label="Description"
                      variant="outlined"
                      style={{width: '80%'}}
                      name="experiencedescription1"
                      // required
                      value={values.experiencedescription1}
                      onChange={this.props.handleChange}
                    />
                     </Grid>

                     </Grid>
                     <br />
           <Divider />

           <br />

         


          
                    </div>


                    <Typography variant="h6">
                        Experience 2
                    </Typography>

                    <div className={classes.margin}>
                     <Grid container spacing={2} alignItems="center" lg={12}>

                     <Grid item sm={12} lg={4} md={4} xs={12}>
                         <TextField 
                          margin="dense"
                          variant="outlined"
                          name="institute2"
                          label="Institue/Organization"
                          style={{width: '80%'}}
                          // required
                          value={values.institute2}
                          onChange={this.props.handleChange}
                         
                         />
                     </Grid>

                    <Grid  item sm={6} lg={4} md={4} xs={12}>
                        <TextField 
                         margin="dense"
                         variant="outlined"
                         name="position2"
                         label="Position"
                        
                         style={{width: '80%'}}
                        //  required
                         value={values.position2}
                         onChange={this.props.handleChange}
                        />
                    </Grid>
                   
                   <Grid item sm={12} lg={4} md={4} xs={12}>
                   <TextField 
                     margin="dense"
                     variant="outlined"
                     name="duration2"
                     label="Duration"
                     
                     style={{width: '80%'}}
                    //  required
                     value={values.duration2}
                     onChange={this.props.handleChange}
                   
                   />
                   </Grid>

                   <Grid item lg={4} md={4} xs={12} sm={12}> 
                     <TextField 
                      
                      margin="dense"
                      label="Description"
                      variant="outlined"
                      style={{width: '80%'}}
                      name="experiencedescription2"
                      // required
                      value={values.experiencedescription2}
                      onChange={this.props.handleChange}
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
        <p className="text-center text-muted">Page 4</p>
            </Card>
        )
    }
}


export default withStyles (styles) (Experience);
