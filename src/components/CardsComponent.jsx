import React, { useContext } from 'react';
import 'animate.css';
import { ContextAPI } from '../ContextAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCloudShowersHeavy, faCloudSun, faSnowflake, faSun, faSmog } from '@fortawesome/free-solid-svg-icons';

export const CardsComponent = () => {
    const { data, searchResult } = useContext(ContextAPI);

    return (
        <div className='row card-container'>
            {!data && (
                <div className='notification animate__animated animate__fadeIn text-center'>
                    <div className="light"></div>
                </div>
            )}
            {data && (
                <div className="card col-sm-2 animate__animated animate__flipInY" key={data.name}>
                    <div className='card-header'>
                        <span className='cityName'>{data.name}</span>
                    </div>
                    <div className='card-body'>
                        {<span className='centigrade'>{Math.round(data.main.temp)}°</span>}
                        {data.weather[0].description === "parçalı bulutlu" && <span><FontAwesomeIcon icon={faSmog} /></span>}
                        {data.weather[0].description === "karlı" && <span><FontAwesomeIcon icon={faSnowflake} /></span>}
                        {data.weather[0].description === "yağmurlu" && <span><FontAwesomeIcon icon={faCloudShowersHeavy} /></span>}
                        {data.weather[0].description === "bulutlu" && <span><FontAwesomeIcon icon={faCloud} /></span>}
                        {data.weather[0].description === "kapalı" && <span><FontAwesomeIcon icon={faCloudSun} /></span>}
                        {data.weather[0].description === "açık" && <span><FontAwesomeIcon icon={faSun} /></span>}
                        {data.weather[0].description === "parçalı az bulutlu" && <span><FontAwesomeIcon icon={faSmog} /></span>}
                    </div>
                    <div className="card-footer">
                        <span className="card-text">{data.weather[0].description}</span>
                        <span className='max-min'>En düşük: {Math.round(data.main.temp_min)}°</span>
                        <span className='max-min'>En yüksek: {Math.round(data.main.temp_max)}°</span>
                    </div>
                </div>
            )}
        </div>
    );
};
