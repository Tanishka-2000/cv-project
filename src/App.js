import React from 'react';
import PersonalDetailForm from './components/PersonalDetailForm';
import AcademicDetailForm from './components/AcademicDetailForm';
import ProfessionalDetailForm from './components/ProfessionalDetailForm';
import Preview from './components/Preview';
import uniqid from 'uniqid';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            renderForm: true,
            personalDetail: {
                name:'',
                email:'',
                phone:'',
                address:''
            },
            academicDetail:[],
            professionalDetail:[]
        };
        this.addPersonalDetail = this.addPersonalDetail.bind(this);
        this.addAcademicDetail = this.addAcademicDetail.bind(this);
        this.addProfessionalDetail = this.addProfessionalDetail.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    addPersonalDetail(data){
        this.setState({
            personalDetail:{
                name: data.name,
                email: data.email,
                phone: data.phone,
                address: data.address
            }
        });
    }
    addAcademicDetail(data){
        let detail = {
            key: uniqid(),
            degree: data.degree,
            yearOfPassing: data.year,
            percentage: data.marks
        }
        this.setState({
            academicDetail: this.state.academicDetail.concat(detail)
        });
    }
    addProfessionalDetail(data){
        let detail = {
            key: uniqid(),
            companyName: data.name,
            position: data.position,
            from: data.from,
            to: data.to
        }
        this.setState({
            professionalDetail: this.state.professionalDetail.concat(detail)
        });
    }
    submitForm(){
        this.setState({renderForm: false})
    }
    render(){
        return(
            this.state.renderForm ? (<div>
            <PersonalDetailForm onAdd={this.addPersonalDetail}/>
            <AcademicDetailForm onAdd={this.addAcademicDetail}/>
            <ProfessionalDetailForm onAdd={this.addProfessionalDetail}/>
            <button className='show-preview' onClick={this.submitForm}>Submit</button>
        </div>): <Preview details={this.state}/>
    );

    }
}
export default App;
