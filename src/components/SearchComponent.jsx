import React, { useContext } from 'react'
import { ContextAPI } from '../ContextAPI'

const SearchComponent = () => {

    const { setSearchResult, searchWeather } = useContext(ContextAPI)
    return (

        <div className="row">
            <div className="col-sm-12">
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        searchWeather()
                    }}>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Şehir ismi girin"
                            onChange={(e) => setSearchResult(e.target.value)}
                        />
                        <button className="btn btnSearch" id="searchButton" type="submit">Ara</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SearchComponent