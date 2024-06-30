import NoLocationInfo from "@/components/NoLocationInfo";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const WeatherPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
    const resolve = await getResolvedLatLong(location, latitude, longitude)
    if(resolve?.lat && resolve?.lon){

        return <WeatherComponent lat={resolve.lat} lon={resolve.lon}  />;
    }else{
        return <NoLocationInfo/>
    }
};

export default WeatherPage;