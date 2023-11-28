import React from 'react'
import SearchComponent from './SearchComponent'
import { CardsComponent } from './CardsComponent'

export const MainComponent = () => {
    return (
        <div className='container'>
            <SearchComponent />
            <CardsComponent />
        </div>
    )
}
