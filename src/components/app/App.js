import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {Header} from '../header/header';
import {Title} from '../title/title';
import {Cards} from '../cards/cards';
import { getCards } from '../../services/actions/cards'
import {Footer} from '../footer/footer'

function App() {
    
    const store = useSelector(store => store)
    const dispatch = useDispatch()
    React.useEffect(() => {
        document.title='paraweb'
        dispatch(getCards())
    }, [])
    return (
        <>
        {store && store.getCardsSuccess ?
        <>
        <Header />
        <main>
            <Title />
            <Cards />
        </main>
        <Footer />
        </> : 'Загрузка...' }
        </> 
    )
}

export default App;
