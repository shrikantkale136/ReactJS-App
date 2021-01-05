import React, { useEffect, useState } from "react";
import { Table,Container } from "react-bootstrap";
import Moment from 'moment';
function TableView() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const response = [
    {
      "id": 1,
      "facility": 0,
      "region": "ALL",
      "lookupName": "ReasonCode",
      "description": "Reason Code Config",
      "userId": "Suresh",
      "createdDttm": "2020-08-25T18:32:39.237+00:00",
      "modifiedDttm": "2020-08-25T18:32:39.237+00:00",
      "lookupDetails": [
        {
          "lookupValue": { "AdjReasonCode": "1" },
          "id": 4,
          "keyValue": "CC",
          "userId": "Suresh",
          "createdDttm": "2020-08-25T18:32:39.237+00:00",
          "modifiedDttm": "2020-08-25T18:32:39.237+00:00"
        },
        {
          "lookupValue": { "AdjReasonCode": "2" },
          "id": 7,
          "keyValue": "LW",
          "userId": "Suresh",
          "createdDttm": "2020-08-25T18:32:39.237+00:00",
          "modifiedDttm": "2020-08-25T18:32:39.237+00:00"
        },
        {
          "lookupValue": { "AdjReasonCode": "15" },
          "id": 10,
          "keyValue": "AA",
          "userId": "Suresh",
          "createdDttm": "2020-08-25T18:32:39.237+00:00",
          "modifiedDttm": "2020-08-25T18:32:39.237+00:00"
        },
        {
          "lookupValue": { "AdjReasonCode": "3" },
          "id": 123,
          "keyValue": "EC",
          "userId": "Surya",
          "createdDttm": "2020-11-09T15:59:14.583+00:00",
          "modifiedDttm": "2020-11-09T15:59:14.583+00:00"
        },
        {
          "lookupValue": { "AdjReasonCode": "31" },
          "id": 3,
          "keyValue": "RT",
          "userId": "Suresh",
          "createdDttm": "2020-08-25T18:32:39.237+00:00",
          "modifiedDttm": "2020-08-25T18:32:39.237+00:00"
        },
        {
          "lookupValue": { "AdjReasonCode": "15" },
          "id": 1,
          "keyValue": "IC",
          "userId": "Suresh",
          "createdDttm": "2020-08-25T18:32:39.237+00:00",
          "modifiedDttm": "2020-08-25T18:32:39.237+00:00"
        },
        {
          "lookupValue": { "AdjReasonCode": "19" },
          "id": 5,
          "keyValue": "RC",
          "userId": "Suresh",
          "createdDttm": "2020-08-25T18:32:39.237+00:00",
          "modifiedDttm": "2020-08-25T18:32:39.237+00:00"
        },
        {
          "lookupValue": { "AdjReasonCode": "1" },
          "id": 6,
          "keyValue": "LC",
          "userId": "Suresh",
          "createdDttm": "2020-08-25T18:32:39.237+00:00",
          "modifiedDttm": "2020-08-25T18:32:39.237+00:00"
        },
        {
          "lookupValue": { "AdjReasonCode": "16" },
          "id": 9,
          "keyValue": "DS",
          "userId": "Suresh",
          "createdDttm": "2020-08-25T18:32:39.237+00:00",
          "modifiedDttm": "2020-08-25T18:32:39.237+00:00"
        },
        {
          "lookupValue": { "AdjReasonCode": "2" },
          "id": 2,
          "keyValue": "VS",
          "userId": "Suresh",
          "createdDttm": "2020-08-25T18:32:39.237+00:00",
          "modifiedDttm": "2020-08-25T18:32:39.237+00:00"
        },
        {
          "lookupValue": { "AdjReasonCode": "9" },
          "id": 8,
          "keyValue": "QI",
          "userId": "Suresh",
          "createdDttm": "2020-08-25T18:32:39.237+00:00",
          "modifiedDttm": "2020-08-25T18:32:39.237+00:00"
        }
      ]
    }
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
            <div>
                dfd
            </div>
        </Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.keyValue}</td>
                <td>{item.userId}</td>
                <td>{Moment(item.createdDttm).format('YYYY-MM-DD h:mm:ss A')}</td>
                <td>{Moment(item.modifiedDttm).format('YYYY-MM-DD h:mm:ss A')}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default TableView;
