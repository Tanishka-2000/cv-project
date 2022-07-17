import React from 'react';

class PersonalDetailPreview extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='section'>
                <h1>Personal Details</h1>
                <p>Name: {this.props.data.name}</p>
                <p>Email: {this.props.data.email}</p>
                <p>Contact No.: {this.props.data.phone}</p>
                <p>Address: {this.props.data.address}</p>
            </div>
        );
    }

}
export default PersonalDetailPreview;