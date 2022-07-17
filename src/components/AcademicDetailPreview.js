import React from 'react';

class AcademicDetailPreview extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='section'>
                <h1>Academic Details</h1>
                {this.props.data.map(data =>
                    <div>
                        <p>Degree: {data.degree}</p>
                        <p>Year of Passing: {data.yearOfPassing}</p>
                        <p>percentage: {data.percentage}</p>
                    </div>)}
            </div>
        );
    }
}
export default AcademicDetailPreview;
