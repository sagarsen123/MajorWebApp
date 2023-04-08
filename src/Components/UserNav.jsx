import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Select_Vehicle from "./Select_Vehicle";
import "../Css/UserNav.css";
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"

const UserNav = () => {
  const vehicleList = [
    {
      type: "Car",
      company: "Audi",
      VehicleNo: "MP20 AJ1234",
      vDetails: {
        ownername: "Mukesh Prasad",
        vNumber: "MP20 AJ1234",
        modelno: "X-1234",
        productionyear: "2002",
        gpsId: "33142589893",
        engineType: "Petrol BS6",
      },
    },
    {
      type: "Bike",
      company: "Hero",
      VehicleNo: "MP20 AJ1234",
      vDetails: {
        ownername: "Mukesh Prasad",
        vNumber: "MP20 AJ1225",
        modelno: "X-1234",
        productionyear: "2002",
        gpsId: "33142589893",
        engineType: "Petrol BS^",
      },
    },
    {
      type: "Truck",
      company: "Suzuki",
      VehicleNo: "MP20 AJ1234",
      vDetails: {
        ownername: "Mukesh Prasad",
        vNumber: "MP20 AJ1210",
        modelno: "X-1234",
        productionyear: "2002",
        gpsId: "33142589893",
        engineType: "Petrol BS^",
      },
    },
    {
      type: "Bike",
      company: "Renault",
      VehicleNo: "MP20 AJ12",
      vDetails: {
        ownername: "Mukesh Prasad",
        vNumber: "MP20 AJ1234",
        modelno: "X-1234",
        productionyear: "2002",
        gpsId: "33142589893",
        engineType: "Petrol BS^",
      },
    },
    {
      type: "car",
      company: "Mercedes",
      VehicleNo: "MP20 AJ14",
      vDetails: {
        ownername: "Mukesh Prasad",
        vNumber: "MP20 AJ1234",
        modelno: "X-1234",
        productionyear: "2002",
        gpsId: "33142589893",
        engineType: "Petrol BS^",
      },
    },
  ];
  const [i, setI] = useState(0);

  return (
    <Tabs
      defaultActiveKey="vehicles"
      className="border border-white border-bottom-0 "
      fill
    >
      <Tab
        eventKey="vehicles"
        className="border border-white border-top-0"
        title="Vehicles"
      >
        <Table striped>
          <thead>
            <tr>
              <th>Vehicle Type</th>
              <th>Company</th>
              <th>vehicle Number</th>
            </tr>
          </thead>

          <tbody>
            {vehicleList.map((element) => {
              return (
                <tr>
                  <td>{element.type}</td>
                  <td>{element.company}</td>
                  <td>{element.VehicleNo}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Tab>
      <Tab eventKey="vehicleDetails" title="Vehicle Details">
        <div className="d-flex justify-content-around align-items-center p-1 m-1">
          <h5> See Vehicle Details</h5>
          <Select_Vehicle setI={setI} />
        </div>
        <hr className="w-75 m-auto" />

        <Table striped>
          <thead></thead>

          <tbody>
            <tr>
              <td>
                <label htmlFor="onwer_name">Owner Name : </label>
              </td>

              <td>
                <div className="property">
                  {vehicleList[i].vDetails.ownername}
                </div>
              </td>
            </tr>

            <tr>
              <td>
                {" "}
                <label htmlFor="onwer_name">Vehicle Number : </label>
              </td>

              <td>
                <div className="property">
                  {vehicleList[i].vDetails.vNumber}
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="onwer_name">Model Number : </label>
              </td>

              <td>
                {" "}
                <div className="property">
                  {vehicleList[i].vDetails.modelno}
                </div>
              </td>
            </tr>

            <tr>
              <td>
                {" "}
                <label htmlFor="onwer_name">GPS ID : </label>
              </td>

              <td>
                {" "}
                <div className="property">{vehicleList[i].vDetails.gpsId}</div>
              </td>
            </tr>

            <tr>
              <td>
                {" "}
                <label htmlFor="onwer_name">Engine Type : </label>
              </td>

              <td>
                {" "}
                <div className="property">
                  {vehicleList[i].vDetails.engineType}
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Tab>
      <Tab eventKey="status" title="Status">
        <div className="d-flex justify-content-around align-items-center p-1 m-1">
          <h5> See Vehicle Details</h5>
          <Select_Vehicle setI={setI} />
        </div>
        <hr className="w-75 m-auto" />
        <Table striped>
          <thead></thead>

          <tbody>
            <tr>
              <td>Current Stutus</td>

              <td style={{ color: "red" }}>Stopped</td>
            </tr>
            <tr>
              <td>Timer</td>

              <td style={{ color: "red" }}>00:15:00</td>
            </tr>
          </tbody>
        </Table>
      </Tab>
      <Tab eventKey="Location" title="Location">
        <div className="d-flex justify-content-around align-items-center p-1 m-1">
          <h5> See Vehicle Details</h5>
          <Select_Vehicle setI={setI} />
        </div>
        <hr className="w-75 m-auto" />
        <Table striped>
          <thead></thead>

          <tbody>
            <tr>
              <td>City</td>

              <td>
                <div className="property">Jabalpur</div>
              </td>
            </tr>
            <tr>
              <td>Near By Address</td>
              <td>
                <div className="property">Gulaua Tal</div>
              </td>
            </tr>
            <tr>
              <td>Latitude</td>
              <td>
                <div className="property">79.9864*N</div>
              </td>
            </tr>
            <tr>
              <td>Longitude</td>
              <td>
                <div className="property">13.1815*E</div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="text-center w-100">
              <Button variant="primary" size="sm"><Link to='/'>Track ON Map</Link></Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Tab>
    </Tabs>
  );
};

export default UserNav;
