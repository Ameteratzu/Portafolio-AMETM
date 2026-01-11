import React from 'react';
import { portfolioData } from '../data/portfolio';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';

const iconMap = {
    FaGithub: FaGithub,
    FaLinkedin: FaLinkedin,
    FaTwitter: FaTwitter,
    FaGlobe: FaGlobe
};

const KnowledgePanel = () => {
    const { info } = portfolioData;

    return (
        <div className="knowledge-panel" style={{
            width: '368px',
            border: '1px solid #ebebeb',
            borderRadius: '8px',
            padding: '16px',
            marginLeft: '40px',
            height: 'fit-content',
            fontFamily: '"Space Grotesk", sans-serif'
        }}>
            {/* Top Images Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4px', marginBottom: '16px', height: '140px', borderRadius: '8px', overflow: 'hidden' }}>
                <img
                    src={info.images?.[0] || "https://via.placeholder.com/300x140/4285F4/ffffff?text=Amet.dev"}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    alt="Main"
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <img
                        src={info.images?.[1] || "https://via.placeholder.com/150x68/EA4335/ffffff?text=Projects"}
                        style={{ width: '100%', height: '50%', objectFit: 'cover' }}
                        alt="Sub 1"
                    />
                    <img
                        src={info.images?.[2] || "https://via.placeholder.com/150x68/34A853/ffffff?text=Skills"}
                        style={{ width: '100%', height: '50%', objectFit: 'cover' }}
                        alt="Sub 2"
                    />
                </div>
            </div>

            <h1 style={{ fontSize: '30px', fontWeight: '400', fontFamily: 'Product Sans, sans-serif' }}>{info.name}</h1>
            <div style={{ color: '#70757a', fontSize: '14px', marginBottom: '10px' }}>{info.title}</div>

            <div style={{ fontSize: '14px', lineHeight: '1.58', marginBottom: '20px' }}>
                {info.about}
            </div>

            {/* Recognition Section */}
            {info.recognition && (
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '12px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    borderLeft: '4px solid #4285F4'
                }}>
                    <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#4285F4' }}>
                        Reconocimientos
                    </h3>
                    <div style={{ fontSize: '13px', lineHeight: '1.58', color: '#5f6368' }}>
                        {info.recognition}
                    </div>
                </div>
            )}

            {/* Skills Section */}
            {info.skills && (
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '12px' }}>Habilidades</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {info.skills.languages && (
                            <div>
                                <div style={{ fontSize: '13px', color: '#70757a', marginBottom: '4px' }}>Lenguajes</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {info.skills.languages.map(lang => (
                                        <span key={lang} style={{
                                            padding: '4px 10px',
                                            backgroundColor: '#e8f0fe',
                                            color: '#1967d2',
                                            borderRadius: '12px',
                                            fontSize: '12px'
                                        }}>{lang}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {info.skills.frameworks && (
                            <div>
                                <div style={{ fontSize: '13px', color: '#70757a', marginBottom: '4px' }}>Frameworks</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {info.skills.frameworks.map(fw => (
                                        <span key={fw} style={{
                                            padding: '4px 10px',
                                            backgroundColor: '#fce8e6',
                                            color: '#c5221f',
                                            borderRadius: '12px',
                                            fontSize: '12px'
                                        }}>{fw}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {info.skills.cloud && (
                            <div>
                                <div style={{ fontSize: '13px', color: '#70757a', marginBottom: '4px' }}>Cloud</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {info.skills.cloud.map(cloud => (
                                        <span key={cloud} style={{
                                            padding: '4px 10px',
                                            backgroundColor: '#e6f4ea',
                                            color: '#137333',
                                            borderRadius: '12px',
                                            fontSize: '12px'
                                        }}>{cloud}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div style={{ borderTop: '1px solid #dfe1e5', paddingTop: '15px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '400', marginBottom: '10px' }}>Perfiles</h3>
                <div style={{ display: 'flex', gap: '15px' }}>
                    {info.social.map(social => {
                        const Icon = iconMap[social.icon] || FaGlobe;
                        return (
                            <a key={social.name} href={social.url} target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: '#3c4043' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    border: '1px solid #dadce0',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '4px'
                                }}>
                                    <Icon size={20} />
                                </div>
                                <span style={{ fontSize: '12px' }}>{social.name}</span>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default KnowledgePanel;
