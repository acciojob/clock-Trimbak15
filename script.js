//your JS code here. If required.
function getTime() {
    const time = new Date();
    const dateString = `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`;

    let hr = time.getHours();
    let timeString = "";

    if (hr >= 12) {
        // pm
        if (hr === 12) {
            // no modification
            timeString = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} PM`;
        } else {
            hr -= 12;
            timeString = `${hr}:${time.getMinutes()}:${time.getSeconds()} PM`;
        }
    } else {
        // am
        timeString = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} AM`;
    }
    return dateString + ", " + timeString;
}
const para = document.getElementById('timer');

function timeGenerate() {
    para.innerText = getTime();
}
setInterval(timeGenerate, 1000);