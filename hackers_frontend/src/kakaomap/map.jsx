/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';

const { kakao } = window;
const { CosmosClient } = require("@azure/cosmos");

const endpoint = "https://hospitalbeds.documents.azure.com:443/";
const key = "vkXg1ahgs15J5Gl8whRb3vlgzlHHP560YA6RuBX5RkPX81kCYUwg0ZoFNucvgah9xYxwpEDEqv6vACDbi30Ovw==";

const MapTest = () => {
    const [map , setMap] = useState(null);

    const fetchNearbyHospitals = async (latitude, longitude) => {
        const client = new CosmosClient({ endpoint, key });
        const database = client.database("YourDatabaseName");
        const container = database.container("YourContainerName");

        const query = `
            SELECT *
            FROM c
            WHERE ST_DISTANCE(c.location, { "type": "Point", "coordinates": [${longitude}, ${latitude}] }) <= @distance
        `;

        const parameters = [{ name: "@distance", value: 5000 }]; // 5km
        const hospitals = await container.items.query({ query, parameters }).fetchAll();

        return hospitals.resources;
    };

    const showNearbyHospitals = async (kakaoMap, latitude, longitude) => {
        const nearbyHospitals = await fetchNearbyHospitals(latitude, longitude);

        nearbyHospitals.forEach((hospital) => {
            const hospitalPosition = new kakao.maps.LatLng(hospital.location.coordinates[1], hospital.location.coordinates[0]);
            const marker = new kakao.maps.Marker({ map: kakaoMap, position: hospitalPosition });

            // 인포윈도우 및 클릭 이벤트를 처리할 수 있습니다.
        });
    };

    useEffect(() => {
        const container = document.getElementById("map");
        const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
        const kakaoMap = new kakao.maps.Map(container, options);
        setMap(kakaoMap);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    const currentPosition = new kakao.maps.LatLng(latitude, longitude);
                    kakaoMap.setCenter(currentPosition);

                    await showNearbyHospitals(kakaoMap, latitude, longitude);
                },
                (error) => {
                    console.error(error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <div
            style={{
                width: '475px',
                height: '475px',
                display: 'inline-block',
                marginLeft: '116px',
                marginRight: '5px',
                marginTop: '130px',
            }}
        >
            <div id="map" style={{ width: '100%', height: '100%' }}></div>
        </div>
    );
};

export default MapTest;
