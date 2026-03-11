import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from 'react-toastify';




import "./style.css"
import { useEffect, useState } from 'react';

function App() {

  const [itemName, setItemName] = useState()   //Hook - use State Hook
  const [itemData , setData] = useState()

  console.log(itemName, "Item Name Value");

  const handleOnChange = (event) => {

    setItemName(event.target.value)

    console.log("Typing on Input Field");
  };

  function SubmitForm(e) {
    e.preventDefault();
    console.log("Form Submitted");



    toast.success('Form Submitted', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const getAllItemData = async () => {

    try {

      const apiResponse = await fetch("http://localhost:9090/api/get-all-item");
      const responseData = await apiResponse.json();
      setData(responseData.data);

      console.log(responseData);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllItemData();
  }, []);

  console.log(
    itemData, "itemData ==>"
  )

  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <h2 className='text-danger text-center my-5'>CRUD MERN STack Project Start</h2>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h3 className='border text-center'>Create Item</h3>

            <Form className='my-5'>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Item Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Item Name" onChange={() => handleOnChange(event)} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder='Enter Description' />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Purchase Price</Form.Label>
                  <Form.Control type="number" placeholder="Enter Purchase Price" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Selling Price</Form.Label>
                  <Form.Control type="number" placeholder="Enter Selling Price" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="number" placeholder='Enter Quantity' />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Unit</Form.Label>
                  <Form.Select defaultValue="Choose Unit">
                    <option>Choose Unit</option>
                    <option>Piece</option>
                    <option>Box</option>
                    <option>Kg</option>
                    <option>Gram</option>
                    <option>Litre</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <div className='text-center'>
                <Button variant="primary" type="submit" className='w-50' onClick={SubmitForm}>
                  Submit
                </Button>
              </div>
            </Form>

          </div>
          <div className='col-md-6'>
            <h3 className='border text-center'>Get Item</h3>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Item Name</th>
                  <th>Description</th>
                  <th>Purchase Price</th>
                  <th>Selling Price</th>
                  <th>Quantity</th>
                  <th>Unit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {
                    itemData && itemData.map((each , index) =>{

                      return(
                        <tr>
                          <td>{index + 1}</td>
                          <td>{each.name}</td>
                          <td>{each.description}</td>
                          <td>{each.purchasePrice}</td>
                          <td>{each.sellingPrice}</td>
                          <td>{each.quantity}</td>
                          <td>{each.unit}</td>
                          <td className='d-flex'>
                            <button className='btn btn-sucess'>Edit</button>
                            <button className='btn btn-danger mx-2'>Delet</button>
                          </td>
                        </tr>
                      )

                    })
                  }
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
