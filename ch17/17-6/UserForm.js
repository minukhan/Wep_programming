import { Form,Button ,Alert} from "react-bootstrap";
import React,{useState} from "react";

function UserForm(){

    const [email,setEmail]= useState("")
    const [password,setPassword] = useState("")
    const [emailError,setEmailError]= useState("")
    const [passwordError,setPasswordError] = useState("")

    const handleSubmit = event =>{
        event.preventDefault();

        var emailVaild = false;
        if(email.length==0){
            setEmailError("Email is required");
        }
        else if(email.length < 6){
            setEmailError("Email should be minimum 6 char");
        }
        else if(email.indexOf('') >= 0){
            setEmailError("Email cannot contain spaces");
        }
        else{
            setEmailError("")
            emailVaild = true
        }

        if(emailVaild){
            alert('Email:' + email + '\nPassword:' + password);
        }
    }
    alert('Email:' + email + '\nPassword:' + password);
    return (

         <div>
            <form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                    onChange={event => setEmail(event.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                {emailError.length > 0 && 
                <Alert variant="danger"> {emailError}</Alert>}

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                    onChange={event => setPassword(event.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
            Email entered:{email}
            <br/>
            assword entered:{password}
        </div>
    );
}
export default UserForm;