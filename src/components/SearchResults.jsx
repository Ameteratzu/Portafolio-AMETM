import React from 'react';
import { useLocation } from 'react-router-dom';
import ResultItem from './ResultItem';
import { portfolioData } from '../data/portfolio';

const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q') || '';

    // Simple filtering logic
    const filteredProjects = portfolioData.projects.filter(project => {
        if (!query) return true;
        const lowerQuery = query.toLowerCase();
        return (
            project.title.toLowerCase().includes(lowerQuery) ||
            project.description.toLowerCase().includes(lowerQuery) ||
            project.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
        );
    });

    return (
        <div className="search-results-list" style={{
            width: '652px',
            marginRight: '60px',
            fontFamily: '"Space Grotesk", sans-serif'
        }}>
            <div style={{ color: '#70757a', fontSize: '14px', marginBottom: '20px' }}>
                About {filteredProjects.length} results (0.42 seconds)
            </div>

            {filteredProjects.length > 0 ? (
                filteredProjects.map(project => (
                    <ResultItem key={project.id} project={project} />
                ))
            ) : (
                <div style={{ paddingTop: '20px' }}>
                    <p>Your search - <strong>{query}</strong> - did not match any documents.</p>
                    <p style={{ marginTop: '10px' }}>Suggestions:</p>
                    <ul style={{ marginLeft: '40px' }}>
                        <li>Make sure that all words are spelled correctly.</li>
                        <li>Try different keywords.</li>
                        <li>Try more general keywords.</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchResults;
