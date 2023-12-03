import React, { useContext, useState } from 'react'
import { Toast } from 'react-bootstrap'
import { ContextAPI } from '../ContextAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SearchCity = () => {

    const { setSearchResult, searchWeather, getLocation, setData, isOpen, closeToast, showToast, searchResult } = useContext(ContextAPI);
    const [isShaking, setIsShaking] = useState(false);

    const startAnimate = () => {
        setIsShaking(true)
    }
    const stopAnimate = () => {
        setIsShaking(false)
    }

    return (
        <>
            <div className='animate__animated animate__fadeInDown'>
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
                        setData("")
                    }}>
                    <Link to={"/"} className='toHomePageLinkElement' onMouseOver={() => startAnimate()} onMouseLeave={() => stopAnimate()}>
                        <FontAwesomeIcon
                            icon={faArrowLeftLong}
                            className={`arrow-icon animate__animated animate__infinite ${isShaking ? "animate__slideOutLeft" : ""}`}
                        />
                        <span className='homePageText'>Ana Sayfa</span>
                    </Link>
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
                        onClick={() => {
                            getLocation()
                        }}
                    >
                        Konuma göre hava durumu
                    </button>
                </form>
            </div>
        </>
    )
}

export default SearchCity