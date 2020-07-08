const SignUpValidation = (userDetails) =>{
    if(userDetails.username === undefined || userDetails.username === ""){
        return JSON.parse('{"message": "User name should be empty", "isValidated": false}');
    }
    else if(userDetails.emailAddress === undefined || userDetails.emailAddress === ""){
        return JSON.parse('{"message": "Password should be empty", "isValidated": false}');
    }
    else if(userDetails.password === undefined || userDetails.password === ""){
        return JSON.parse('{"message": "Password should be empty", "isValidated": false}');
    }
    else{
        return JSON.parse('{"message": "Password should be empty", "isValidated": true}');
    }
}

export default {SignUpValidation};