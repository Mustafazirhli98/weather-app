// ContextAPI.js
import React, { createContext, useContext, useEffect, useState } from "react";

const ContextAPI = createContext();

const ContextProvider = ({ children }) => {
    const [data, setData] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const [optionalSearch, setOptionalSearch] = useState(false);
    const [submitting, setSubmitting] = useState(false); // Yeni eklenen state

    const baseURL = "https://api.openweathermap.org/data/2.5/";
    const API_KEY = "3c22ed5013a49a8ee3823efa2f192cc3";

    const searchWeather = () => {
        if (!searchResult) {
            console.log("Şehir adı boş");
            return;
        }
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseURL}weather?q=${searchResult}&appid=${API_KEY}&units=metric&lang=tr`);
                const weatherData = await response.json();
                setData(weatherData);
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
            const cityLocation = data.results[0].components.province;
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
        }
    }, [searchResult]);

    const errorLocation = (err) => {
        console.error("Konum bilgisi alınamadı.", err);
    };

    return (
        <ContextAPI.Provider value={{ data, setData, searchResult, setSearchResult, searchWeather, optionalSearch, setOptionalSearch, getLocation }}>
            {children}
        </ContextAPI.Provider>
    );
};

export { ContextAPI, ContextProvider };
