import React, { Component } from 'react'
import {Card, CardHeader, CardContent, TextField,Divider,Button,Container} from '@material-ui/core';
import {Paper, withStyles, Grid,Typography} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import InputAdornment from '@material-ui/core/InputAdornment';
import SchoolIcon from '@material-ui/icons/School';
import DateRangeIcon from '@material-ui/icons/DateRange';
import {Row, Col} from 'react-bootstrap';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import axios from 'axios';
import {saveAs} from 'file-saver';

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit * 1.5,
    },
    padding: {
      padding: theme.spacing.unit,
    },
  });

 class Extras extends Component {
    back = e => {
        e.preventDefault ();
        this.props.prevStep ();
      };

      createAndDownloadPDF = () => {
        axios
          .post ('/create-pdf', this.props.values)
            .then (() => {
              axios
                .get ('fetch-pdf', {responseType: 'arraybuffer'})
                .then (res => {
                  const pdfBlob = new Blob ([res.data], {type: 'application/pdf'});
                  saveAs (pdfBlob, `${this.props.values.firstname}'s Resume.pdf`);
                })
                .catch (err => {
                  console.log (err);
                });
            })
            .catch (err => {
              console.log (err);
            });
      };

    render() {
        const {values} = this.props;
        const {classes}=this.props;

        return (
            <Card className={classes.padding}>
            <CardContent>
                <Typography variant="h4">
                    Extras Details
                </Typography>
                <br />
                <Divider />
                <br />

                <Typography variant="h6">
                        Technical Skills
                    </Typography>

                <Grid container spacing={2} alignItems="center" lg={12}>

                <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="skill1"
                  label="Skill 1"
                  style={{width: '90%'}}
                  value={values.skill1}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="skill2"
                  label="Skill 2"
                  style={{width: '90%'}}
                  value={values.skill2}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="skill3"
                  label="Skill 3"
                  style={{width: '90%'}}
                  value={values.skill3}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="skill4"
                  label="Skill 4"
                  style={{width: '90%'}}
                  value={values.skill4}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="skill5"
                  label="Skill 5"
                  style={{width: '90%'}}
                  value={values.skill5}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="skill6"
                  label="Skill 6"
                  style={{width: '90%'}}
                  value={values.skill6}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>

                </Grid>

                <br />
                <Divider />
                <br />


                <Typography variant="h6">
                       Hobbies/Interest
                    </Typography>

                    <Grid container spacing={2} alignItems="center" lg={12}>

<Grid item md={4} sm={12} xs={12} lg={4}>
<TextField
  margin="dense"
  variant="outlined"
  name="interest1"
  label="Interest 1"
  style={{width: '90%'}}
  value={values.interest1}
  onChange={this.props.handleChange}
  InputProps={{
    endAdornment: <InputAdornment position="start" />,
  }}
/>
</Grid>

<Grid item md={4} sm={12} xs={12} lg={4}>
<TextField
  margin="dense"
  variant="outlined"
  name="interest2"
  label="Interest 2"
  style={{width: '90%'}}
  value={values.interest2}
  onChange={this.props.handleChange}
  InputProps={{
    endAdornment: <InputAdornment position="start" />,
  }}
/>
</Grid>

<Grid item md={4} sm={12} xs={12} lg={4}>
<TextField
  margin="dense"
  variant="outlined"
  name="interest3"
  label="Interest 3"
  style={{width: '90%'}}
  value={values.interest3}
  onChange={this.props.handleChange}
  InputProps={{
    endAdornment: <InputAdornment position="start" />,
  }}
/>
</Grid>

<Grid item md={4} sm={12} xs={12} lg={4}>
<TextField
  margin="dense"
  variant="outlined"
  name="interest4"
  label="Interest 4"
  style={{width: '90%'}}
  value={values.interest4}
  onChange={this.props.handleChange}
  InputProps={{
    endAdornment: <InputAdornment position="start" />,
  }}
/>
</Grid>

<Grid item md={4} sm={12} xs={12} lg={4}>
<TextField
  margin="dense"
  variant="outlined"
  name="interest5"
  label="Interest 5"
  style={{width: '90%'}}
  value={values.interest5}
  onChange={this.props.handleChange}
  InputProps={{
    endAdornment: <InputAdornment position="start" />,
  }}
/>
</Grid>

<Grid item md={4} sm={12} xs={12} lg={4}>
<TextField
  margin="dense"
  variant="outlined"
  name="interest6"
  label="Interest 6"
  style={{width: '90%'}}
  value={values.interest6}
  onChange={this.props.handleChange}
  InputProps={{
    endAdornment: <InputAdornment position="start" />,
  }}
/>
</Grid>

</Grid>


            </CardContent>

            <br />
            <div className="buttons">
              <Row>
                {/* <Col lg={3} xs={0} /> */}
                <Col lg={3} xs={5}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.back}
                   
                    startIcon={<NavigateBeforeIcon />}
                  >
                    Back
                  </Button>
                </Col>
                <Col lg={3} xs={5}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.continue}
                    disabled
                    endIcon={<NavigateNextIcon />}
                  >
                    Next
                  </Button>
                </Col>
                {/* <Col lg={3} xs={1} /> */}
              </Row>
              </div>

              <br />
              <br />

              <Button
            variant="contained"
            color="primary"
            onClick={this.createAndDownloadPDF}
            endIcon={<GetAppIcon />}
          >
            Download Resume
          </Button>
            </Card>
        )
    }
}

export default  withStyles (styles) (Extras);
