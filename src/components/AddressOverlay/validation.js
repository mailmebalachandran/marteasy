export const addrValidation = (state) => {
    state.isError = false;
    if (state.firstName === "" || state.firstName === undefined) {
        state.isError = true;
        state.firstNameVal = "FirstName Can't be empty";
    }
    if (state.lastName === "" || state.lastName === undefined) {
        state.isError = true;
        state.lastNameVal = "LastName Can't Be Empty"
    }
    if (state.company === "" || state.company === undefined) {
        state.isError = true;
        state.companyVal = "CompanyName Can't Be Empty"
    }
    if (state.address1 === "" || state.address1 === undefined) {
        state.isError = true;
        state.address1Val = "Address Can't Be Empty"
    }
    if (state.address2 === "" || state.address2 === undefined) {
        state.isError = true;
        state.address2Val = "Address Can't Be Empty"
    }
    if (state.city === "" || state.city === undefined) {
        state.isError = true;
        state.cityVal = "Please enter city name"
    }
    if (state.stateName === "" || state.stateName === undefined) {
        state.isError = true;
        state.stateNameVal = "Please enter state name"
    }
    if (state.postalCode === "" || state.postalCode === undefined) {
        state.isError = true;
        state.postalCodeVal = "PostalCode Can't Be Empty"
    }
    if (state.email === "" || state.email === undefined) {
        state.isError = true;
        state.emailVal = "Email Can't Be Empty";
    } else if(validateEmail(state.email)) {
        state.isError = true;
        state.emailVal = "Please Enter Valid Email";
    }
    if (state.phone === "" || state.phone === undefined) {
        state.isError = true;
        state.phoneVal = "PhoneNum Can't Be Empty"
    }
    return state;
}

validateEmail = (email) => {
    let mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (email.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}