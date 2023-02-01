import React, { useState, useEffect, Fragment } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

const DownloadModal = ({ data }) => {
  const [show, setShow] = useState(false)
  const [csv, setCsv] = useState(null)

  useEffect(() => {
    if (data.columns != null) {
      var csv = "Count,Percent," + data.columns.value + "\n"
      const temp = data.data

      temp.forEach((e) => {
        csv += e.cnt + "," + e.prct + "," + e.value + "\n"
      })

      setCsv(csv)
    }
  }, [data])

  const downloadData = () => {
    var hiddenElement = document.createElement("a")
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv)
    hiddenElement.target = "_blank"

    //provide the name for the CSV file to be downloaded
    hiddenElement.download = "DATA.csv"
    hiddenElement.click()
  }

  return (
    <div>
      <Button className='me-2 mb-2' onClick={() => setShow(true)}>
        Download
      </Button>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Data Down </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button className='me-2 mb-2' onClick={() => downloadData()}>
            Download
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default DownloadModal
