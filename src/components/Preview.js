import React from 'react';
import PersonalDetailPreview from './PersonalDetailPreview';
import AcademicDetailPreview from './AcademicDetailPreview';
import ProfessionalDetailPreview from './ProfessionalDetailPreview';

class Preview extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='preview'>
            <PersonalDetailPreview data={this.props.details.personalDetail}/>
            <AcademicDetailPreview data={this.props.details.academicDetail}/>
            <ProfessionalDetailPreview data={this.props.details.professionalDetail}/>
            </div>
        );
    }
}
export default Preview;
