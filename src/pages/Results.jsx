import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';
import AboutMe from '../components/AboutMe';
import KnowledgePanel from '../components/KnowledgePanel';

const Results = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('todo');

    useEffect(() => {
        // Check if we have a state with activeTab
        if (location.state?.activeTab) {
            setActiveTab(location.state.activeTab);
        }
    }, [location]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: 'auto', width: '100%' }}>
            <SearchHeader activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="main-content" style={{
                display: 'flex',
                padding: '20px 180px',
                paddingBottom: '60px',
                alignItems: 'flex-start'
            }}>
                {activeTab === 'sobre-mi' ? <AboutMe /> : <SearchResults />}
                {activeTab !== 'sobre-mi' && <KnowledgePanel />}
            </div>
        </div>
    );
};

export default Results;
