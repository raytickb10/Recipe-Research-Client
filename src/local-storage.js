export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {    
    try {
        localStorage.setItem('authToken', authToken);
        console.log(localStorage.getItem('authToken'));
        document.getElementById("login_text").disabled = true;
        document.getElementById("login_text").style.visibility = "hidden";
    } catch (e) {}
};

export const saveUsername = userName => {
    try{
        localStorage.setItem('userName', userName);
        console.log(localStorage.getItem('userName'));
        document.getElementById("testing_text").style.visibility = "hidden";
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userName');
        document.getElementById("login_text").disabled = false;
        document.getElementById("login_text").style.visibility = "visible";
        window.location.reload();
    } catch (e) {}
};
