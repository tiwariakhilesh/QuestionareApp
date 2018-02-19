import React,{Component} from 'react';
import classes from './QuestionContainer.css';
import Form from '../form/form';
import Post from '../../components/post/post'
class QuestionContainer extends Component{
    state={
        formDetails:null,
        loading:false,
        formArray:[]
    }
    formDetails =(formData)=>{
        let updatedFormArray= [...this.state.formArray];
            updatedFormArray.push(formData);
        this.setState({
            formDetails: formData,
            loading:true,
            formArray:updatedFormArray
        })
        
    }
    
    render(){
        let post = null;
        if(this.state.loading){
           post= this.state.formArray.map((el,i)=>{
                return <Post key ={i} formDetails={el}/>
            })
        }
        else{
            post= <p className={classes.emptyPost}>No responses Yet</p>
        }
        return(
            <div className={classes.QuestionContainer}>
                <div className={classes.QuestionBox}>
                    <h1>Github Questionare</h1>
                    <p><strong>Question: How To use LifeCycles in React js</strong></p>
                </div>
                <div className= {classes.postContainer}>
                    {post}
                </div>
                   
                <div className={classes.form}>
                    <h2>Submit Your Answer Here</h2>
                    <Form formDetails={this.formDetails}/>
                </div>
            </div>
        )
    }
}
export default QuestionContainer;