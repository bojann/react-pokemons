import React from "react";

import { LoginContext } from "components/contexts/user/LoginContext";

const withAuth = ChildComponent => props => (
  <LoginContext.Consumer>
    {loginContext => <ChildComponent {...props} {...loginContext} />}
  </LoginContext.Consumer>
);
export default withAuth;
