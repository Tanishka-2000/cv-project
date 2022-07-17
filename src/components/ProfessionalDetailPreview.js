import React from 'react';

class ProfessionalDetailPreview extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='section'>
                <h2>Professional Details</h2>
                {this.props.data.map(data =>
                    <div  key={data.key}>
                        <p>Company: {data.companyName}</p>
                        <p>position: {data.position}</p>
                        <p>From: {data.from}</p>
                        <p>To: {data.to}</p>
                    </div>)}
            </div>
        );
    }
}
export default ProfessionalDetailPreview;
