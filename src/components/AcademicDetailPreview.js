import React from 'react';

function AcademicDetailPreview (props){
    const edit = (e) => {
        let id = e.target.parentElement.getAttribute('data-key');
        props.onEdit('academic',id, false);
    }
    const add = () => {
        props.onEdit('academic',null, true);
    }
    return(
        <div className='section'>
            <div className='section-header'>
                <h2>Academic Details</h2>
                <button className='edit' onClick={add}>Add</button>
            </div>

            {props.data.map(data =>
                <div key={data.key} data-key={data.key}>
                    <p> </p>
                    <button className='edit' onClick={edit}>Edit</button>
                    <p>Degree: {data.degree}</p>
                    <p>Year of Passing: {data.yearOfPassing}</p>
                    <p>percentage: {data.percentage}</p>
                </div>)}
        </div>
    );
}
export default AcademicDetailPreview;
