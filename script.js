function displayTime()
{
    let dt = new Date();
    let hr = (dt.getHours())%12;
    let az = document.getElementById("tm");
    az.innerHTML = (hr);

    let mn = dt.getMinutes();
    let hj = document.getElementById("tm1");
    hj.innerHTML = (mn);

    let sc = dt.getSeconds();
    let tm = document.getElementById("tm2");
    tm.innerHTML = (sc);
}
setInterval(displayTime,1000)