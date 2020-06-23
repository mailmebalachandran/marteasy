export const getIsOpen = (day, time) => {
    switch (day) {
        case 'Su': {
            if(time.sunday.status === "open") {
                return true;
            } else {
                return false;
            }
        }
        case 'Mo': {
            if(time.sunday.status === "open") {
                return true;
            } else {
                return false;
            }
        }
        case 'Tu': {
            if(time.sunday.status === "open") {
                return true;
            } else {
                return false;
            }
        }
        case 'We': {
            if(time.sunday.status === "open") {
                return true;
            } else {
                return false;
            }
        }
        case 'Th': {
            if(time.sunday.status === "open") {
                return true;
            } else {
                return false;
            }
        }
        case 'Fr': {
            if(time.sunday.status === "open") {
                return true;
            } else {
                return false;
            }
        }
        case 'Sa': {
            if(time.sunday.status === "open") {
                return true;
            } else {
                return false;
            }
        }
        default : 
            return false;
    }
}