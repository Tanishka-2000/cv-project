import React from 'react';

class PersonalDetailForm extends React.Component{
    constructor(props){
        super(props);
        this.addDetails = this.addDetails.bind(this);
    }
    addDetails(e){
        e.preventDefault();
        let data = {
            name:e.target[0].value,
            email:e.target[1].value,
            phone:e.target[2].value,
            address:e.target[3].value
        };
        this.props.onAdd(data);
    }

    render(){
        return(
            <form onSubmit={this.addDetails}>
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
}

export default PersonalDetailForm;
