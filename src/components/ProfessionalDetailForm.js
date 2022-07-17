import React from 'react';

class ProfessionalDetailForm extends React.Component{
    constructor(props){
        super(props);
        this.addDetails = this.addDetails.bind(this);
    }
    addDetails(e){
        e.preventDefault();
        let data = {
            name:e.target[0].value,
            position:e.target[1].value,
            from:e.target[2].value,
            to:e.target[3].value
        };
        this.props.onAdd(data);
    }
    render(){
        return(
            <form onSubmit={this.addDetails}>
                <div>
                    <input id='company' type='text' placeholder=' '/>
                    <label htmlFor='company'>Company Name</label>
                </div>
                <div>
                    <input id='position' type='text' placeholder=' '/>
                    <label htmlFor='position'>Positon</label>
                </div>
                <div>
                    <input id='fromYear' type='number' min='2010' max='2022' placeholder=' '/>
                    <label htmlFor='fromYear'>Worked Since</label>
                </div>
                <div>
                    <input id='toYear' type='number' min='2010' max='2022' placeholder=' '/>
                    <label htmlFor='toYear'>Worked Upto</label>
                </div>
                <button type='submit'>Add</button>
            </form>
        );
    }
}

export default ProfessionalDetailForm;
