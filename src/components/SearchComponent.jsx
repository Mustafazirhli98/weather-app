import React, { useContext } from 'react'
import { ContextAPI } from '../ContextAPI'
import { Link } from 'react-router-dom'

const SearchComponent = () => {

    const { searchWeather, getLocation, setData, } = useContext(ContextAPI);

    return (
        <div className="row button-group  animate__animated animate__bounce">
            <div className="col-sm-12 col-md-6">
                <Link to={"/searchCity"}>
                    <button
                        id='searchByCity'
                        onClick={() => setData("")}>
                        Şehir bilgisine göre hava durumu
                    </button>
                </Link>
            </div>
            <div className="col-sm-12 col-md-6">
                <button
                    id='searchByLocation'
                    onClick={() => {
                        getLocation()
                        searchWeather()
                    }}>
                    Konuma göre hava durumu
                </button>
            </div>
        </div >
    )
}

export default SearchComponent