import { getLocations } from "./location-utils";


export async function GET(){
    const response = getLocations()

    return Response.json(response)
}