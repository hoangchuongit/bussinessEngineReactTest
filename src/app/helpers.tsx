/**
 * @description check email is valid
 * @param email email need to check
 * @author Chuong.Hoang
 */
export const isEmailValid = (email) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

/**
 * @description check password length is valid
 * @param password password need to check
 * @author Chuong.Hoang
 */
export const isPasswordValid = (password) => {
    if (password.length < 6 || password.length > 32) return false;
    return true;
}
  