import * as React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/Container";
import {
  FloatMessage,
  FloatLoading,
  FloatMessageBody,
  FloatMessageOptions,
} from "../../components/Float";
import { Page, PageHead, PageBody } from "../../components/Page";
import { Table } from "../../components/Table";
import { Button } from "../../components/Form";

import * as productActions from "../../stores/product";

const Option: React.FC<any> = ({ id, handleDelete }) => {
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickEdit = () => {
    history.push("products/edit/" + id);
  };

  const handleAceptarClick = () => {
    dispatch(productActions.remove(id))  
    handleDelete && handleDelete();    
  };
  return (
    <>
      <FloatMessage show={show} hide={() => setShow(false)}>
        <FloatMessageBody> {`¿Esta seguro de eliminar el registro?`}</FloatMessageBody>
        <FloatMessageOptions>
          <Button handleClick={() => handleAceptarClick()}>Aceptar</Button>
          <Button handleClick={() => setShow(false)}>Cancelar</Button>
        </FloatMessageOptions>
      </FloatMessage>
      <span onClick={() => handleClickEdit()}>Edit</span>
      <span onClick={() => setShow(true)}>Remove</span>
    </>
  );
};

export const ProductList = () => {
  const isFetching = useSelector((state: any) => state.product.read.isFetching);
  const data = useSelector((state: any) => state.product.read.data);
  const error = useSelector((state: any) => state.product.read.error);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(productActions.read())
  };
 
  React.useEffect(() => {
    dispatch(productActions.read())  
  }, []);

  return (
    <Container>
      <>
        {!!error && <FloatMessage show={!!error}>{error}</FloatMessage>}
        {isFetching && <FloatLoading />}

        <Page>
          <PageHead>
            <h1>Products</h1>
          </PageHead>
          <PageBody>
            <Table
              Component={(props) => (
                <Option {...props} handleDelete={handleDelete}/>
              )}
              grid={data}
            />
          </PageBody>
        </Page>
      </>
    </Container>
  );
};
