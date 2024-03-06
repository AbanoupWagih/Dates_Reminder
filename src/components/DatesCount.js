import React from 'react'
import { Col, Row } from 'react-bootstrap';
// import { person } from '../data';

const DatesCount = ({person}) => {
  return (
        <Row className="justify-content-center">
          <Col sm="8" className="py-2">
            لديك {person.length} مواعيد اليوم
          </Col>
        </Row>
  )
}

export default DatesCount;
