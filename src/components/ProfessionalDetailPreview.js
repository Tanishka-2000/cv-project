import React from 'react';

function ProfessionalDetailPreview (props){
    const edit = (e) => {
        let id = e.target.parentElement.getAttribute('data-key');
        props.onEdit('professional', id, false);
    }
    const add = () => {
        props.onEdit('professional', null, true);
    }
    return(
        <div className='section'>
            <div className='section-header'>
                <h2>Professional Details</h2>
                <button className='edit' onClick={add}>Add</button>
            </div>

            {props.data.map(data =>
                <div  key={data.key} data-key={data.key}>
                    <p> </p>
                    <button className='edit' onClick={edit}>Edit</button>
                    <p>Company: {data.companyName}</p>
                    <p>position: {data.position}</p>
                    <p>From: {data.from}</p>
                    <p>To: {data.to}</p>
                </div>)}
        </div>
    );
}
export default ProfessionalDetailPreview;
