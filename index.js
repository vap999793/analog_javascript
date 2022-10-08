setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30*htime+mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    htime = parseInt(htime/10)===0?("0"+htime):htime;
    mtime = parseInt(mtime/10)===0?("0"+mtime):mtime;
    stime = parseInt(stime/10)===0?("0"+stime):stime;

    document.getElementById('digitalHour').innerHTML = htime;
    document.getElementById('digitalMinute').innerHTML = mtime;
    document.getElementById('digitalSecond').innerHTML = stime;
}, 1000);