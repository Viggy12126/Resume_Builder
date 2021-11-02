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

 class Education extends Component {
   
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
                       Education Details
                    </Typography>
                    <div className={classes.margin}>
                        <Grid container spacing={2} alignItems="center" lg={12}>
                         <Grid item sm={12} lg={4} md={4} xs={12}>

                         <TextField 
                         margin="dense"
                         variant="outlined"
                         name="college"
                         label="College/Unviersity"
                         style={{width: '80%'}}
                         required
                         value={values.college}
                         onChange={this.props.handleChange}
                         InputProps={{
                           endAdornment: (
                             <InputAdornment position="start">
                               <SchoolIcon />
                             </InputAdornment>
                           ),
                         }}
                         
                         />
                         </Grid>
                        
                        <Grid item sm={6} lg={4} md={4} xs={12}>
                      <TextField 
                         margin="dense"
                         variant="outlined"
                         name="fromyear1"
                         label="From Year"
                         type="date"
                         style={{width: '80%'}}
                         required
                         value={values.fromyear1}
                         onChange={this.props.handleChange}
                         InputProps={{
                           endAdornment: (
                             <InputAdornment position="start">
                               <DateRangeIcon />
                             </InputAdornment>
                           ),
                         }}
                      
                      />
                        </Grid>


                        <Grid item sm={6} lg={4} md={4} xs={12}>
                      <TextField 
                         margin="dense"
                         variant="outlined"
                         name="toyear1"
                         label="To Year"
                         type="date"
                         style={{width: '80%'}}
                         required
                         value={values.toyear1}
                         onChange={this.props.handleChange}
                         InputProps={{
                           endAdornment: (
                             <InputAdornment position="start">
                               <DateRangeIcon />
                             </InputAdornment>
                           ),
                         }}
                      
                      />
                        </Grid>

                     <Grid item sm={12} lg={4} xs={12} md={4}>
                      <TextField 
                      
                      margin="dense"
                      label="Qualification"
                      variant="outlined"
                      style={{width: '80%'}}
                      name="qualification1"
                      required
                      value={values.qualification1}
                      onChange={this.props.handleChange}
                    />
                      
                     </Grid>



                     <Grid item lg={8} md={8} xs={12} sm={12}> 
                     <TextField 
                      
                      margin="dense"
                      label="Description"
                      variant="outlined"
                      style={{width: '80%'}}
                      name="description1"
                      required
                      value={values.description1}
                      onChange={this.props.handleChange}
                    />
                     </Grid>


                         
                        </Grid>
                        <br />
           <Divider />

           <br />
           <Grid container spacing={2}>
                         <Grid item sm={12} lg={4} md={4} xs={12}>

                         <TextField 
                         margin="dense"
                         variant="outlined"
                         name="school"
                         label="School"
                         style={{width: '80%'}}
                         required
                         value={values.school}
                         onChange={this.props.handleChange}
                         InputProps={{
                           endAdornment: (
                             <InputAdornment position="start">
                               <SchoolIcon />
                             </InputAdornment>
                           ),
                         }}
                         
                         />
                         </Grid>
                        
                        <Grid item sm={6} lg={4} md={4} xs={12}>
                      <TextField 
                         margin="dense"
                         variant="outlined"
                         name="fromyear2"
                         label="From Year"
                         type="date"
                         style={{width: '80%'}}
                         required
                         value={values.fromyear2}
                         onChange={this.props.handleChange}
                         InputProps={{
                           endAdornment: (
                             <InputAdornment position="start">
                               <DateRangeIcon />
                             </InputAdornment>
                           ),
                         }}
                      
                      />
                        </Grid>


                        <Grid item sm={6} lg={4} md={4} xs={12}>
                      <TextField 
                         margin="dense"
                         variant="outlined"
                         name="toyear2"
                         label="To Year"
                         type="date"
                         style={{width: '80%'}}
                         required
                         value={values.toyear2}
                         onChange={this.props.handleChange}
                         InputProps={{
                           endAdornment: (
                             <InputAdornment position="start">
                               <DateRangeIcon />
                             </InputAdornment>
                           ),
                         }}
                      
                      />
                        </Grid>

                     <Grid item sm={4} lg={4} xs={12} md={12}>
                      <TextField 
                      
                      margin="dense"
                      label="Qualification"
                      variant="outlined"
                      style={{width: '80%'}}
                      name="qualification2"
                      required
                      value={values.qualification2}
                      onChange={this.props.handleChange}
                    />
                      
                     </Grid>



                     <Grid item lg={8} md={8} xs={8} sm={8}> 
                     <TextField 
                      
                      margin="dense"
                      label="Description"
                      variant="outlined"
                      style={{width: '80%'}}
                      name="description2"
                      required
                      value={values.description2}
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
        <p className="text-center text-muted">Page 2</p>
                   
            </Card>
        )
    }
}

export default withStyles (styles) (Education);
