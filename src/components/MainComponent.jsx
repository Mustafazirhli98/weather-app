import React from 'react'
import SearchComponent from './SearchComponent'
import { CardsComponent } from './CardsComponent'
import { Route, Routes } from 'react-router-dom'
import SearchCity from './SearchCity'

export const MainComponent = () => {
    return (
        <div className='container'>
            <Routes>
                <Route path='/' element={<SearchComponent />} />
                <Route path='/searchCity' element={<SearchCity />} />
            </Routes>
            <CardsComponent />
        </div>
    )
}
