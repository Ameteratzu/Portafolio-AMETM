import React from 'react';

const ResultItem = ({ project }) => {
    return (
        <div className="result-item" style={{ marginBottom: '25px', maxWidth: '600px' }}>
            <div className="result-url-line" style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '14px', color: '#202124' }}>
                    {project.url}
                </span>
            </div>
            <a href={project.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <h3 style={{
                    color: '#1a0dab',
                    fontSize: '20px',
                    fontWeight: '400',
                    marginBottom: '4px',
                    lineHeight: '1.3'
                }}
                    onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                >
                    {project.title}
                </h3>
            </a>
            <div style={{ color: '#4d5156', fontSize: '14px', lineHeight: '1.58' }}>
                {project.description}
            </div>
            <div style={{ marginTop: '4px' }}>
                {project.tags.map(tag => (
                    <span key={tag} style={{
                        fontSize: '12px',
                        color: '#70757a',
                        border: '1px solid #dfe1e5',
                        borderRadius: '12px',
                        padding: '2px 8px',
                        marginRight: '6px',
                        display: 'inline-block'
                    }}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ResultItem;
