/*
When setting status levels use the following:
1 - Everything is good
2 - System(s) operational, limited functionality
3 - System(s) experiencing major issues
*/
const OVERALL_STATUS_TEXT = "Degraded Citrix Service";
const OVERALL_STATUS_NOTES = "Users may be unable to connect to their Citrix desktops remotely. Connecting in one of our office locations still works. We are working with Citrix to resolve this issue and will update as we know more.";
const OVERALL_STATUS = 1;
const CITRIX_STATUS = 1;
const MITEL_STATUS = 1;
const OUTLOOK_STATUS = 1;

/* DO NOT EDIT BELOW THIS COMMENT #ffba00*/
const GREEN = "#3BA55C";
const RED = "#e0455e";
const YELLOW = "#dfa01a";
const overallStatusDiv = document.querySelector(".overall-status");
const statusDetailMessageDiv = document.querySelector(".message-details");
const citrixStatusDiv = document.querySelector(".Citrix");
const mitelStatusDiv = document.querySelector(".Mitel");
const outlookStatusDiv = document.querySelector(".Outlook");

let refreshTime = getCurrentTime();

/* Set colors/status message for overall status */
if (OVERALL_STATUS == 1) {
    overallStatusDiv.style.backgroundColor = GREEN;
    statusDetailMessageDiv.innerHTML += `Last refresh: ${refreshTime}`;
}
else if (OVERALL_STATUS == 2) {
    overallStatusDiv.style.backgroundColor = YELLOW;
    overallStatusDiv.innerHTML = OVERALL_STATUS_TEXT;
    statusDetailMessageDiv.innerHTML = OVERALL_STATUS_NOTES;
    statusDetailMessageDiv.innerHTML += "<br><br>Please refresh this page to re-check status.";
    statusDetailMessageDiv.innerHTML += `<br><br>Last refresh ${refreshTime}`;
}
else {
    overallStatusDiv.style.backgroundColor = RED;
    overallStatusDiv.innerHTML = OVERALL_STATUS_TEXT;
    statusDetailMessageDiv.innerHTML = OVERALL_STATUS_NOTES;
    statusDetailMessageDiv.innerHTML += "<br><br>Please refresh this page to re-check status.";
    statusDetailMessageDiv.innerHTML += `<br><br>Last refresh: ${refreshTime}`;
}

/* Set color for Citrix status */
if (CITRIX_STATUS == 1) {
    citrixStatusDiv.style.borderLeftColor = GREEN;
}
else if (CITRIX_STATUS == 2) {
    citrixStatusDiv.style.borderLeftColor = YELLOW;
}
else {
    citrixStatusDiv.style.borderLeftColor = RED;
}

/* Set color for Mitel status */
if (MITEL_STATUS == 1) {
    mitelStatusDiv.style.borderLeftColor = GREEN;
}
else if (MITEL_STATUS == 2) {
    mitelStatusDiv.style.borderLeftColor = YELLOW;
}
else {
    mitelStatusDiv.style.borderLeftColor = RED;
}

/* Set color for Outlook status */
if (OUTLOOK_STATUS == 1) {
    outlookStatusDiv.style.borderLeftColor = GREEN;
}
else if (OUTLOOK_STATUS == 2) {
    outlookStatusDiv.style.borderLeftColor = YELLOW;
}
else {
    outlookStatusDiv.style.borderLeftColor = RED;
}

function getCurrentTime() {
    let d = new Date();
    return d.toTimeString();
}