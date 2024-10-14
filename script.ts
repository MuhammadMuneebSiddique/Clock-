function clock(){
    let days : string[] = ["Monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
    let months: string[] = ["january","february","March","april","june","july","august","september","october","november","december"]
    let hrs:any = document.getElementById("hour")
    let minutes: any = document.getElementById("minutes")
    let second: any = document.getElementById("second")
    let ampm: any = document.getElementById("ampm")
    let day: any = document.getElementById("dd")
    let date: any = document.getElementById("ddmmyy")

    let time = new Date()

    let h :number | string= time.getHours()
    let m :number | string = time.getMinutes()
    let s :number | string = time.getSeconds()
    let dy :number = time.getDay()
    let dd : number = time.getDate()
    let mm : number = time.getMonth()
    let yy : number = time.getFullYear()


    // Hours
    if(h > 12){
        h = h - 12
    }else if(h == 0){
        h = 12
    }
    
    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s


    hrs.innerHTML = h
    
    // Minutes
    minutes.innerHTML = m

    // Second
    second.innerHTML = s

    //ampm
    let period = h <= 12 ? "PM" : "AM"
     
    ampm.innerHTML = period

    // date

    date.innerHTML = months[mm]+"-"+ dd +"-"+yy
    
    // day

    day.innerHTML = days[dy]
}

setInterval(clock,1000);