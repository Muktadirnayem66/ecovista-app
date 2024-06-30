import Locationinfo from "@/components/Locationinfo";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";


const page = async ({
    params: { location },
    searchParams: { latitude, longitude },
}) => {
    const resolve = await getResolvedLatLong(location, latitude, longitude)
    if(resolve?.lat && resolve?.lon){

        return <Locationinfo lat={resolve.lat} lon={resolve.lon}/>
    }else{
        return <NoLocationInfo/>
    }
};

export default page;