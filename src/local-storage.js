export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    console.log(localStorage.getItem('authToken'));
    try {
        localStorage.setItem('authToken', authToken);
        document.getElementById("login_text").disabled = true;
        document.getElementById("login_text").style.visibility = "hidden";
    } catch (e) {}
};

export const saveUsername = userName => {
    console.log(localStorage.getItem('userName'));
    try{
        localStorage.setItem('userName', userName);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userName');
        document.getElementById("login_text").disabled = false;
        document.getElementById("login_text").style.visibility = "visible";
    } catch (e) {}
};
