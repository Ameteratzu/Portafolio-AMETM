import React from 'react';
import { MdApps } from 'react-icons/md';
import { portfolioData } from '../data/portfolio';

const Header = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '15px 20px',
            height: '60px',
            gap: '15px',
            fontSize: '13px'
        }}>
            <a href="https://mail.google.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'rgba(0,0,0,0.87)' }}>Gmail</a>
            <a href={portfolioData.projects[0]?.url || "#"} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'rgba(0,0,0,0.87)' }}>Images</a>

            <div style={{
                padding: '8px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(60,64,67,0.08)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
                <MdApps size={24} color="#5f6368" />
            </div>

            <img
                src={portfolioData.info.avatar}
                alt="Profile"
                style={{
                    height: '32px',
                    width: '32px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    objectFit: 'cover'
                }}
                title={portfolioData.info.name}
            />
        </div>
    );
};

export default Header;
