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
                <h1> Curriculum Vitae </h1>
                <PersonalDetailPreview data={this.props.details.personalDetail} onEdit={this.props.edit} />
                <AcademicDetailPreview data={this.props.details.academicDetail} onEdit={this.props.edit} />
                <ProfessionalDetailPreview data={this.props.details.professionalDetail} onEdit={this.props.edit} />
            </div>
        );
    }
}
export default Preview;
