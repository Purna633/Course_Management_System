import React, { useEffect } from "react";
import { Container,Button } from "reactstrap";
import './Home.css';


const Home=()=>{
  useEffect(()=>{
    document.title="Home || Courses Application"

  },[])
    return(

      <div className="jumbotron">
      <h1 className="display-4">Purna Application</h1>
      <p className="lead">This application is developed by Purna.</p>

      <Container>
        <Button color="primary" outline>Start Us</Button>
      </Container>
    
   
    </div>
    
    )
}
export default Home;