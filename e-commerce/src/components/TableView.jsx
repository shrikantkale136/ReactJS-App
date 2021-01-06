import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Moment from "moment";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";

function TableView() {
  function dateFormat(cell, row) {
    return <span>{Moment(cell).format("YYYY-MM-DD h:mm:ss A")} </span>;
  }

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
      formatter: (cell, row, rowIndex) => (
        <div>
          <span>{rowIndex+1}</span>
          <br />
        </div>
      ),
      text: "#"
    },
    {
      dataField: "id",
      text: "ID",
      sort: true,
    },
    {
      dataField: "keyValue",
      text: "Key Value",
      sort: true,
    },
    {
      dataField: "userId",
      text: "UserId",
      sort: true,
    },
    {
      dataField: "createdDttm",
      text: "Created Datetime",
      sort: true,
      formatter: dateFormat,
    },
    {
      dataField: "modifiedDttm",
      text: "Modified Datetime",
      sort: true,
      formatter: dateFormat,
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
    return <div>No Data Found !! </div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
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
          />
        </Container>
      </div>
    );
  }
}
export default TableView;