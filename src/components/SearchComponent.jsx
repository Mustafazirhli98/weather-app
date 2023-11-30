import React, { useContext } from 'react'
import { ContextAPI } from '../ContextAPI'
import { faArrowLeftLong, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Toast } from 'react-bootstrap'

const SearchComponent = () => {

    const {
        setSearchResult, searchWeather, optionalSearch, setOptionalSearch,
        getLocation, setData, isOpen, closeToast, showToast, searchResult } = useContext(ContextAPI);


    return (
        <div className="row">
            <div className="col-sm-12">
                {/* Şehir bilgisini konum veya isim ile almayı seçtiğimiz ekran */}
                {
                    !optionalSearch && (
                        <div className="button-group  animate__animated animate__bounce">
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
                        <div className='animate__animated animate__fadeInDown'>
                            {/* Şehir isminin inputa girildiği ekran */}
                            <Toast className='toast' show={isOpen}>
                                <Toast.Body className='toastBody'>
                                    <span>Şehir bilgisi bulunamadı.</span>
                                    <FontAwesomeIcon
                                        className='closeIcon'
                                        icon={faXmark}
                                        onClick={() => closeToast()}
                                    />
                                </Toast.Body>
                            </Toast>
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
                                    <button
                                        className="btn btnSearch"
                                        id="searchButton"
                                        type="submit"
                                        onClick={() => {
                                            if (searchResult === "") {
                                                showToast()
                                            }
                                        }}>
                                        Ara
                                    </button>
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