import React from 'react';

function PersonalDetailPreview (props){
    const edit = () =>{
        props.onEdit('personal',null);
    }
    return(
        <div className='section'>
            <div className='section-header'>
                <h2>Personal Details</h2>
            </div>

            <div>
                <p> </p>
                <button className='edit' onClick={edit}>Edit</button>
                <p>Name: {props.data.name}</p>
                <p>Email: {props.data.email}</p>
                <p>Contact No.: {props.data.phone}</p>
                <p>Address: {props.data.address}</p>
            </div>
        </div>
    );
}
export default PersonalDetailPreview;
