import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "../../components/Box";
import { Container } from "../../components/Container";
import { FloatLoading, FloatMessage } from "../../components/Float";
import {
  Form,
  FormItem,
  FormLabel,
  Input,
  FormFoot,
} from "../../components/Form";
import { Page, PageHead, PageBody } from "../../components/Page";
import * as productActions from "../../stores/product";

export const ProductAdd = ({ history }) => {
  const isFetching = useSelector((state: any) => state.product.read.isFetching);
  const error = useSelector((state: any) => state.product.read.error);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = (document.getElementById("name") as any).value;
    const code = (document.getElementById("code") as any).value;
    const price = (document.getElementById("price") as any).value;
    const description = (document.getElementById("description") as any).value;
    dispatch(productActions.create({ name, code, price, description }));
    history.push("/products");
  };

  return (
    <Container>
      <>
        {!!error && <FloatMessage show={!!error}>{error}</FloatMessage>}
        {isFetching && <FloatLoading />}

        <Page>
          <PageHead>
            <h1>New Product</h1>
          </PageHead>
          <PageBody>
            <Box type="box-middle">
              <Form onSubmit={(e) => handleSubmit(e)}>
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <Input fullWidth type="text" name="name" id="name" />
                </FormItem>
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <Input fullWidth type="text" name="code" id="code" />
                </FormItem>
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <Input fullWidth type="text" name="price" id="price" />
                </FormItem>
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <Input
                    fullWidth
                    type="text"
                    name="description"
                    id="description"
                  />
                </FormItem>
                <FormFoot>
                  <Input type="submit" value="Add product" />
                </FormFoot>
              </Form>
            </Box>
          </PageBody>
        </Page>
      </>
    </Container>
  );
};
