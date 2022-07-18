import React from 'react';

class PersonalDetailPreview extends React.Component{
    constructor(props){
        super(props);
        this.edit = this.edit.bind(this);
    }
    edit(){
        this.props.onEdit('personal',null);
    }
    render(){
        return(
            <div className='section'>
                <div className='section-header'>
                    <h2>Personal Details</h2>
                </div>

                <div>
                    <p> </p>
                    <button className='edit' onClick={this.edit}>Edit</button>
                    <p>Name: {this.props.data.name}</p>
                    <p>Email: {this.props.data.email}</p>
                    <p>Contact No.: {this.props.data.phone}</p>
                    <p>Address: {this.props.data.address}</p>
                </div>
            </div>
        );
    }

}
export default PersonalDetailPreview;
