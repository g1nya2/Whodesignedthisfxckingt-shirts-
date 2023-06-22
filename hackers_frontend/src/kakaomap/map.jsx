import React, { useEffect, useState } from 'react';

const { kakao } = window;
const { CosmosClient } = require("@azure/cosmos");

const endpoint = "https://hospitalbeds.documents.azure.com:443/";
const key = "vkXg1ahgs15J5Gl8whRb3vlgzlHHP560YA6RuBX5RkPX81kCYUwg0ZoFNucvgah9xYxwpEDEqv6vACDbi30Ovw==";

const client = new CosmosClient({ endpoint, key });

const MapTest = () => {
    const [map, setMap] = useState(null);

    useEffect(() => {
        const container = document.getElementById('map');
        const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
        const kakaoMap = new kakao.maps.Map(container, options);
        setMap(kakaoMap);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    const currentPosition = new kakao.maps.LatLng(latitude, longitude);
                    kakaoMap.setCenter(currentPosition);
                    // 현재 위치에 마커 추가 등의 작업을 할 수 있습니다.
                },
                error => {
                    console.error(error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
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
