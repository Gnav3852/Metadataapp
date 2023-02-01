import React, { Fragment, useState, useEffect } from "react"
import axios from "axios"

import TreeMenu from "react-simple-tree-menu"
import "../../App.css"

const SchTree = ({ db, getEntity }) => {
  const [treeData, setTreeInfo] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/schema/tree/?db=${db}`).then((res) => {
      setTreeInfo(res.data)
    })
  }, [db])

  if (!db) {
    return <div class='ui Large label'>Select Database</div>
  } else {
    return (
      <Fragment>
        <TreeMenu
          data={treeData}
          hasSearch={false}
          debounceTime={125}
          initialOpenNodes=''
          onClickItem={({ key }) => {
            getEntity(key)
          }}
        />
      </Fragment>
    )
  }
}

export default SchTree
