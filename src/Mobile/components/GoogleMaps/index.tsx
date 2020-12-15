import React from "react";
import "./GoogleMaps.css";
// import { ListSpaceByUFAux } from "../../../@types";
// import api from "../../../services/api";
// import { Token } from "../../../services/auth";

// import markerSpace from "../../../img/icones/markerSpace.png";
// import markerEvent from "../../../img/icones/markerEvent.png";

// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

// import { greenMap } from "./MapStyle";
// import keyMap from "./KeyFolder/GoogleKey";

// interface Data {
//   SpaceList: ListSpaceByUFAux[];
// }
declare const google: any;

// type searchBox = {
//   word: string;
// };

// const mapContainerStyle = {
//   width: "100vw",
//   height: "100vh",
// };

// const center = {
//   lat: -23.5656334,
//   lng: -46.5585131,
// };
// const options = {
//   styles: greenMap,
//   disableDefaultUI: true,
//   zoomControl: true,
// };

const GoogleMaps: React.FC = () => {
  // const [data, setData] = React.useState<Data>();
  // useEffect(() => {
  //   Promise.all([
  //     api.get("/api/search/uf/space/SP", {
  //       headers: { "x-auth-token": Token() },
  //     }),
  //   ]).then(async (responses) => {
  //     const [AllSpaces] = responses;
  //     const spaces = await AllSpaces.data;
  //     setData({ SpaceList: spaces });
  //   });
  // }, []);

  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: keyMap, //Adicionando a minha key da api do google
  // });

  // if (loadError) {
  //   return <h1>Error Loading Maps</h1>;
  // }
  // if (!isLoaded) {
  //   return <h1>Loading Maps</h1>;
  // }
  return (
    <div style={{ maxHeight: "90vh" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31336.50805414436!2d-37.05724860990675!3d-10.958575515118602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab1544635fa23%3A0xb52f1f62b9915806!2sCoroa%20do%20Meio%2C%20Aracaju%20-%20SE!5e0!3m2!1spt-BR!2sbr!4v1597966283170!5m2!1spt-BR!2sbr"
        className="MyMapCellPhone"
        title={"GoogleMaps"}
      ></iframe>
      {/* <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={13}
          center={center}
          options={options}
        >
          {data?.SpaceList.map((marker) => (
            <>
              {marker.status ? (
                <>
                  <Marker
                    key={marker.id}
                    position={{
                      lat: Number(marker.latitude),
                      lng: Number(marker.longitude),
                    }}
                    // onClick={() => {
                    //   HandleEvent(marker);
                    // }}
                    icon={{
                      url: markerEvent,
                      origin: new google.maps.Point(0, 0),
                      scaledSize: new google.maps.Size(30, 30),
                    }}
                  />
                </>
              ) : (
                <>
                  <Marker
                    key={marker.id}
                    position={{
                      lat: Number(marker.latitude),
                      lng: Number(marker.longitude),
                    }}
                    // onClick={() => {
                    //   MarkerSelected(marker);
                    // }}
                    icon={{
                      url: markerSpace,
                      origin: new google.maps.Point(0, 0),
                      scaledSize: new google.maps.Size(30, 30),
                    }}
                  />{" "}
                </>
              )}
            </>
          ))}
        </GoogleMap>
      </div> */}
    </div>
  );
};

export default GoogleMaps;
