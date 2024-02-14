import { useState } from 'react';

export default function Player() {
    const [playerName, setPlayerName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        let player = e.target.value;
        setPlayerName(player);
    }
    function handleClick() {
      setSubmitted(true);
    }
    return (
        <section id="player">
            <h2>Welcome {submitted ? playerName: 'Unknown Entity Player'}</h2>
            <p>
                <input type="text" onChange={handleChange} value={playerName} />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}
