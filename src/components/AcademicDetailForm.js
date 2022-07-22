import React from 'react';

function AcademicDetailForm (props){
    const addDetails = (e) =>{
        e.preventDefault();
        let data = {
            degree:e.target[0].value,
            year:e.target[1].value,
            marks:e.target[2].value
        };
        props.onAdd(data);
    }
    return(
        <form onSubmit={addDetails}>
            <h1>Enter your Academic Details</h1>
            <div>
                <input id='degree' type='text' placeholder=' '/>
                <label htmlFor='degree'>Degree</label>
            </div>
            <div>
                <input id='yearOfPassing' type='number' min='2010' max='2022' placeholder=' '/>
                <label htmlFor='yearOfPassing'>Year Of Passing</label>
            </div>
            <div>
                <input id='marks' type='number' min='0' max='100' placeholder=' '/>
                <label htmlFor='marks'>Percentage</label>
            </div>
            <button type='submit'>Add</button>
        </form>
    );

}

export default AcademicDetailForm;
