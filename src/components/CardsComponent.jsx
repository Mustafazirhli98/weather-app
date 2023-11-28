import React, { useContext } from 'react'
import 'animate.css';
import { ContextAPI } from '../ContextAPI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCloud, faCloudShowersHeavy, faCloudSun, faSnowflake, faSun, faWind, } from '@fortawesome/free-solid-svg-icons'

export const CardsComponent = () => {

    const { data } = useContext(ContextAPI)
    return (
        <div className='row card-container' >
            {
                !data && (
                    <>
                        <div className='notification animate__animated animate__fadeIn text-center'>
                            Hava durumuna bakmak için arama yap.
                            <div class="light"></div>
                        </div>
                    </>

                )
            }
            {
                data &&
                <div className="card col-sm-2" key={data.name}>
                    <div className='card-header'>
                        <span className='cityName'>{data.name}</span>
                    </div>
                    <div className='card-body'>
                        <span className='centigrade'>{Math.round(data.main.temp)}°</span>
                        <span><FontAwesomeIcon icon={faBolt} /></span>

                    </div>
                    <div className="card-footer">
                        <span className="card-text">{data.weather[0].description}</span>
                        <span className='max-min'>En düşük: {Math.round(data.main.temp_min)}°</span>
                        <span className='max-min'>En yüksek: {Math.round(data.main.temp_max)}°</span>
                    </div>
                </div>


            }
        </div>
    )
}




