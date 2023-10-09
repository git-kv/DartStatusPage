/*
When setting OVERALL_STATUS levels use the following:
0 - Everything is good, no recent maintenance
1 - Maintenance has been completed, everything should be back up. Generic
    troubleshooting notes. Change to 0 the day after maintenance has been
    completed.
2 - System(s) operational, limited functionality
3 - System(s) experiencing major issues

For individual system statuses only the values 1, 2, or 3 are used.

OVERALL_STATUS_TEXT and OVERALL_STATUS_NOTES are only utilized if 
OVERALL_STATUS is set to 2 or 3
*/
const OVERALL_STATUS_TEXT = "Mitel Phone System Maintenance";
const OVERALL_STATUS_NOTES = "We are performing maintenance on the Mitel phone system.<br><br>Mitel Connect and workgroup functionality will be working sporadically during the maintenance.<br><br>Max and ALTAM will be down for a short time.";
const OVERALL_STATUS = 2;
const CITRIX_STATUS = 1;
const MITEL_STATUS = 1;
const OUTLOOK_STATUS = 1;

/* DO NOT EDIT BELOW THIS COMMENT ...unless you feel like it*/
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
if (OVERALL_STATUS == 0) {
    overallStatusDiv.style.backgroundColor = GREEN;
    statusDetailMessageDiv.innerHTML += `Last refresh: ${refreshTime}`;
}
else if (OVERALL_STATUS == 1) {
    overallStatusDiv.style.backgroundColor = GREEN;
    overallStatusDiv.innerHTML = "Maintenance Complete";
    statusDetailMessageDiv.innerHTML = "Maintenance is complete, if you are still experiencing issues you may need to reboot your computer and/or Citrix session."
    statusDetailMessageDiv.innerHTML += "<br><br>Please refresh this page to re-check status.";
    statusDetailMessageDiv.innerHTML += `<br><br>Last refresh ${refreshTime}`;
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
/**
/* Set color for Citrix status *
if (CITRIX_STATUS == 1) {
    citrixStatusDiv.style.borderLeftColor = GREEN;
}
else if (CITRIX_STATUS == 2) {
    citrixStatusDiv.style.borderLeftColor = YELLOW;
}
else {
    citrixStatusDiv.style.borderLeftColor = RED;
}

/* Set color for Mitel status *
if (MITEL_STATUS == 1) {
    mitelStatusDiv.style.borderLeftColor = GREEN;
}
else if (MITEL_STATUS == 2) {
    mitelStatusDiv.style.borderLeftColor = YELLOW;
}
else {
    mitelStatusDiv.style.borderLeftColor = RED;
}

/* Set color for Outlook status *
if (OUTLOOK_STATUS == 1) {
    outlookStatusDiv.style.borderLeftColor = GREEN;
}
else if (OUTLOOK_STATUS == 2) {
    outlookStatusDiv.style.borderLeftColor = YELLOW;
}
else {
    outlookStatusDiv.style.borderLeftColor = RED;
}
*/
function getCurrentTime() {
    let d = new Date();
    return d.toTimeString();
}