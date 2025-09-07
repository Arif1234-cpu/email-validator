console.log("This is my script")
let result = {
    "tag": "",
    "free": true ,
    "role": false,
    "user": "einsteinwitharif",
    "email": "einsteinwitharif@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked")
    ResultCont.innerHTML=`<img width="95" src="img/loading.svg" alt="img">`
    let key = "ema_live_2ndUNJtZ97aidMG7ry3amPKlhBfjbgvOJEHNS2tw"
    let email = document.getElementById("username").value
     
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key]!=="" && result[key]!==" "){

            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    console.log(str)
    ResultCont.innerHTML = str
});
  const toggle = document.querySelector('.Contact-toggle');
  const info = document.querySelector('.Contact-info');

  toggle.addEventListener('click', () => {
    info.style.display = info.style.display === 'block' ? 'none' : 'block';
  });
 



