import React, { useContext } from 'react'
import { ContextAPI } from '../ContextAPI'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchComponent = () => {

    const { setSearchResult, searchWeather, optionalSearch, setOptionalSearch, getLocation, setData } = useContext(ContextAPI)
    console.log(optionalSearch)
    return (

        <div className="row">
            <div className="col-sm-12">
                {
                    !optionalSearch && (
                        <div className="button-group">
                            <button
                                id='searchByCity'
                                onClick={(e) => {
                                    setData("")
                                    setOptionalSearch(e.target.id)
                                }}
                            >
                                Şehir bilgisine göre hava durumu
                            </button>
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
                    )
                }
                {
                    optionalSearch === "searchByCity" && (
                        <div>
                            <div className='homePage'
                                onClick={() => {
                                    setOptionalSearch(false)
                                    setData("")
                                }}>
                                <FontAwesomeIcon icon={faArrowLeftLong} />
                                <span className='homePageText'>Ana Sayfa</span>
                            </div>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    searchWeather();
                                    document.querySelector("input").value = "";
                                }}>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Şehir ismi girin"
                                        onChange={(e) => setSearchResult(e.target.value)}
                                    />
                                    <button className="btn btnSearch" id="searchButton" type="submit">Ara</button>
                                </div>
                                <button
                                    className='btn btn-block'
                                    onClick={() => getLocation()}
                                >
                                    Konuma göre hava durumu
                                </button>
                            </form>
                        </div>
                    )
                }
            </div>
        </div >

    )
}

export default SearchComponent