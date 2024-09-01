import React, { useState } from "react";
import "./Form.css";

function Form() {
    return (
        <div className="container">
            <h1>Reservation Form</h1>
            <form>
                <select name="room" id="room">
                    <option value="ICS XX1">ICS XX1 </option>
                    <option value="ICS XX2">ICS XX2 </option>
                </select>

                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Name" name="Name"/>

                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter Email" name="email" />

                <label htmlFor="Reason/Event">Reason/Event</label>
                <textarea name="reason" id ="reason" cols="30" rows="10" placeholder="description"></textarea>

                <button type="submit">Submit</button>
                
                
            </form>
        </div>

    )

}

export default Form;