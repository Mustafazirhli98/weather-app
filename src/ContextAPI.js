import React, { createContext, useContext, useEffect, useState } from "react";

const ContextAPI = createContext();

const ContextProvider = ({ children }) => {
    const [data, setData] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const baseURL = "https://api.openweathermap.org/data/2.5/";
    const API_KEY = "3c22ed5013a49a8ee3823efa2f192cc3";
    let icons = {

    }

    const searchWeather = () => {
        const fetchData = async () => {
            const response = await fetch(`${baseURL}weather?q=${searchResult}&appid=${API_KEY}&units=metric&lang=tr`);
            const weatherData = await response.json();
            setData(weatherData)
        }
        fetchData()
    }


    return (
        <ContextAPI.Provider value={{ data, searchResult, setSearchResult, searchWeather }}>
            {children}
        </ContextAPI.Provider>
    )
}
export { ContextAPI, ContextProvider }


