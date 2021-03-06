import React, {PureComponent} from 'react';
import styled from 'styled-components';
import {WithHeader} from '../../hoc/withHeader'
import {WithPageContainer} from '../../hoc/withPageContainer'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {compose} from 'redux'
import { Link } from 'react-router-dom'
import Firebase from '../../utils/firebase'
import { withRouter } from "react-router";

const LinkContainer = styled.div`
    margin:1rem 0;
`

class Login extends PureComponent{
    state ={
        email:"",
        password:''
    }
    onChange = ({target}) => this.setState({[target.name]: target.value})

    onClick = async (e) => {
        try{
            e.preventDefault()
            console.log('clicked')
           await Firebase.auth.signInWithEmailAndPassword(this.state.email,this.state.password)
           this.props.history.push('/')
        }catch(err){
            console.log(err)
        }
    } 
    render(){
        return(
            <div>
                <h2>Login</h2>
            <Form>
            <Form.Field>
                <label>Email</label>
                <input placeholder='email' type="email" name="email" onChange={this.onChange} value={this.state.email}/>
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input placeholder='password' type="password" name="password" onChange={this.onChange} value={this.state.password}/>
                </Form.Field>
                <Button fluid type='submit' onClick={this.onClick}>Login</Button>
            </Form>
            <LinkContainer>
                <Button fluid><Link to="/signup">Sign up</Link></Button>
            </LinkContainer>
            </div>
        )
    }
}


export default compose(
    withRouter,
    WithHeader,
    WithPageContainer
)(Login);