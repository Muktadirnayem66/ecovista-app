import { getLoactionByName } from "../location-utils";



export async function GET(request, {params}){
    const response = getLoactionByName(params?.name)
    return Response.json(response)
}