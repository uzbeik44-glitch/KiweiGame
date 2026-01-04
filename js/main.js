function dailyReward() {
    const points = Math.floor(Math.random() * 100) + 50;
    alert(`🎁 Sizning daily rewardingiz: ${points} ball!`);
    // Keyinchalik profilga saqlash mumkin
}
window.addEventListener("DOMContentLoaded", () => {

    const avatar = localStorage.getItem("avatar");
    const username = localStorage.getItem("username");
    const level = localStorage.getItem("level");
    const score = localStorage.getItem("score");

    if (avatar) {
        document.getElementById("menuAvatar").src = avatar;
    } else {
        document.getElementById("menuAvatar").src = "assets/images/avatar.png";
    }

    if (username) {
        document.getElementById("menuUsername").innerText = username;
    }

    document.getElementById("menuLevel").innerText =
        "Level: " + (level || 1);

    document.getElementById("menuScore").innerText =
        "Score: " + (score || 0);
});
