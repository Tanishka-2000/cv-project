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
            currentForm:{
                type:'',
                id:''
            },
            edit:false,
            add:true,
            showPreview:false,
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
        this.editForm = this.editForm.bind(this);
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
        if(this.state.edit){
            this.setState({
                edit: false
            });
        }
    }
    addAcademicDetail(data){
        if(this.state.add){
            let detail = {
                key: uniqid(),
                degree: data.degree,
                yearOfPassing: data.year,
                percentage: data.marks
            }
            this.setState({
                academicDetail: this.state.academicDetail.concat(detail),
                edit:false
            });
        }else{
            let detail = {
                key: this.state.currentForm.id,
                degree: data.degree,
                yearOfPassing: data.year,
                percentage: data.marks
            }
            this.setState({
                academicDetail : this.state.academicDetail.map(data => {
                    if(data.key === this.state.currentForm.id){
                        return detail;
                    }else{
                        return data;
                    }
                }),
                edit:false
            });
        }

    }
    addProfessionalDetail(data){
        if(this.state.add){
            let detail = {
                key: uniqid(),
                companyName: data.name,
                position: data.position,
                from: data.from,
                to: data.to
            }
            this.setState({
                professionalDetail: this.state.professionalDetail.concat(detail),
                edit:false
            });
        }else{
            let detail = {
                key: this.state.currentForm.id,
                companyName: data.name,
                position: data.position,
                from: data.from,
                to: data.to
            }
            this.setState({
                professionalDetail : this.state.professionalDetail.map(data => {
                    if(data.key === this.state.currentForm.id){
                        return detail;
                    }else{
                        return data;
                    }
                }),
                edit:false
            });
        }

    }
    submitForm(){
        this.setState({
            showPreview:true,
        });
    }
    editForm(form, key, isAdd){
        this.setState({
            edit:true,
            add:isAdd,
            currentForm: {
                type: form,
                id: key
            },
        });
    }
    render(){
        if(!this.state.edit){
            if(!this.state.showPreview){
                return(
                <div className='main'>
                    <h1>Create your Curriculum Vitae</h1>
                    <PersonalDetailForm onAdd={this.addPersonalDetail} />
                    <AcademicDetailForm onAdd={this.addAcademicDetail} />
                    <ProfessionalDetailForm onAdd={this.addProfessionalDetail} />
                    <button className='show-preview' onClick={this.submitForm}>Submit</button>
                </div>
                );
            }else{
                return(<Preview details={this.state} edit={this.editForm}/>);
            }
        }else{
            let form = this.state.currentForm;
            if(form.type === 'personal'){
                return(<PersonalDetailForm onAdd={this.addPersonalDetail} />);
            }
            if(form.type === 'academic'){
                return(<AcademicDetailForm onAdd={this.addAcademicDetail} />);
            }
            if(form.type === 'professional'){
                return(<ProfessionalDetailForm onAdd={this.addProfessionalDetail} />);
            }
        }
    }
}
export default App;
