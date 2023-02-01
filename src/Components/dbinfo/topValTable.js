import React, { Fragment, useState, useEffect } from "react"
import axios from "axios"

//current version of react-table is 7.8.0 but we are using 6.0.0 currently for now
import ReactTable from "react-table-v6"
import "../../App.css"

const TopValTable = ({ db, schema, entity, attr, getData }) => {
  const [tableState, setTableInfo] = useState({
    tableData: [],
  })

  const { tableData } = tableState

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/attr/top/?db=${db}&schema=${schema}&entity=${entity}&attr=${attr}`
      )
      .then((res) => {
        setTableInfo({ ...tableState, tableData: res.data })
        getData(res.data)
      })
  }, [attr])

  if (!tableData.data) {
    return <div class='ui Large label'>Select Value</div>
  } else {
    const columnsx = Object.keys(tableData.columns).map((key) => ({
      Header: tableData.columns[key],
      accessor: key,
      Cell: ({ row, original }) => (
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "left",
          }}
        >
          {row[key]}
        </div>
      ),
    }))
    return (
      <ReactTable
        columns={columnsx}
        data={tableData.data}
        filterable={true}
        getTrProps={(state, rowInfo) => {
          if (rowInfo && rowInfo.row) {
            return {
              onClick: (e) => {
                console.log(e)
              },
              style: {},
            }
          } else {
            return {}
          }
        }}
      />
    )
  }
}

export default TopValTable
