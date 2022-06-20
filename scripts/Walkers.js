import { getCities, getWalkerCities, getWalkers } from "./database.js"

const walkers = getWalkers()

const cities = getCities()
const walkerCities = getWalkerCities()

document.addEventListener(
    `click`,
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                
                if (walker.id === parseInt(walkerId)) {
                    window.alert(`${walker.name} services ${walkerCityAssignments.cityId}`)
                }
            }
        }
    }
)




export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

const getWalkerCitiesObj = () => {

    

    for(let walker of walkerCities){

        for (let i=0; i<walker.length; i++){

            
        }

        return walker
    }
    
    
}
let walkerCityAssignments = getWalkerCitiesObj()
console.log(walkerCityAssignments)

/*

let cities = getCities()
let walkerArray = getWalkerCities()



const walkerCityServicedFunc = () => { 

    let array = [];

    let walkerId = null;
    let walkerAssignment = null;
    
    for (let walker of walkers){

        walkerId.push(walker)
    }
    
    for (let walkerObj of walkerArray){

        walkerAssignment.push(walkerObj)

    }
    if(walkerAssignment.walkerId === walkerId.id){

        array.push(walker.name,walkerObj.cityId)
    };
    

    return array
}

*/