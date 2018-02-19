import React, {Component} from 'react';
import classes from './post.css';

 class Post extends Component{
        state={
            upVote:0,
            downVote:0
        }
        upVote=(e)=>{
            this.setState( prevState=>{
                return{
                    upVote: prevState.upVote + 1
                }
                
            })
        };
        downVote=()=>{
            this.setState( prevState=>{
                return{
                    downVote: prevState.downVote + 1
                }
                
            })
        };
        render(){
            return(
                <div className={classes.post}>
                    <p><strong>Answer:</strong>{this.props.formDetails.description}</p>
                    <p><strong>Posted by</strong> : {this.props.formDetails.name}</p>
                    <p><strong>email:</strong> {this.props.formDetails.email}</p>
                    <button className={classes.buttonUpvote} onClick={this.upVote} >upVote : {this.state.upVote}</button>
                   <button className={classes.buttonDownvote} onClick={this.downVote}>downVote : {this.state.downVote}</button>
                </div>
            )
        }
    }

export default Post;