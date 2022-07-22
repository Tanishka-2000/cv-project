import React from 'react';

function PersonalDetailForm (props){
    const addDetails = (e) => {
        e.preventDefault();
        let data = {
            name:e.target[0].value,
            email:e.target[1].value,
            phone:e.target[2].value,
            address:e.target[3].value
        };
        props.onAdd(data);
    }
    return(
        <form onSubmit={addDetails}>
            <h1>Enter your personal details</h1>
            <div>
                <input id='name' type='text' placeholder=' '/>
                <label htmlFor='name'>Full Name</label>
            </div>
            <div>
                <input id='email' type='email' placeholder=' '/>
                <label htmlFor='email'>Email</label>
            </div>
            <div>
                <input id='phone' type='tel' placeholder=' '/>
                <label htmlFor='phone'>Contact Number</label>
            </div>
            <div>
                <input id='address' type='text' placeholder=' '/>
                <label htmlFor='address'>Address</label>
            </div>
            <button type='submit'>Add</button>
        </form>
    );
}

export default PersonalDetailForm;
