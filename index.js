const activityName = document.getElementById("activity-name")

fetch("https://apis.scrimba.com/bored/api/activity")
    .then(respone => respone.json())
    .then(data => activityName.textContent = data.activity)