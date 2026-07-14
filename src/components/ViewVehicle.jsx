import React, { useEffect, useState } from 'react'

import axios from 'axios'




const ViewVehicle = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:4000/view-vehicle").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
    <div className="container">
       
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Owner Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Vehicle Registration Number</th>
                        <th>Vehicle Brand</th>
                        <th>Vehicle Model</th>
                        <th>Battery capacity (kWh)</th>
                        <th>Connector Type</th>
                        <th>Charging Date</th>
                        <th>Time Slot</th>
                        <th>Estimated Units(kWh)</th>
                        <th>Charging Bay Number</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.bookId}</td>
                                <td>{value.ownerName}</td>
                                <td>{value.email}</td>
                                <td>{value.phone}</td>
                                <td>{value.regNo}</td>
                                <td>{value.vehBrand}</td>
                                <td>{value.vehModel}</td>
                                <td>{value.battery}</td>
                                <td>{value.type}</td>
                                <td>{value.date}</td>
                                <td>{value.time}</td>
                                <td>{value.units}</td>
                                <td>{value.bayNum}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>
    </div>
</div>
    )
}

export default ViewVehicle