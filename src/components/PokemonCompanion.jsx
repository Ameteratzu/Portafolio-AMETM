import React, { useState, useEffect, useRef } from 'react';
import '../styles/pokemon.css'; // Import the provided CSS

// Import Emotion Assets
import heartImg from '../assets/heart.png';
import happyImg from '../assets/happy.png';

// Dynamically import all GIFs from assets folder
const sprites = import.meta.glob('../assets/**/*.gif', { eager: true, as: 'url' });
// Dynamically import CSS to ensure it's loaded (handled above)

// Helper to find sprite path
const getSprite = (pokemon, form, type) => {
    let path = '';
    // Handle inconsistent folder structures if any, or standard ones
    if (pokemon === 'deoxys') {
        path = `../assets/${pokemon}/${form}/${type}.gif`;
    } else {
        path = `../assets/${pokemon}/${type}.gif`;
    }
    return sprites[path] || '';
};

const PokemonCompanion = () => {
    const containerRef = useRef(null);

    const [pets, setPets] = useState([]);

    useEffect(() => {
        // Initialize pets
        const initialPets = [
            { id: 1, name: 'pikachu', form: 'default', x: 50, direction: 1, state: 'idle', idleTimer: 60, speed: 0.6, emotion: null, spawnClass: 'spawn-pop' },
            { id: 2, name: 'charizard', form: 'default', x: 150, direction: 1, state: 'idle', idleTimer: 40, speed: 0.5, emotion: null, spawnClass: 'spawn-pop' },
            { id: 3, name: 'gyarados', form: 'default', x: 250, direction: -1, state: 'walk', idleTimer: 0, speed: 0.8, emotion: null, spawnClass: 'spawn-pop' },
            { id: 4, name: 'kyogre', form: 'default', x: 350, direction: 1, state: 'idle', idleTimer: 20, speed: 0.3, emotion: null, spawnClass: 'spawn-pop', size: '300px' },
            { id: 5, name: 'deoxys', form: 'normal', x: 450, direction: 1, state: 'idle', idleTimer: 50, speed: 0.7, clickCount: 0, emotion: null, spawnClass: 'spawn-pop' }
        ];
        setPets(initialPets);

        // clear spawn class after animation
        const timer = setTimeout(() => {
            setPets(prev => prev.map(p => ({ ...p, spawnClass: '' })));
        }, 1000); // 1s buffer for animation

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let animationFrameId;

        const loop = () => {
            setPets(prevPets => {
                const containerWidth = containerRef.current ? containerRef.current.clientWidth : window.innerWidth;

                return prevPets.map(pet => {
                    let { x, direction, state, idleTimer, speed, emotion } = pet;

                    // Simple AI Logic
                    if (state === 'idle') {
                        if (idleTimer > 0) {
                            idleTimer--;
                        } else {
                            state = 'walk';
                            direction = Math.random() > 0.5 ? 1 : -1;
                            // Chance to clear emotion when starting to walk
                            if (Math.random() < 0.3) emotion = null;
                        }
                    } else if (state === 'walk') {
                        x += speed * direction;

                        if (x < 0) { x = 0; direction = 1; }
                        else if (x > containerWidth - 100) { x = containerWidth - 100; direction = -1; }

                        if (Math.random() < 0.005) {
                            state = 'idle';
                            idleTimer = Math.floor(Math.random() * 100) + 50;
                            // Chance to show random emotion when stopping
                            if (Math.random() < 0.2) {
                                emotion = Math.random() > 0.5 ? 'heart' : 'happy';
                            }
                        }
                    }

                    return { ...pet, x, direction, state, idleTimer, emotion };
                });
            });
            animationFrameId = requestAnimationFrame(loop);
        };

        loop();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const handlePetClick = (id) => {
        setPets(prev => prev.map(p => {
            if (p.id === id) {
                let updates = {
                    direction: p.direction * -1,
                    state: 'idle',
                    idleTimer: 60,
                    emotion: 'happy' // Happy on click
                };

                // Deoxys Transformation
                if (p.name === 'deoxys') {
                    const newClickCount = (p.clickCount || 0) + 1;
                    updates.clickCount = newClickCount;

                    if (newClickCount > 0 && newClickCount % 3 === 0) {
                        const forms = ['normal', 'attack', 'defense', 'speed'];
                        const currentIdx = forms.indexOf(p.form);
                        const nextForm = forms[(currentIdx + 1) % forms.length];
                        updates.form = nextForm;
                        updates.emotion = 'heart'; // Heart on transform
                    }
                }

                return { ...p, ...updates };
            }
            return p;
        }))
    };

    return (
        <div ref={containerRef} className="pokemon-interactive-container" style={{
            position: 'absolute',
            bottom: '100%',
            left: 0,
            width: '100%',
            height: '150px',
            pointerEvents: 'none',
            overflow: 'visible'
        }}>
            {pets.map(pet => {
                const spriteSrc = getSprite(pet.name, pet.form, pet.state);
                if (!spriteSrc) return null;

                return (
                    <div key={pet.id}
                        className={`pokemon ${pet.spawnClass}`}
                        style={{
                            position: 'absolute',
                            left: `${pet.x}px`,
                            bottom: '0',
                            transition: 'transform 0.0s linear',
                            cursor: 'pointer',
                            pointerEvents: 'auto',
                            zIndex: 100,
                            transform: `scaleX(${pet.direction})`
                        }}
                        onMouseEnter={() => {
                            setPets(prev => prev.map(p => {
                                if (p.id === pet.id) {
                                    // Set a long idle timer so they stay still while hovered
                                    return { ...p, state: 'idle', idleTimer: 300, emotion: 'happy' };
                                }
                                return p;
                            }));
                        }}
                        onClick={() => handlePetClick(pet.id)}
                    >
                        {/* Bubble / Emotion */}
                        {pet.emotion && (
                            <div className="bubble" style={{
                                width: '60px', /* Bigger bubble */
                                position: 'absolute',
                                bottom: '85%', /* Closer to the head */
                                left: '50%',
                                transform: 'translateX(-50%)',
                                zIndex: 200
                            }}>
                                <img src={pet.emotion === 'heart' ? heartImg : happyImg} alt="emotion" style={{ width: '100%', display: 'block' }} />
                            </div>
                        )}

                        <img
                            src={spriteSrc}
                            alt={pet.name}
                            style={{
                                height: pet.name === 'kyogre' ? '220px' : (pet.size || '150px'),
                                imageRendering: 'pixelated',
                                display: 'block'
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default PokemonCompanion;
