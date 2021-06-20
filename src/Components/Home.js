import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container"

function Home() {
    return (<Jumbotron fluid>
      <Container>
        <h1>Budgeting App</h1>
        <p>
          This is the front-end for a full-stack budgeting application.
        </p>
        <p>Record and keep track of your transactions.</p>
      </Container>
    </Jumbotron>);
  }
  
  export default Home;
  