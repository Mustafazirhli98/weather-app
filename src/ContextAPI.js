// ContextAPI.js
import React, { createContext, useContext, useEffect, useState } from "react";

const ContextAPI = createContext();

const ContextProvider = ({ children }) => {
    //#region states
    const [data, setData] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const [optionalSearch, setOptionalSearch] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    //#endregion

    const baseURL = "https://api.openweathermap.org/data/2.5/";
    const API_KEY = "3c22ed5013a49a8ee3823efa2f192cc3";
    let cityLocation;



    const searchWeather = () => {
        if (!searchResult) {
            return;
        }
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseURL}weather?q=${searchResult}&appid=${API_KEY}&units=metric&lang=tr`);
                if (!response.ok) {
                    showToast()
                } else {
                    const weatherData = await response.json();
                    setData(weatherData);
                }
            } catch (error) {
                console.error("Hava durumu bilgisi getirilemedi.", error);
            }
        };
        fetchData();
    };

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
    };

    const successLocation = async (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let api_key = "dbfec9a9c2ef454098b083a7b00e1e1e";
        let url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api_key}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            cityLocation = data.results[0].components.province;
            setSearchResult(cityLocation);
            setSubmitting(true); // Submit olduğunu belirt
        } catch (error) {
            console.error("Konum bilgisi alınamadı veya hava durumu sorgulanamadı.", error);
        }
    };

    useEffect(() => {
        if (submitting) {
            searchWeather();
            setSubmitting(false);
            setSearchResult("")
        }
    }, [searchResult]);

    const errorLocation = (err) => {
        console.error("Konum bilgisi alınamadı.", err);
    };

    const showToast = () => {
        setIsOpen(true)
        setTimeout(() => {
            setIsOpen(false)
        }, 2000)
    }
    const closeToast = () => {
        setIsOpen(false)
    }
    //context ile gönderilecek ögeler
    let value = {
        data, setData, searchResult, setSearchResult, searchWeather,
        optionalSearch, setOptionalSearch, getLocation, showToast,
        isOpen, closeToast, searchResult
    }

    return (
        <ContextAPI.Provider value={value}>
            {children}
        </ContextAPI.Provider>
    );
};

export { ContextAPI, ContextProvider };
