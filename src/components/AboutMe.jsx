import React from 'react';
import { portfolioData } from '../data/portfolio';

const AboutMe = () => {
    const { info } = portfolioData;

    return (
        <div style={{
            width: '652px',
            marginRight: '60px',
            fontFamily: '"Space Grotesk", sans-serif',
            minHeight: 'fit-content',
            paddingBottom: '40px'
        }}>
            {/* Header */}
            <h1 style={{
                fontSize: '32px',
                fontWeight: '400',
                marginBottom: '20px',
                color: '#202124'
            }}>
                {info.name}
            </h1>

            <div style={{
                fontSize: '18px',
                color: '#5f6368',
                marginBottom: '30px',
                borderBottom: '1px solid #ebebeb',
                paddingBottom: '20px'
            }}>
                {info.title}
            </div>

            {/* About Section */}
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: '500',
                    marginBottom: '16px',
                    color: '#202124'
                }}>
                    Sobre mí
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#3c4043',
                    marginBottom: '16px'
                }}>
                    {info.about}
                </p>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#3c4043'
                }}>
                    {info.profile}
                </p>
            </section>

            {/* Recognition Section */}
            {info.recognition && (
                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: '500',
                        marginBottom: '16px',
                        color: '#202124'
                    }}>
                        Reconocimientos
                    </h2>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #4285F4'
                    }}>
                        <p style={{
                            fontSize: '15px',
                            lineHeight: '1.6',
                            color: '#3c4043',
                            margin: 0
                        }}>
                            {info.recognition}
                        </p>
                    </div>
                </section>
            )}

            {/* Skills Section */}
            {info.skills && (
                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: '500',
                        marginBottom: '16px',
                        color: '#202124'
                    }}>
                        Habilidades Técnicas
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {/* Languages */}
                        {info.skills.languages && (
                            <div>
                                <h3 style={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    marginBottom: '10px',
                                    color: '#5f6368'
                                }}>
                                    Lenguajes de Programación
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {info.skills.languages.map(lang => (
                                        <span key={lang} style={{
                                            padding: '8px 16px',
                                            backgroundColor: '#e8f0fe',
                                            color: '#1967d2',
                                            borderRadius: '16px',
                                            fontSize: '14px',
                                            fontWeight: '500'
                                        }}>
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Frameworks */}
                        {info.skills.frameworks && (
                            <div>
                                <h3 style={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    marginBottom: '10px',
                                    color: '#5f6368'
                                }}>
                                    Frameworks y Tecnologías
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {info.skills.frameworks.map(fw => (
                                        <span key={fw} style={{
                                            padding: '8px 16px',
                                            backgroundColor: '#fce8e6',
                                            color: '#c5221f',
                                            borderRadius: '16px',
                                            fontSize: '14px',
                                            fontWeight: '500'
                                        }}>
                                            {fw}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Cloud */}
                        {info.skills.cloud && (
                            <div>
                                <h3 style={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    marginBottom: '10px',
                                    color: '#5f6368'
                                }}>
                                    Plataformas Cloud
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {info.skills.cloud.map(cloud => (
                                        <span key={cloud} style={{
                                            padding: '8px 16px',
                                            backgroundColor: '#e6f4ea',
                                            color: '#137333',
                                            borderRadius: '16px',
                                            fontSize: '14px',
                                            fontWeight: '500'
                                        }}>
                                            {cloud}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Other Skills */}
                        {info.skills.other && (
                            <div>
                                <h3 style={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    marginBottom: '10px',
                                    color: '#5f6368'
                                }}>
                                    Otras Habilidades
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {info.skills.other.map(skill => (
                                        <span key={skill} style={{
                                            padding: '8px 16px',
                                            backgroundColor: '#fef7e0',
                                            color: '#b06000',
                                            borderRadius: '16px',
                                            fontSize: '14px',
                                            fontWeight: '500'
                                        }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Experience Section */}
            {info.experience && (
                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: '500',
                        marginBottom: '16px',
                        color: '#202124'
                    }}>
                        Experiencia Profesional
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {info.experience.map(exp => (
                            <div key={exp.id} style={{
                                padding: '20px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '8px',
                                borderLeft: '4px solid #4285F4'
                            }}>
                                <div style={{ marginBottom: '12px' }}>
                                    <h3 style={{
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        color: '#202124',
                                        marginBottom: '4px'
                                    }}>
                                        {exp.position}
                                    </h3>
                                    <div style={{
                                        fontSize: '15px',
                                        color: '#1967d2',
                                        fontWeight: '500',
                                        marginBottom: '4px'
                                    }}>
                                        {exp.company}
                                    </div>
                                    <div style={{
                                        fontSize: '13px',
                                        color: '#5f6368',
                                        fontStyle: 'italic'
                                    }}>
                                        {exp.period}
                                    </div>
                                </div>

                                <p style={{
                                    fontSize: '14px',
                                    lineHeight: '1.6',
                                    color: '#3c4043',
                                    marginBottom: '12px'
                                }}>
                                    {exp.description}
                                </p>

                                {exp.achievements && exp.achievements.length > 0 && (
                                    <div>
                                        <div style={{
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            color: '#5f6368',
                                            marginBottom: '8px'
                                        }}>
                                            Logros destacados:
                                        </div>
                                        <ul style={{
                                            margin: 0,
                                            paddingLeft: '20px',
                                            fontSize: '14px',
                                            color: '#3c4043',
                                            lineHeight: '1.8'
                                        }}>
                                            {exp.achievements.map((achievement, idx) => (
                                                <li key={idx}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Contact Section */}
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: '500',
                    marginBottom: '16px',
                    color: '#202124'
                }}>
                    Contacto
                </h2>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    fontSize: '15px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#5f6368', minWidth: '80px' }}>Email:</span>
                        <a href={`mailto:${info.email}`} style={{ color: '#1a0dab', textDecoration: 'none' }}>
                            {info.email}
                        </a>
                    </div>
                    {info.phone && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#5f6368', minWidth: '80px' }}>Teléfono:</span>
                            <span style={{ color: '#3c4043' }}>{info.phone}</span>
                        </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#5f6368', minWidth: '80px' }}>Ubicación:</span>
                        <span style={{ color: '#3c4043' }}>{info.location}</span>
                    </div>
                    {info.github && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#5f6368', minWidth: '80px' }}>GitHub:</span>
                            <a href={info.github} target="_blank" rel="noreferrer" style={{ color: '#1a0dab', textDecoration: 'none' }}>
                                {info.github}
                            </a>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default AboutMe;
