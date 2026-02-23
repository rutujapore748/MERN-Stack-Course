import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DetailsCard from './components/DetailsCard';


function App() {

  //Javascript
  console.log("pppppp");

  // Variable 
  const name = "Hoc";  //we can't change const value

  let age = 30;   // we can change value

  console.log(name, "name------>");

  console.log(age, "------");


  //String 
  const a = "Hoc";

  //Arrary
  const b = ["abc", "pqr", "mao", 12345];


  //Object
  const data = {
    name: "test",
    city: "Pune",
  };

  //if-else  = ternary operator

  const fullname = "Hoc"
  if (fullname == "ppp") {
    console.log(true)
  }
  else {
    console.log(false)
  }

  //function

  function addNumber() {
    console.log("Click")
  }

  //.map
  //async await



  const cardData = [
    {
      CardTitle: "Test 1",
      cardDescription: "Test Description 1"
    },

    {
      CardTitle: "Test 2",
      cardDescription: "Test Description 2"
    },

    {
      CardTitle: "Test 1",
      cardDescription: "Test Description 1"
    },

    {
      CardTitle: "Test 2",
      cardDescription: "Test Description 2"
    },

    {
      CardTitle: "Test 1",
      cardDescription: "Test Description 1"
    },

    {
      CardTitle: "Test 2",
      cardDescription: "Test Description 2"
    },
  ]

  console.log(cardData, "********")

  return (
    <>

      <button className='btn btn-primary' onClick={addNumber}>Click Me</button>

      <div className="container">
        <div className="row my-2">
          {
            cardData.map((each) =>

              <div className="col-md-3">

                <DetailsCard CardTitle={each.CardTitle} cardDescription={each.cardDescription} />

              </div>
            )
          }
        </div>

      </div>
    </>
  )
}

export default App
