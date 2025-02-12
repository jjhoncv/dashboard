import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Box } from "../../components/Box";
import { Container } from "../../components/Container";
import {
  Button,
  Form,
  FormFoot,
  FormItem,
  FormLabel,
  Input,
} from "../../components/Form";
import { Page, PageBody, PageHead } from "../../components/Page";
import {
  FloatLoading,
  FloatMessage,
  FloatMessageBody,
  FloatMessageOptions,
} from "../../components/Float";
import * as authActions from "../../stores/auth/actions";

import "./style.scss";

export const Login: React.FC<any> = () => {
  const isFetching = useSelector((state: any) => state.auth.isFetching);
  const error = useSelector((state: any) => state.auth.error);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = (document.getElementById("username") as any).value;
    const password = (document.getElementById("password") as any).value;
    dispatch(authActions.login(username, password));
  };

  return (
    <Container>
      <>
        {!!error && (
          <FloatMessage show={!!error}>{error}</FloatMessage>
        )}
        {isFetching && <FloatLoading />}

        <Page>
          <PageHead>
            <h1>Login</h1>
          </PageHead>
          <PageBody>
            <Box type="box-middle">
              <Form onSubmit={(e) => handleSubmit(e)}>
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <Input fullWidth type="text" name="username" id="username" />
                </FormItem>
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <Input
                    fullWidth
                    type="password"
                    name="password"
                    id="password"
                  />
                </FormItem>
                <FormFoot>
                  <Input type="submit" value="Login" />
                  <p>
                    Si aún no eres usuario registrate{" "}
                    <NavLink exact to="/register">
                      aquí
                    </NavLink>
                  </p>
                </FormFoot>
              </Form>
            </Box>
          </PageBody>
        </Page>
      </>
    </Container>
  );
};
