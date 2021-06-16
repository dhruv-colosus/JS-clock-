console.log("Start")
let a;
let date;
let time;

const options={weekday:'long',year:'numeric',month:'long',day:'numeric'}
a=new Date()

console.log(a.getHours()+":"+a.getMinutes()+":"+a.getSeconds())

let curtime=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
let curdate=a.toLocaleDateString(undefined,options);

document.getElementById('date').innerHTML=curdate;
document.getElementById('time').innerHTML=curtime;


setInterval(() => {
    a=new Date()

    curtime=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
    curdate=a.toLocaleDateString(undefined,options);
    document.getElementById('date').innerHTML=curdate;
    document.getElementById('time').innerHTML=curtime;
    
}, 1000);