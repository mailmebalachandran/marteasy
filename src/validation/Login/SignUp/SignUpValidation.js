const SignUpValidation = (userDetails) =>{
    if(userDetails.username === undefined || userDetails.username === ""){
        return JSON.parse('{"message": "Username should not be empty", "isValidated": false}');
    }
    else if(userDetails.email === undefined || userDetails.email === ""){
        return JSON.parse('{"message": "Email should not be empty", "isValidated": false}');
    }
    else if(!validateEmail(userDetails.email)){
        return JSON.parse('{"message": "Email should be valid", "isValidated": false}');
    }
    else if(userDetails.mobileNum.length < 10) {
        if(userDetails.mobileNum === undefined || userDetails.mobileNum === ""){
            return JSON.parse('{"message": "MobileNumber should not be empty", "isValidated": false}');
        } else {
            return JSON.parse('{"message": "MobileNumber should have 10 digits", "isValidated": false}');
        }
    }
    else if(userDetails.password === undefined || userDetails.password === ""){
        return JSON.parse('{"message": "Password should not be empty", "isValidated": false}');
    }
    else{
        return JSON.parse('{"message": "Password should not be empty", "isValidated": true}');
    }
}

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default {SignUpValidation};