/*
When setting status levels use the following:
1 - Everything is good
2 - System(s) operational, limited functionality
3 - System(s) experiencing major issues
*/
const OVERALL_STATUS_TEXT = "Storage Maintenance";
const OVERALL_STATUS_NOTES = "We are performing maintenance on our storage solution. During this time Citrix access is unavailable. You can still access your Dart email by logging into the web version of Outlook.<br><br>If you are using one of the kiosk PCs in our offices you can click Tools -> Maintenance Resources at the top left of the kiosk screen to open a browser to access OWA and this System Status page.<br><br>If you are not using one of our kiosk PCs the URLs for OWA and the system status page are:<br><br><a href=`https://outlook.office365.com`>https://outlook.office365.com</a><br><a href=`https://wwwb.dartadvantage.com/systemStatus/status.html`>https://wwwb.dartadvantage.com/systemStatus/status.html</a>";
const OVERALL_STATUS = 3;
const CITRIX_STATUS = 3;
const MITEL_STATUS = 2;
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