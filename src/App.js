import React, {useState} from 'react';
import PersonalDetailForm from './components/PersonalDetailForm';
import AcademicDetailForm from './components/AcademicDetailForm';
import ProfessionalDetailForm from './components/ProfessionalDetailForm';
import Preview from './components/Preview';
import uniqid from 'uniqid';

function App (props){
    const [currentForm, setCurrentForm] = useState({type:'', id:''});
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(true);
    const [showPreview, setShowPreview] = useState(false);
    const [personalDetail, setPersonalDetail] = useState({
        name:'',
        email:'',
        phone:'',
        address:''
    });
    const [academicDetail, setAcademicDetail] = useState([]);
    const [professionalDetail, setProfessionalDetail] = useState([]);

    // constructor(props){
        // super(props);
        // this.state = {
        //     currentForm:{
        //         type:'',
        //         id:''
        //     },
        //     edit:false,
        //     add:true,
        //     showPreview:false,
        //     personalDetail: {
        //         name:'',
        //         email:'',
        //         phone:'',
        //         address:''
        //     },
        //     academicDetail:[],
        //     professionalDetail:[]
        // };
    //     this.addPersonalDetail = this.addPersonalDetail.bind(this);
    //     this.addAcademicDetail = this.addAcademicDetail.bind(this);
    //     this.addProfessionalDetail = this.addProfessionalDetail.bind(this);
    //     this.submitForm = this.submitForm.bind(this);
    //     this.editForm = this.editForm.bind(this);
    // }
    const addPersonalDetail = (data) => {
        setPersonalDetail({
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address
        });

        if(edit) setEdit(false);
    }

    const addAcademicDetail = (data) => {
        let detail = {
            key: uniqid(),
            degree: data.degree,
            yearOfPassing: data.year,
            percentage: data.marks
        }
        if(add){
            setAcademicDetail([...academicDetail, detail]);
            setEdit(false);

        }else{
            detail.key = currentForm.id;
            setAcademicDetail(
                academicDetail.map(data => {
                    if(data.key === currentForm.id){
                        return detail;
                    }else{
                        return data;
                    }
            }));
            setEdit(false);
        }
    }

    const addProfessionalDetail = (data) => {
        let detail = {
            key: uniqid(),
            companyName: data.name,
            position: data.position,
            from: data.from,
            to: data.to
        }
        if(add){
            setProfessionalDetail([...professionalDetail, detail]);
            setEdit(false);
        }else{
            detail.key = currentForm.id;
            setProfessionalDetail(professionalDetail.map(data => {
                    if(data.key === currentForm.id){
                        return detail;
                    }else{
                        return data;
                    }
                }));
            setEdit(false);
        }
    }

    const submitForm = () => {
        setShowPreview(true);
    }
    const editForm = (form, key, isAdd) => {
        setCurrentForm({
            type: form,
            id: key
        });
        setEdit(true);
        setAdd(isAdd);
    }

    if(!edit){
        if(!showPreview){
            return(
            <div className='main'>
                <h1>Create your Curriculum Vitae</h1>
                <PersonalDetailForm onAdd={addPersonalDetail} />
                <AcademicDetailForm onAdd={addAcademicDetail} />
                <ProfessionalDetailForm onAdd={addProfessionalDetail} />
                <button className='show-preview' onClick={submitForm}>Submit</button>
            </div>
            );
        }else{
            return(<Preview details={{personalDetail, academicDetail, professionalDetail}} edit = {editForm}/>);
        }
    }else{
        if(currentForm.type === 'personal'){
            return(<PersonalDetailForm onAdd={addPersonalDetail} />);
        }
        if(currentForm.type === 'academic'){
            return(<AcademicDetailForm onAdd={addAcademicDetail} />);
        }
        if(currentForm.type === 'professional'){
            return(<ProfessionalDetailForm onAdd={addProfessionalDetail} />);
        }
    }

}
export default App;
