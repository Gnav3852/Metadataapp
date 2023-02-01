import React, { useState, Fragment } from "react"
import { Row, Col, Container, Button } from "react-bootstrap"

import DropdownDB from "../dbinfo/dropdownDB"
import SchTree from "../dbinfo/schTree"
import EntityTable from "../dbinfo/entityTable"
import TopValTable from "../dbinfo/topValTable"
import ChartsModal from "../dbinfo/modals/chartsModal"
import EntityModal from "../dbinfo/modals/entityModal"
import SchTable from "../dbinfo/schTable"
import DownloadModal from '../dbinfo/modals/downloadModal'

const Dbinfo = () => {
  const [dbData, setDbData] = useState({
    data: [],
    entityData: [],
    tableToggle: false,
    db: null,
    schema: null,
    entity: null,
    attr: null,
  })

  const { data, db, schema, entity, attr, entityData, tableToggle } = dbData

  const getDatabase = (db) => {
    setDbData({ ...dbData, db: db })
  }

  const getEntity = (schemaEntityVal) => {
    const schema = schemaEntityVal.split("/", 2)[0]
    const entity = schemaEntityVal.split("/", 2)[1]
    setDbData({ ...dbData, schema: schema, entity: entity })
  }

  const getAttr = (attr) => {
    setDbData({ ...dbData, attr: attr })
  }

  const getData = (data) => {
    setDbData({ ...dbData, data: data })
  }

  const getEntityData = (data) => {
    setDbData({ ...dbData, entityData: data })
  }

  return (
    <Container fluid>
      
      <Row>
        <Col>‎ ‎‎‎‎‎ ‎</Col>
      </Row>
      <Row>
        <Col>‎ ‎</Col>
      </Row>
      <Row>
        <Col>‎ ‎‎‎‎‎ ‎</Col>
      </Row>
      <Row>
        <Col xs={4}>‎ ‎</Col>
        <Col>
          ‎ <DropdownDB getDatabase={getDatabase} /> ‎
        </Col>
      </Row>
      <Row>
        <Col>‎ ‎‎‎‎‎ ‎</Col>
      </Row>
      <Row>
        <Col xs={1}>‎ ‎‎‎‎‎ ‎</Col>
        <Col xs={3}>
          ‎ <h2 class='ui dividing header'>Schema Value</h2>‎‎‎‎‎ ‎
          <Button
            className='me-2 mb-2'
            onClick={() => setDbData({ ...dbData, tableToggle: !tableToggle })}
          >
            {tableToggle ? "Tree" : "Table"}
          </Button>
        </Col>

        <Col xs={3}>
          ‎ ‎‎‎‎‎{" "}
          <h2 class='ui dividing header'>
            Entity Detail <EntityModal data={entityData.data} />
          </h2>{" "}
          ‎
        </Col>

        <Col xs={3}>
          <h2 class='ui dividing header'>
            Top Value <ChartsModal columns={data.columns} data={data.data} />
            <DownloadModal data={data}/>
          </h2>
          ‎‎‎‎‎ ‎
        </Col>
      </Row>
      <Row>
        <Col>‎ ‎‎‎‎‎ ‎</Col>
      </Row>

      <Row>
        <Col xs={1}>‎ ‎‎‎‎‎ ‎</Col>
        <Col xs={3}>
          {tableToggle === false && (
            <Fragment>
              <SchTree db={db} getEntity={getEntity} />
            </Fragment>
          )}
          {tableToggle === true && (
            <Fragment>
              <SchTable db={db} getEntity={getEntity} />
            </Fragment>
          )}
          ‎
        </Col>
        <Col xs={3}>
          <EntityTable
            db={db}
            schema={schema}
            entity={entity}
            getAttr={getAttr}
            getEntityData={getEntityData}
          />
        </Col>
        <Col xs={3}>
          <TopValTable
            db={db}
            schema={schema}
            entity={entity}
            attr={attr}
            getData={getData}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Dbinfo
