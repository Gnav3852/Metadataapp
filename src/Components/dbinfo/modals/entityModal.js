import React, { useState, useEffect, Fragment } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

const EntityModal = ({ data }) => {
  const [show, setShow] = useState(false)
  const [hash, setHash] = useState({})
  const [finalData, setData] = useState([])

  useEffect(() => {
    if (data) {
      setHash({})
      data.forEach((e) => {
        const temp = e.datatype
        if (hash[temp]) {
          hash[temp]++
        } else {
          hash[temp] = 1
        }
      })
      let count = 0
      Object.entries(hash).forEach(([key, value]) => {
        finalData[count] = { type: key, value: value }
        count++
      })
    }
  }, [data])

  return (
    <div>
      <Button className='me-2 mb-2' onClick={() => setShow(true)}>
        Entity
      </Button>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Entity </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BarChart
            width={1600}
            height={750}
            data={finalData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='type' />
            <YAxis dataKey='value' />
            <Tooltip />
            <Legend />
            <Bar dataKey='value' fill='#82ca9d' />
          </BarChart>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default EntityModal
