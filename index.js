const activityName = document.getElementById("activity-name")
const activityBtn = document.getElementById("new-idea-btn")
const title = document.getElementById("title")

activityBtn.addEventListener("click", () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            activityName.textContent = data.activity
            title.textContent = "🦾 HappyBot🦿"
            document.body.classList.add("fun")
        })
})


