import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap/";

import withAuth from "components/contexts/user/withAuth";
import CustomButton from "components/shared/buttons/CustomButton";

import "./Login.scss";

class Login extends Component {
  render() {
    const {
      handleChangeUser,
      handleChangePassw,
      handleSubmitForm,
      validateForm,
      user,
      passw
    } = this.props;

    return (
      <div className="login-container">
        <Grid>
          <Row>
            <Form
              horizontal
              className="login-container-form"
              onSubmit={handleSubmitForm}
            >
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
                  <FormControl
                    type="text"
                    id="userName"
                    value={user}
                    onChange={ev => handleChangeUser(ev.target.value)}
                    onBlur={ev => handleChangeUser(ev.target.value)}
                  />
                </Col>
                <FormGroup />
                <Col smOffset={2} sm={2}>
                  <ControlLabel htmlFor="userPassw">Password:</ControlLabel>
                </Col>
                <Col sm={5}>
                  <FormControl
                    type="text"
                    id="userPassw"
                    value={passw}
                    onChange={ev => handleChangePassw(ev.target.value)}
                    onBlur={ev => handleChangePassw(ev.target.value)}
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col>
                  <CustomButton
                    bsSize="large"
                    type="submit"
                    disabled={!validateForm()}
                  >
                    Sign in
                  </CustomButton>
                </Col>
              </FormGroup>
            </Form>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withAuth(Login);
