import React, {Component} from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import classes from './form.css'
class Form extends Component{
    state={
        infoForm:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Enter your email'
                },
                value:'',
                validation:{
                        required:true,
                        isEmail: true                  
                },
                valid:false,
                touched:false
            },
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Enter your name'
                },
                value:'',
                validation:{
                        required:true,
                        minLength:3,
                        maxLength:100,
                        isName: true                   
                },
                valid:false,
                touched:false
            },
            description:{
                elementType:'textarea',
                elementConfig:{
                    type:'text',
                    placeholder:'Comment'
                },
                value:'',
                validation:{
                    required: true,
                    minLength:10,
                    maxLength:500
                },
                valid:false,
                touched:false
            },
            
        },
        isFormValid:false
    }
    checkValidity=(value, rules)=>{
        let isValid=true;
        
        if(!rules){
            return true;
        }
        if(rules.required){
            isValid= value.trim() !== "" && isValid
        }
        if(rules.isEmail){
            var pattern= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid= pattern.test(value) && isValid
        }
        if(rules.isName){
            var pattern = /^[a-zA-Z ]+$/;
            isValid= pattern.test(value) && isValid
        }
        if(rules.minLength){
            isValid= value.length >= rules.minLength && isValid
        }
        if(rules.maxLength){
            isValid= value.length <= rules.maxLength && isValid
        }
        return isValid;
    }
    inputChangedHandler=(event, formIdentifier)=>{
        const updatedInfoForm= {
            ...this.state.infoForm
        };
        const updatedFormElements = {
            ...updatedInfoForm[formIdentifier]
        };
        updatedFormElements.value = event.target.value;
        updatedFormElements.touched= true;
        updatedFormElements.valid= this.checkValidity(updatedFormElements.value, updatedFormElements.validation);
        updatedInfoForm[formIdentifier]= updatedFormElements;

        let formValidity= true;
        for(let elements in updatedInfoForm){
            formValidity = updatedInfoForm[elements].value && formValidity; 
        }
        this.setState({
            infoForm: updatedInfoForm,
            isFormValid: formValidity
        })
    }
    formHandler = (e)=>{
        e.preventDefault();
        let formData ={};
        for(let identifier in this.state.infoForm){
            formData[identifier] = this.state.infoForm[identifier].value;
        }
        this.props.formDetails(formData);
        this.reset();
    }
    reset=()=>{
        console.log("akhilesh");
        const resetValues ={
            ...this.state.infoForm
        }
        for(let identifier in resetValues){
            resetValues[identifier].value = " ";
        }
        this.setState({
            infoForm: {...resetValues},
            isFormValid: false
        })
    }
    render(){
        let formElementArray=[];
        for(let key in this.state.infoForm){
            formElementArray.push({
                id: key,
                config: this.state.infoForm[key]
            })
        }
        const form = ( <form>
            { formElementArray.map((formElement)=>{
                return  <Input  key ={formElement.id} elementType={formElement.config.elementType}
                label={formElement.id} 
                elementConfig={formElement.config.elementConfig} 
                value={formElement.config.value} 
                changed={(event)=>this.inputChangedHandler(event,formElement.id)}
                Invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                isTouched={formElement.config.touched}/>
                })}
            <Button btnType="Success" disabled={!this.state.isFormValid} clicked={this.formHandler}>Submit</Button>
        </form>);

        return(
            <div className={classes.formContainer}>{form}</div>
        )
    }
}
export default Form;