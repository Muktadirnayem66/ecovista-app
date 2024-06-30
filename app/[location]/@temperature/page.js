import NoLocationInfo from "@/components/NoLocationInfo";
import TemperatureComp from "@/components/TemperatureComp";
import { getResolvedLatLong } from "@/lib/location-info";

const Termperature = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolve = await getResolvedLatLong(location, latitude, longitude)
  if(resolve?.lat && resolve?.lon){

    return <TemperatureComp lat={resolve.lat} lon={resolve.lon} />;
  }else{
    return <NoLocationInfo/>
  }
};

export default Termperature;
