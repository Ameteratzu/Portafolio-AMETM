import React, { useState } from 'react';
import PokemonCompanion from './PokemonCompanion';
import { MdSearch, MdMic } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

import bgImage from '../assets/2gfwG.png';

const SearchHome = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e) e.preventDefault();
        // Navigate to projects (todo tab shows all projects)
        navigate(`/search?q=${encodeURIComponent(searchTerm || '')}`);
    };

    const handleAboutMe = () => {
        // Navigate to About Me section
        navigate('/search', { state: { activeTab: 'sobre-mi' } });
    };

    return (
        <div className="search-home-container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            {/* Spacer to push content to center-visual */}
            <div style={{ flex: 1 }}></div>

            <div className="logo-section" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <h1 style={{
                    fontSize: '90px',
                    fontWeight: '400',
                    letterSpacing: '-2px',
                    marginBottom: '10px',
                    fontFamily: '"Silkscreen", cursive',
                    textShadow: '4px 4px 0px rgba(0,0,0,0.1)'
                }}>
                    <span style={{ color: 'var(--color-blue)' }}>A</span>
                    <span style={{ color: 'var(--color-red)' }}>m</span>
                    <span style={{ color: 'var(--color-yellow)' }}>e</span>
                    <span style={{ color: 'var(--color-blue)' }}>t</span>
                    <span style={{ color: 'var(--color-red)' }}>.</span>
                    <span style={{ color: 'var(--color-green)' }}>d</span>
                    <span style={{ color: 'var(--color-red)' }}>e</span>
                    <span style={{ color: 'var(--color-blue)' }}>v</span>
                    {/* Using Antigravity as my name, or usually "Portfolio" or User Name */}
                    {/* Let's stick to "Developer" or user name if known. User instructions said "Portafolio de desarrollador". Let's use "Developer" styled like Google */}
                </h1>
            </div>

            <div style={{ width: '100%', maxWidth: '584px', padding: '0 20px' }}>
                <form onSubmit={handleSearch} style={{ position: 'relative', marginBottom: '30px' }}>
                    <div className="search-bar-wrapper" style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #dfe1e5',
                        borderRadius: '24px',
                        padding: '10px 14px',
                        boxShadow: 'none',
                        transition: 'all 0.3s',
                        backgroundColor: 'white'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 1px 6px rgba(32,33,36,0.28)'}
                        onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                    >
                        <MdSearch size={22} color="#9aa0a6" />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={() => setShowSuggestions(true)}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                            style={{
                                flex: 1,
                                border: 'none',
                                outline: 'none',
                                fontSize: '16px',
                                marginLeft: '12px',
                                fontFamily: 'inherit',
                                backgroundColor: 'transparent'
                            }}
                        />
                        <MdMic size={22} color="#4285F4" style={{ cursor: 'pointer' }} />
                    </div>

                    {/* Search Suggestions Dropdown */}
                    {showSuggestions && (
                        <div style={{
                            marginTop: '8px',
                            backgroundColor: 'white',
                            border: '1px solid #dfe1e5',
                            borderRadius: '24px',
                            boxShadow: '0 4px 6px rgba(32,33,36,0.28)',
                            width: '100%',
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            zIndex: 1000,
                            overflow: 'hidden',
                            maxHeight: '400px',
                            overflowY: 'auto'
                        }}>
                            <div style={{ padding: '12px 20px', color: '#9aa0a6', fontSize: '13px', fontWeight: 'bold', borderBottom: '1px solid #f0f0f0' }}>
                                {searchTerm ? 'Resultados' : 'Proyectos Destacados'}
                            </div>
                            {portfolioData.projects
                                .filter(p => !searchTerm || p.title.toLowerCase().includes(searchTerm.toLowerCase()))
                                .slice(0, 5)
                                .map((project, index) => (
                                    <div key={project.id}
                                        style={{
                                            padding: '12px 20px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            borderTop: index === 0 ? 'none' : '1px solid #f0f0f0'
                                        }}
                                        onMouseDown={() => {
                                            window.location.href = project.url;
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                                    >
                                        <MdSearch size={20} color="#9aa0a6" style={{ marginRight: '12px' }} />
                                        <span style={{ color: '#202124', fontSize: '14px' }}>{project.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    )}
                </form>

                <div className="search-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                    <button type="button" onClick={handleSearch} className="google-button">Mis Proyectos</button>
                    <button type="button" onClick={handleAboutMe} className="google-button">Sobre mí</button>
                </div>
            </div>

            <div style={{ flex: 2 }}></div>

            <footer style={{
                width: '100%',
                backgroundColor: '#f2f2f2',
                borderTop: '1px solid #dadce0',
                padding: '15px 30px',
                color: '#70757a',
                fontSize: '14px',
                position: 'relative',
                fontFamily: '"Silkscreen", cursive', /* Match pixel style */
                textTransform: 'uppercase' /* Match screenshot style */
            }}>
                <PokemonCompanion />
                <div style={{ paddingBottom: '12px', borderBottom: '1px solid #dadce0', marginBottom: '12px' }}>
                    {portfolioData.info.location}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <span>Sobre mí</span>
                        <span>Proyectos</span>
                        <span>Contacto</span>
                        <span>Cómo funciona la búsqueda</span>
                        <span>Blog</span>
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <span>Privacidad</span>
                        <span>Condiciones</span>
                        <span>Configuración</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SearchHome;
