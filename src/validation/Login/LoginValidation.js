const LoginValidation = (userDetails) =>{
    if(userDetails.username === undefined || userDetails.username === ""){
        return JSON.parse('{"message": "User name should not be empty", "isValidated": false}');
    }
    else if(userDetails.password === undefined || userDetails.password === ""){
        return JSON.parse('{"message": "Password should not be empty", "isValidated": false}');
    }
    else{
        return JSON.parse('{"message": "Password should not be empty", "isValidated": true}');
    }
}

export default {LoginValidation};