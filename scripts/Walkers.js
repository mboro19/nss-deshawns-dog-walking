import { getCities, getWalkerCities, getWalkers } from "./database.js"


const walkers = getWalkers()

const citiesABC = getCities()
const walkerCities = getWalkerCities()

document.addEventListener(
    `click`,
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")
                
            for (const walker of walkers) {
                
                if (walker.id === parseInt(walkerId)) {
                    const assignments = getWalkerCitiesObj(walker)
                    const cities = citiesToWalkers(assignments)
            
                    window.alert(`${walker.name} services${cities}`)
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

const getWalkerCitiesObj = (walkerId) => {

    let array = [];

    for (let walker of walkerCities){


        if(walker.walkerId === walkerId.id){

            array.push(walker)
        }
    
}
    return array
    
}

export const citiesToWalkers = (assignment) => {

    let cityId = ``

    for (let sign of assignment){

        for (let city of citiesABC){

            if(city.id === sign.cityId){

                cityId = `${cityId} ${city.name}`
        }
        
    }

}

    return cityId
}


/*



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