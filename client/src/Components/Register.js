import React, { useState, useRef, useEffect } from 'react';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';

const Register = props => {
    const [ user, setUser ] = useState({ username : "", password : "", role : "user" });
    const [ message, setMessage ] = useState(null);
    let timerID = useRef(null);
    
    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const onChange = event => {
        setUser({ ...user, [event.target.name] : event.target.value })
    }
    
    const resetForm = () => {
        setUser( { username: "", password: "", role: "" });
    }

    const onSubmitClick = event => {
        event.preventDefault();
        AuthService.register(user).then(data => {
            const { message } = data;
            setMessage(message);
            resetForm();
            if(!message.msgError){
                timerID = setTimeout(() => {
                    props.history.push('/login');
                },2000)
            }
        })
    }

    return (
        <div className="form-group container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 card" style={{marginTop: "1em"}}>
                    <br />
                    <h3 className="mb-4 mt-0 text-center">Please Register</h3>
                    <form onSubmit={onSubmitClick}>
                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-3 col-form-label" >Username:</label>
                            <div className="col-sm-9">
                                <input type="text" name="username" onChange={onChange} className="form-control" placeholder="Enter Username" value={user.username}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password" className="col-sm-3 col-form-label" >Password:</label>
                            <div className="col-sm-9">
                                <input type="password" name="password" onChange={onChange} className="form-control" placeholder="Enter Password" value={user.password}/>
                            </div>
                        </div>
                        <button className="btn btn-large btn-primary btn-block" type="submit">Register</button>
                    </form>
                    <br />
                    { message ? <Message message={ message } /> : null }
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
};

export default Register;