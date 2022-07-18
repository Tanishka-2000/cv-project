import React from 'react';

class ProfessionalDetailPreview extends React.Component{
    constructor(props){
        super(props);
        this.edit = this.edit.bind(this);
        this.add = this.add.bind(this);
    }
    edit(e){
        let id = e.target.parentElement.getAttribute('data-key');
        this.props.onEdit('professional', id, false);
    }
    add(){
        this.props.onEdit('professional', null, true);
    }
    render(){
        return(
            <div className='section'>
                <div className='section-header'>
                    <h2>Professional Details</h2>
                    <button className='edit' onClick={this.add}>Add</button>
                </div>

                {this.props.data.map(data =>
                    <div  key={data.key} data-key={data.key}>
                        <p> </p>
                        <button className='edit' onClick={this.edit}>Edit</button>
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
