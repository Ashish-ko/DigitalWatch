setInterval(displayclock, 500);
function displayclock() {
    var time = new Date();
    var d = time.getDate();
    var m = time.getMonth();
    m = m+1;
    var y = time.getFullYear();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var en = 'AM';
    if (hrs > 12) {
        en = 'PM';
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs < 10) {
        hrs = '0' + hrs;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    if (d < 10) {
        d = '0' + d;
    }
    if (m<10) {
        m = '0' + m;
    }


    document.getElementById('clock').innerHTML = d + ':' + m + ':' + y + ' ' + hrs + ':' + min + ':' + sec + ' ' + en;
}



function toggleClass() {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
}