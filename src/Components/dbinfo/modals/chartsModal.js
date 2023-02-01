import React, { useState, useEffect, Fragment } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

import AreaDisplay from "../charts/area"
import BarDisplay from "../charts/bar"
import LineDisplay from "../charts/line"

const ChartsModal = ({ columns, data }) => {
  const [show, setShow] = useState(false)
  const [chart, setChart] = useState(null)


  return (
    <div>
      <Button className='me-2 mb-2' onClick={() => setShow(true)}>
        Charts
      </Button>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Charts </Modal.Title>
          <Button className='me-2 mb-2' onClick={() => setChart("line")}>
            Line Chart
          </Button>
          <Button className='me-2 mb-2' onClick={() => setChart("bar")}>
            Bar Chart
          </Button>
          <Button className='me-2 mb-2' onClick={() => setChart("area")}>
            Area Chart
          </Button>
        </Modal.Header>
        <Modal.Body>
          {chart === "bar" && (
            <Fragment>
              <BarDisplay columns={columns} data={data} />
            </Fragment>
          )}
          {chart === "line" && (
            <Fragment>
              <LineDisplay columns={columns} data={data} />
            </Fragment>
          )}
          {chart === "area" && (
            <Fragment>
              <AreaDisplay columns={columns} data={data} />
            </Fragment>
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ChartsModal
