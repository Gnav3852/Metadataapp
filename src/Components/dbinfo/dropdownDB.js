import React, { Fragment, useEffect, useState } from "react"
import axios from "axios"
import { DropdownButton } from "react-bootstrap"

const DropdownDB = ({ getDatabase }) => {
  const [dropInfo, setDropInfo] = useState({
    dbList: null,
  })

  const { dbList } = dropInfo

  useEffect(() => {
    axios.get(`http://localhost:5000/api/db/`).then((res) => {
      setDropInfo({ ...dropInfo, dbList: res.data })
    })
  }, [])

  const setDB = (e) => {
    getDatabase(e.target.value)
  }

  if (!dbList) {
    return null
  } else {
    return (
      <Fragment>
        <DropdownButton
          title='Select DB'
          onClick={(e) => setDB(e)}
        >
          {dbList.map((dbListitem) => (
            <option className='dropdown-item' value={dbListitem.value}>
              {dbListitem.display}
            </option>
          ))}
        </DropdownButton>
      </Fragment>
    )
  }
}

export default DropdownDB
