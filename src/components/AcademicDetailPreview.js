import React from 'react';

class AcademicDetailPreview extends React.Component{
    constructor(props){
        super(props);
        this.edit = this.edit.bind(this);
    }
    edit(e){
        let id = e.target.parentElement.getAttribute('data-key');
        this.props.onEdit('academic',id)
    }
    render(){
        return(
            <div className='section'>
                <div className='section-header'>
                    <h2>Academic Details</h2>

                </div>

                {this.props.data.map(data =>
                    <div key={data.key} data-key={data.key}>
                        <p> </p>
                        <button className='edit' onClick={this.edit}>Edit</button>
                        <p>Degree: {data.degree}</p>
                        <p>Year of Passing: {data.yearOfPassing}</p>
                        <p>percentage: {data.percentage}</p>
                    </div>)}
            </div>
        );
    }
}
export default AcademicDetailPreview;
