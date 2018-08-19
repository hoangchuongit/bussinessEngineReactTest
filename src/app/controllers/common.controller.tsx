export const success = res => {
    return res;
};

export const error = err => {
    console.log(err);
    if(err && err.message) {
        alert(err.message);
    }
};