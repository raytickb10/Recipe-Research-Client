export const loadAuthToken = () => {
    console.log(localStorage.getItem('authToken'));
    console.log(localStorage.getItem('username'));
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
        document.getElementById("login_text").disabled = true;
        document.getElementById("login_text").style.visibility = "hidden";
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
        document.getElementById("login_text").disabled = false;
        document.getElementById("login_text").style.visibility = "visible";
    } catch (e) {}
};
