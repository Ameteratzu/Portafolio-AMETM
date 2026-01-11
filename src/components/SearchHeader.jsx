import React, { useState, useEffect } from 'react';
import { MdSearch, MdMic, MdApps, MdSettings, MdClose } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

const SearchHeader = ({ activeTab = 'todo', setActiveTab = () => { } }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // Get initial search term from URL or set based on active tab
    const getInitialSearchTerm = () => {
        const params = new URLSearchParams(location.search);
        const query = params.get('q');
        if (query) return query;

        // Set default based on active tab
        switch (activeTab) {
            case 'sobre-mi': return 'Amet Marcelo Quispe';
            case 'proyectos': return 'Proyectos';
            case 'contacto': return 'Contacto';
            case 'blog': return 'Blog';
            default: return '';
        }
    };

    const [searchTerm, setSearchTerm] = useState(getInitialSearchTerm());

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('q');
        if (query) {
            setSearchTerm(query);
        } else {
            // Update search term when tab changes
            switch (activeTab) {
                case 'sobre-mi':
                    setSearchTerm('Amet Marcelo Quispe');
                    break;
                case 'proyectos':
                    setSearchTerm('Proyectos');
                    break;
                case 'contacto':
                    setSearchTerm('Contacto');
                    break;
                case 'blog':
                    setSearchTerm('Blog');
                    break;
                default:
                    setSearchTerm('');
            }
        }
    }, [location, activeTab]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    };

    const tabs = [
        { id: 'todo', label: 'Todo' },
        { id: 'proyectos', label: 'Proyectos' },
        { id: 'sobre-mi', label: 'Sobre mí' },
        { id: 'contacto', label: 'Contacto' },
        { id: 'blog', label: 'Blog' }
    ];

    return (
        <div className="search-header-container" style={{ borderBottom: '1px solid #ebebeb', paddingBottom: '0' }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '20px 20px 10px', flexWrap: 'wrap' }}>

                {/* Logo */}
                <div style={{
                    marginRight: '40px',
                    cursor: 'pointer',
                    userSelect: 'none',
                    fontFamily: '"Silkscreen", cursive'
                }} onClick={() => navigate('/')}>
                    <span style={{ color: '#4285F4', fontSize: '24px', fontWeight: 'bold' }}>A</span>
                    <span style={{ color: '#EA4335', fontSize: '24px', fontWeight: 'bold' }}>m</span>
                    <span style={{ color: '#FBBC05', fontSize: '24px', fontWeight: 'bold' }}>e</span>
                    <span style={{ color: '#4285F4', fontSize: '24px', fontWeight: 'bold' }}>t</span>
                    <span style={{ color: '#EA4335', fontSize: '24px', fontWeight: 'bold' }}>.</span>
                    <span style={{ color: '#34A853', fontSize: '24px', fontWeight: 'bold' }}>d</span>
                    <span style={{ color: '#EA4335', fontSize: '24px', fontWeight: 'bold' }}>e</span>
                    <span style={{ color: '#4285F4', fontSize: '24px', fontWeight: 'bold' }}>v</span>
                </div>

                {/* Search Input Box */}
                <form onSubmit={handleSearch} style={{ flexGrow: 1, maxWidth: '690px', position: 'relative' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: '#fff',
                        border: '1px solid transparent',
                        boxShadow: '0 2px 5px 1px rgba(64,60,67,.16)',
                        borderRadius: '24px',
                        padding: '10px 18px',
                        height: '44px'
                    }}>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ flex: 1, border: 'none', outline: 'none', fontSize: '16px' }}
                        />
                        <MdClose
                            size={24}
                            color="#70757a"
                            style={{ cursor: 'pointer', borderRight: '1px solid #dfe1e5', paddingRight: '10px', marginRight: '10px', display: searchTerm ? 'block' : 'none' }}
                            onClick={() => setSearchTerm('')}
                        />
                        <MdMic size={24} color="#4285F4" style={{ cursor: 'pointer', marginRight: '10px' }} />
                        <MdSearch size={24} color="#4285F4" style={{ cursor: 'pointer' }} onClick={handleSearch} />
                    </div>
                </form>

                {/* Right Icons */}
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', gap: '15px' }}>
                    <MdSettings size={24} color="#5f6368" style={{ cursor: 'pointer' }} />
                    <MdApps size={24} color="#5f6368" style={{ cursor: 'pointer' }} />
                    <img
                        src={portfolioData.info.avatar}
                        alt="Profile"
                        style={{ height: '32px', width: '32px', borderRadius: '50%', cursor: 'pointer' }}
                    />
                </div>
            </div>

            {/* Tabs / Navigation */}
            <div style={{
                display: 'flex',
                paddingLeft: '150px',
                gap: '26px',
                fontSize: '14px',
                color: '#5f6368',
                overflowX: 'auto',
                fontFamily: '"Space Grotesk", sans-serif'
            }}>
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            padding: '8px 4px',
                            borderBottom: activeTab === tab.id ? '3px solid #1a0dab' : 'none',
                            color: activeTab === tab.id ? '#1a0dab' : '#5f6368',
                            fontWeight: activeTab === tab.id ? '500' : '400',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchHeader;
