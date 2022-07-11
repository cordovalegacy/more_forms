import {useState, useEffect} from 'react';

const Form = () => {
    const initialValues = { firstName: "", lastName: "", emailAddress: ""};
    const [userValues, setUserValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmited, setIsSubmited] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleNames = (e) => {
        const {name, value} = e.target;
        setUserValues({...userValues, [name]:value});
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(userValues));
        setIsSubmited(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmited) {
        console.log(userValues);
        }
    }, [formErrors]);

    const validateForm = (values) => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = "First name is required.";
        }else if (values.firstName.length < 2) {
            errors.firstName = "Field requires at least 2 characters.";
        }
        if (!values.lastName) {
            errors.lastName = "Last name is required.";
        }else if (values.lastName.length < 2) {
            errors.lastName = "Field requires at least 2 characters."
        }
        if (!values.emailAddress) {
            errors.emailAddress = "Email Address is required.";
        }else if (values.emailAddress.length < 5) {
            errors.emailAddress = "Field requires at least 5 characters."
        }
        return errors;
    };

    return(
        <form onSubmit = { handleSubmit }>
        <div id="first-name">
        <label> First Name: </label>
        <input
            type = "text"
            name = "firstName"
            placeholder = "First Name" 
            value = { userValues.firstName } 
            onChange = { handleNames }
            />
        </div>

        <p>{ formErrors.firstName }</p>
        
        <div id="last-name">
        <label> Last Name: </label>
        <input
            type = "text"
            name = "lastName"
            placeholder = "Last Name" 
            value = { userValues.lastName } 
            onChange = { handleNames }
            />
        </div>

        <p>{ formErrors.lastName }</p>

        <div id ="email-address">
        <label> Email Address: </label>
        <input
            type = "text"
            name = "emailAddress"
            placeholder = "Email Address" 
            value = { userValues.emailAddress } 
            onChange = { handleNames }
            />
        </div>

        <p>{ formErrors.emailAddress }</p>

        <div id="password">
        <label htmlFor=""> Password: </label>
        <input
            type = "password"
            name = "pw"
            placeholder = "Password"
            onChange = {(e) => setPassword(e.target.value) }
            />
        </div>
        { password.length < 8 ? <p>Field requires at least 8 characters.</p> : null}

        <div id="confirm-password">
        <label htmlFor=""> Confirm Password: </label>
        <input
            type = "password"
            name = "confirmpw"
            placeholder = "Confirm Password"
            onChange = {(e) => setConfirmPassword(e.target.value) }
            />
        </div>

        {confirmPassword !== password ? <p>Must match passwords</p> : null}

        <input type="submit" value="Register"/>
        </form>
    );
};

export default Form;


