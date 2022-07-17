import React from 'react';
import PersonalDetailForm from './components/PersonalDetailForm';
import AcademicDetailForm from './components/AcademicDetailForm';
import ProfessionalDetailForm from './components/ProfessionalDetailForm';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            renderFrom: true,
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
    }
    addPersonalDetail(data){
        console.log(data);
        this.setState({
            personalDetail:{
                name: data.name,
                email: data.email,
                phone: data.phone,
                address: data.address
            }
        });
        console.log(this.state);
    }
    addAcademicDetail(data){
        let detail = {
            degree: data.degree,
            yearOfPassing: data.year,
            percentage: data.marks
        }
        this.setState({
            academicDetail: this.state.academicDetail.concat(detail)
        });
        console.log(this.state);
    }
    addProfessionalDetail(data){
        let detail = {
            companyName: data.name,
            position: data.position,
            from: data.from,
            to: data.to
        }
        this.setState({
            professionalDetail: this.state.professionalDetail.concat(detail)
        });
        console.log(this.state);
    }
    render(){
        return(<div>
            <PersonalDetailForm onAdd={this.addPersonalDetail}/>
            <AcademicDetailForm onAdd={this.addAcademicDetail}/>
            <ProfessionalDetailForm onAdd={this.addProfessionalDetail}/>
        </div>) ;

    }
}
export default App;
