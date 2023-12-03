import React, { useContext } from 'react'
import { ContextAPI } from '../ContextAPI'
import { faArrowLeftLong, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Toast } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SearchComponent = () => {

    const { searchWeather, getLocation, setData, } = useContext(ContextAPI);

    return (
        <div className="row">
            <div className="col-sm-12">
                {/* Şehir bilgisini konum veya isim ile almayı seçtiğimiz ekran */}
                <div className="button-group  animate__animated animate__bounce">
                    <Link to={"/searchCity"}
                    >
                        <button
                            id='searchByCity'
                            onClick={(e) => {
                                setData("")
                            }}
                        >
                            Şehir bilgisine göre hava durumu
                        </button>
                    </Link>
                    <button
                        id='searchByLocation'
                        onClick={() => {
                            getLocation()
                            searchWeather()
                        }}
                    >
                        Konuma göre hava durumu
                    </button>
                </div>
            </div>
        </div >

    )
}

export default SearchComponent