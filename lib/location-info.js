export const getLocationData = async (lat, lon)=>{
    try {
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`)
        const data = await response.json()
        return data
        
    } catch (error) {
        console.error(error.message);
    }
}


export  const getLocationLongList = async()=>{
    try {
        const response = await fetch(`http://localhost:3000/api/location`)
        const data = await response.json()
        return data
        
    } catch (error) {
        console.error(error.message);
    }
}

export const getLocationLatLong = async (locationName)=>{
    try {
        const response = await fetch(`http://localhost:3000/api/location/${locationName}`)
        const data = await response.json()
        return data
        
    } catch (error) {
        console.error(error.message);
    }
}

export const getResolvedLatLong = async(location, lat, lon)=>{
    if(lat && lon){
        return { lat, lon}
    }
    const locationlatlon = await getLocationLatLong(location)
    if(locationlatlon.latitude && locationlatlon.longitude){
        const lat = locationlatlon.latitude
        const lon = locationlatlon.longitude
        return { lat, lon }
    }
}