import React, { Fragment, useState, useEffect } from "react"
import axios from "axios"

//current version of react-table is 7.8.0 but we are using 6.0.0 currently for now
import ReactTable from "react-table-v6"
import "../../App.css"


const SchTable = ({ db, getEntity }) => {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/schema/tree/?db=${db}`).then((res) => {
      setTableData(res.data)
      console.log(res.data)
    })
  }, [db])

  return <div>table</div>
}

export default SchTable
