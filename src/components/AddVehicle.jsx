import axios from 'axios'
import React, { useState } from 'react'



const AddVehicle = () => {

    const [input, changeInput] = useState(
        {
            bookId: "",
            ownerName: "",
            email: "",
            phone: "",
            regNo: "",
            vehBrand: "",
            vehModel: "",
            battery: "",
            type: "",
            date: "",
            time: "",
            units: "",
            bayNum: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:4000/add-vehicle", input).then(
            (response) => {
                console.log(response.data)
                alert("Vehicle added successfully")
            }
        ).catch(
            (error) => {
                console.error("Error adding vehicle:", error)

                alert("Failed to add vehicle")
            }
        )
    }

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Booking ID</label>
                                <input type="text" className="form-control" name="bookId" value={input.bookId} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Owner Name</label>
                                <input type="text" className="form-control" name="ownerName" value={input.ownerName} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="tel" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vehicle Registration Number</label>
                                <input type="text" className="form-control" name="regNo" value={input.regNo} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vehicle Brand</label>
                                <input type="text" className="form-control" name="vehBrand" value={input.vehBrand} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vehicle Model</label>
                                <input type="text" className="form-control" name="vehModel" value={input.vehModel} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Battery Capacity(kWh)</label>
                                <input type="text" className="form-control" name="battery" value={input.battery} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Connector Type</label>
                                <input type="text" className="form-control" name="type" value={input.type} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Charging Date</label>
                                <input type="date" className="form-control" name="date" value={input.date} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Time Slot</label>
                                <input type="time" className="form-control" name="time" value={input.time} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Estimated Units(kWh)</label>
                                <input type="number" className="form-control" name="units" value={input.units} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Charging Bay Number</label>
                                <input type="text" className="form-control" name="bayNum" value={input.bayNum} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddVehicle