import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const DatesAction = ({deleteData, displayData}) => {
  return (
    <Row className="justify-content-center my-3">
          <Col sm="8" className="d-flex justify-content-between">
            <Button onClick={displayData} className="btn btn-primary"> عرض المواعيد</Button>
            <Button onClick={deleteData} className="btn btn-danger">مسح الكل</Button>
          </Col>
        </Row>
  )
}

export default DatesAction
