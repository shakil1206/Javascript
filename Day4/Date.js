setInterval(()=> {

  let time = new Date().toLocaleTimeString();
  document.getElementById("time").innerText=time;
}, 1000)

