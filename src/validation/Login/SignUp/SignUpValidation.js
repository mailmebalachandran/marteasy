const SignUpValidation = (userDetails) =>{
    if(userDetails.username === undefined || userDetails.username === ""){
        return JSON.parse('{"message": "Username should not be empty", "isValidated": false}');
    }
    else if(userDetails.email === undefined || userDetails.emailAddress === ""){
        return JSON.parse('{"message": "Email should not be empty", "isValidated": false}');
    }
    else if(userDetails.password === undefined || userDetails.password === ""){
        return JSON.parse('{"message": "Password should not be empty", "isValidated": false}');
    }
    else{
        return JSON.parse('{"message": "Password should not be empty", "isValidated": true}');
    }
}

export default {SignUpValidation};