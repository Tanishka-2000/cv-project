import React from 'react';

function ProfessionalDetailForm (props){
    const addDetails = (e) => {
        e.preventDefault();
        let data = {
            name:e.target[0].value,
            position:e.target[1].value,
            from:e.target[2].value,
            to:e.target[3].value
        };
        props.onAdd(data);
    }
    return(
        <form onSubmit={addDetails}>
            <h1>Enter your professional details</h1>
            <div>
                <input id='company' type='text' placeholder=' '/>
                <label htmlFor='company'>Company Name</label>
            </div>
            <div>
                <input id='position' type='text' placeholder=' '/>
                <label htmlFor='position'>Position</label>
            </div>
            <div>
                <input id='fromYear' type='number' min='2010' max='2022' placeholder=' '/>
                <label htmlFor='fromYear'>Working Since</label>
            </div>
            <div>
                <input id='toYear' type='number' min='2010' max='2022' placeholder=' '/>
                <label htmlFor='toYear'>Worked Upto</label>
            </div>
            <button type='submit'>Add</button>
        </form>
    );
}

export default ProfessionalDetailForm;
