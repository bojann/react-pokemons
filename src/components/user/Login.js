import React, { Component } from 'react'
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap/lib/";

import './Login.scss'

export default class Login extends Component {
  
  render() {
    return(
      <Grid>
        <Row>
          <Form horizontal className="sign-in">
            <FormGroup>
              <Col sm={12}>
                <h3>Sign In please:</h3>
              </Col>
            </FormGroup>
            
            <FormGroup>
              <Col smOffset={2} sm={2}>
                <ControlLabel htmlFor="userName">User name:</ControlLabel>
              </Col>
              <Col sm={5}>
                <FormControl type="text" id="userName" />
              </Col>
            <FormGroup>
              
            </FormGroup>
              <Col smOffset={2} sm={2}>
                <ControlLabel htmlFor="userPassw">Password:</ControlLabel>
              </Col>
              <Col sm={5}>
                <FormControl type="text" id="userPassw" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col>
                <Button bsSize="large" type="submit">Sign in</Button>
              </Col>
            </FormGroup>
          </Form>          
        </Row>  
      </Grid>
    )
  }
}