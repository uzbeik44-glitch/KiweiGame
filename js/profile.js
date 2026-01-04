// PAGE LOADDA MA'LUMOTLARNI O‘QISH
window.onload = () => {
    if (localStorage.getItem("username")) {
        document.getElementById("username").innerText =
            localStorage.getItem("username");
    }

    if (localStorage.getItem("bio")) {
        document.getElementById("bio").innerText =
            localStorage.getItem("bio");
    }

    if (localStorage.getItem("avatar")) {
        document.getElementById("avatar").src =
            localStorage.getItem("avatar");
    }
};

// AVATAR
function changeAvatar() {
    document.getElementById("avatarInput").click();
}

document.getElementById("avatarInput").addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function () {
        document.getElementById("avatar").src = reader.result;
        localStorage.setItem("avatar", reader.result); // SAQLASH
    };
    reader.readAsDataURL(file);
});

// USERNAME
function editUsername() {
    const current = document.getElementById("username").innerText;
    const newName = prompt("New username:", current);

    if (newName) {
        document.getElementById("username").innerText = newName;
        localStorage.setItem("username", newName); // SAQLASH
    }
}

// BIO
function editBio() {
    const current = document.getElementById("bio").innerText;
    const newBio = prompt("New bio:", current);

    if (newBio) {
        document.getElementById("bio").innerText = newBio;
        localStorage.setItem("bio", newBio); // SAQLASH
    }
}

// BACK TO MENU
function backToMenu() {
    window.location.href = "index.html";
}
localStorage.setItem("username", newName);
localStorage.setItem("avatar", reader.result);
localStorage.setItem("level", level);
localStorage.setItem("score", score);




const avatarInput = document.getElementById('avatar-input');
const profileAvatar = document.getElementById('profile-avatar');

avatarInput.addEventListener('change', (e)=>{
    const file = e.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(ev){
            profileAvatar.src = ev.target.result;  
            // LocalStorage ga saqlash
            localStorage.setItem('avatarSrc', ev.target.result);
        }
        reader.readAsDataURL(file);
    }
});