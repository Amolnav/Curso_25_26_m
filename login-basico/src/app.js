import { DB } from "./db/db";
import { initialStorage } from "./helpers/storage";
import { loadLoginRegister } from "./helpers/utils";
import { renderMainView } from "./view/mainView";

/**
 * 
 */
export function initialApp(){
    initialStorage(DB)

    //pintamos el formulario
    if (localStorage.getItem("currentUser")){
        const app = document.getElementById("app")
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        app.innerHTML = renderMainView(currentUser.username);
        const logout = document.querySelector("#logoutBtn")
        logout.addEventListener("click", () => {
            localStorage.removeItem("currentUser")
            window.location.reload();
        })    
    }else {
    loadLoginRegister();
    }
    

}

