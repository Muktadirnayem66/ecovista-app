import AQIComponent from "@/components/AQIComponent";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const AQIPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
    const resolve = await getResolvedLatLong(location, latitude, longitude)
    if(resolve?.lat && resolve?.lon){
        return <AQIComponent lat={resolve.lat} lon={resolve.lon} />;
    }else{
       return  <NoLocationInfo/>
    }
};

export default AQIPage;
