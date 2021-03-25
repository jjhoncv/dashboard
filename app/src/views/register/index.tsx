import * as React from "react";
import { Box } from "../../components/Box";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/Container";
import { FloatMessage, FloatLoading } from "../../components/Float";
import {
  Form,
  FormItem,
  FormLabel,
  Input,
  FormFoot,
} from "../../components/Form";
import { Page, PageHead, PageBody } from "../../components/Page";
import * as authActions from "../../stores/auth/actions";
import * as messageActions from "../../stores/message/actions";
import "./style.scss";

export const Register: React.FC<any> = () => {
  const isFetching = useSelector((state: any) => state.auth.isFetching);
  const error = useSelector((state: any) => state.messageAlert.text);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = (document.getElementById("name") as any).value;
    const lastname = (document.getElementById("lastname") as any).value;
    const email = (document.getElementById("email") as any).value;
    const username = (document.getElementById("username") as any).value;
    const password = (document.getElementById("password") as any).value;

    dispatch(authActions.register(name, lastname, email, username, password));
  };

  const handleCloseMessage = () => {
    dispatch(messageActions.hideAlert());
  };

  return (
    <Container>
      <>
        {!!error && (
          <FloatMessage handleClick={handleCloseMessage} show={!!error}>
            {error}
          </FloatMessage>
        )}
        {isFetching && <FloatLoading />}

        <Page>
          <PageHead>
            <h1>Register</h1>
          </PageHead>
          <PageBody>
            <Box type="box-middle">
              <Form onSubmit={(e) => handleSubmit(e)}>
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <Input fullWidth type="text" name="name" id="name" />
                </FormItem>
                <FormItem>
                  <FormLabel>Lastname</FormLabel>
                  <Input fullWidth type="text" name="lastname" id="lastname" />
                </FormItem>
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input fullWidth type="text" name="email" id="email" />
                </FormItem>
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
                  <Input type="submit" value="Register" />
                  <p>
                    Si yá estas registrado ingresa a{" "}
                    <NavLink exact to="/login">
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
