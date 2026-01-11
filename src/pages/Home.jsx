import React from 'react';
import SearchHome from '../components/SearchHome';
import Header from '../components/Header';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />
            <SearchHome />
        </div>
    );
};

export default Home;
