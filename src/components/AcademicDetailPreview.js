import React from 'react';

class AcademicDetailPreview extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='section'>
                <h2>Academic Details</h2>
                {this.props.data.map(data =>
                    <div key={data.key}>
                        <p>Degree: {data.degree}</p>
                        <p>Year of Passing: {data.yearOfPassing}</p>
                        <p>percentage: {data.percentage}</p>
                    </div>)}
            </div>
        );
    }
}
export default AcademicDetailPreview;
