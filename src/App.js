import { Container } from "react-bootstrap";
import {person} from './data';
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";
import React, { useEffect, useState } from "react";
function App() {

  const [personData,  setPersonData] = useState(person);
  const onDelete= () => {
    setPersonData([])
  }
  const onDisplayData= () => {
    setPersonData(person)
  }
  useEffect(()=>{
    setPersonData([])
  },[]);

  return (
    <div className="font color-body">
      <Container className="py-3">
        <DatesCount person={personData}/>
        <DatesList person={personData} />
        <DatesAction deleteData={onDelete} displayData={onDisplayData}/>

        
      </Container>
    </div>
  );
}

export default App;
