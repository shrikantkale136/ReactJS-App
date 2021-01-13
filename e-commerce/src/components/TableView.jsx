import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Moment from "moment";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';

function TableView() {
  function dateFormat(cell, row) {
    return <span>{Moment(cell).format("YYYY-MM-DD h:mm:ss A")} </span>;
  }
  const options = {
    pageStartIndex: 1,
    sizePerPage: 6,
    hideSizePerPage: false,
    hidePageListOnlyOnePage: true
  };
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const response = [
    {
      id: 1,
      facility: 0,
      region: "ALL",
      lookupName: "ReasonCode",
      description: "Reason Code Config",
      userId: "Suresh",
      createdDttm: "2020-08-25T18:32:39.237+00:00",
      modifiedDttm: "2020-08-25T18:32:39.237+00:00",
      lookupDetails: [
        {
          lookupValue: { AdjReasonCode: "1" },
          id: 4,
          keyValue: "CC",
          userId: "Suresh",
          createdDttm: "2020-08-25T18:32:39.237+00:00",
          modifiedDttm: "2020-08-25T18:32:39.237+00:00",
        },
        {
          lookupValue: { AdjReasonCode: "2" },
          id: 7,
          keyValue: "LW",
          userId: "Suresh",
          createdDttm: "2020-08-25T18:32:39.237+00:00",
          modifiedDttm: "2020-08-25T18:32:39.237+00:00",
        },
        {
          lookupValue: { AdjReasonCode: "15" },
          id: 10,
          keyValue: "AA",
          userId: "Suresh",
          createdDttm: "2020-08-25T18:32:39.237+00:00",
          modifiedDttm: "2020-08-25T18:32:39.237+00:00",
        },
        {
          lookupValue: { AdjReasonCode: "3" },
          id: 123,
          keyValue: "EC",
          userId: "Surya",
          createdDttm: "2020-11-09T15:59:14.583+00:00",
          modifiedDttm: "2020-11-09T15:59:14.583+00:00",
        },
        {
          lookupValue: { AdjReasonCode: "31" },
          id: 3,
          keyValue: "RT",
          userId: "Suresh",
          createdDttm: "2020-08-25T18:32:39.237+00:00",
          modifiedDttm: "2020-08-25T18:32:39.237+00:00",
        },
        {
          lookupValue: { AdjReasonCode: "15" },
          id: 1,
          keyValue: "IC",
          userId: "Suresh",
          createdDttm: "2020-08-25T18:32:39.237+00:00",
          modifiedDttm: "2020-08-25T18:32:39.237+00:00",
        },
        {
          lookupValue: { AdjReasonCode: "19" },
          id: 5,
          keyValue: "RC",
          userId: "Suresh",
          createdDttm: "2020-08-25T18:32:39.237+00:00",
          modifiedDttm: "2020-08-25T18:32:39.237+00:00",
        },
        {
          lookupValue: { AdjReasonCode: "1" },
          id: 6,
          keyValue: "LC",
          userId: "Suresh",
          createdDttm: "2020-08-25T18:32:39.237+00:00",
          modifiedDttm: "2020-08-25T18:32:39.237+00:00",
        },
        {
          lookupValue: { AdjReasonCode: "16" },
          id: 9,
          keyValue: "DS",
          userId: "Suresh",
          createdDttm: "2020-08-25T18:32:39.237+00:00",
          modifiedDttm: "2020-08-25T18:32:39.237+00:00",
        },
        {
          lookupValue: { AdjReasonCode: "2" },
          id: 2,
          keyValue: "VS",
          userId: "Suresh",
          createdDttm: "2020-08-25T18:32:39.237+00:00",
          modifiedDttm: "2020-08-25T18:32:39.237+00:00",
        },
        {
          lookupValue: { AdjReasonCode: "9" },
          id: 8,
          keyValue: "QI",
          userId: "Suresh",
          createdDttm: "2020-08-25T18:32:39.237+00:00",
          modifiedDttm: "2020-08-25T18:32:39.237+00:00",
        },
      ],
    },
  ];
  const columns = [
    {
      dataField: "any",
      formatter: (cell, row, rowIndex) => (<div>{rowIndex+1}</div>),
      text: "#",
      headerStyle: (colum, colIndex) => {return {width: '80px'}},
      editable: false
    },
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: (colum, colIndex) => {return {width: '80px'}},
      editable: false
    },
    {
      dataField: "keyValue",
      text: "Key Value",
      sort: true,
      editable: true
    },
    {
      dataField: "userId",
      text: "UserId",
      sort: true,
      editable: false
    },
    {
      dataField: "createdDttm",
      text: "Created Datetime",
      sort: true,
      formatter: dateFormat,
      editable: false
    },
    {
      dataField: "modifiedDttm",
      text: "Modified Datetime",
      sort: true,
      formatter: dateFormat,
      editable: false
    },
  ];
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(response[0].lookupDetails);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div className="text-center">No Data Found !! </div>;
  } else if (!isLoaded) {
    return <div className="text-center">Loading...</div>;
  } else {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={{ span: 2, offset: 10 }}>
              <div className="float-right">
                <a href="#">Add new lookup</a>
              </div>
            </Col>
          </Row>
          <div className="filter-section">
            <Row>
              <Col>
                <ul className="filter-list">
                  <li>
                    <strong>Region: </strong> USA
                  </li>
                  <li>
                    <strong>Facility:</strong> -
                  </li>
                </ul>
              </Col>
              <Col>
                <ul className="filter-list">
                  <li>
                    <strong>Lookup Name: </strong> Reason code
                  </li>
                  <li>
                    <strong>Lookup Description:</strong> Reason code
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 1, offset: 11 }}>
                <div className="">
                  <a href="#">Edit</a>
                </div>
              </Col>
            </Row>
          </div>
          <BootstrapTable
            bootstrap4
            striped
            bordered
            hover
            keyField="id"
            data={items}
            columns={columns}
            pagination={ paginationFactory(options) }
            cellEdit={ cellEditFactory({ mode: 'dbclick',blurToSave: true }) }
          />
        </Container>
      </div>
    );
  }
}
export default TableView;