let raceNumber = Math.floor(Math.random() * 1000)
let registeredEarly = false
let runnersAge = 4

if(runnersAge < 18 && registeredEarly === true){
    console.log(raceNumber + 1000)
}else {console.log("not register")}

if(runnersAge > 18 && registeredEarly === true){
    console.log(`Your race stars at 9:30am... racenumber${raceNumber}`)
} else if(runnersAge > 18 && registeredEarly === false){
    console.log("Late registers race start at 11:00am racenumber " + raceNumber +  ".")
}else if(runnersAge < 18 && registeredEarly === false){
    console.log(`Youth race starts at 12:30pm raceNumber ${raceNumber}`)
}else{console.log("Youre late to register" )}
