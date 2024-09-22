import React, { useState } from 'react';
import Cute from '../Cute/Cute';
import Love from '../Love/Love';
import Star from '../Star/Star';
import Cool from '../Cool/Cool';
import Smile from '../Smile/Smile';

const Container = () => {
    const [cuteLikes, setCuteLikes] = useState(parseInt(localStorage.getItem('cuteLikes')) || 0);
    const [loveLikes, setLoveLikes] = useState(parseInt(localStorage.getItem('loveLikes')) || 0);
    const [starLikes, setStarLikes] = useState(parseInt(localStorage.getItem('starLikes')) || 0);
    const [coolLikes, setCoolLikes] = useState(parseInt(localStorage.getItem('coolLikes')) || 0);
    const [smileLikes, setSmileLikes] = useState(parseInt(localStorage.getItem('smileLikes')) || 0);
    const [winner, setWinner] = useState('');


    const updateLikes = (type, updateLike) => {
        switch (type) {
            case 'cute':
                setCuteLikes(updateLike);
                localStorage.setItem('cuteLikes', JSON.stringify(updateLike));
                break;
            case 'love':
                setLoveLikes(updateLike);
                localStorage.setItem('loveLikes', JSON.stringify(updateLike));
                break;
            case 'star':
                setStarLikes(updateLike);
                localStorage.setItem('starLikes', JSON.stringify(updateLike));
                break;
            case 'cool':
                setCoolLikes(updateLike);
                localStorage.setItem('coolLikes', JSON.stringify(updateLike));
                break;
            case 'smile':
                setSmileLikes(updateLike);
                localStorage.setItem('smileLikes', JSON.stringify(updateLike));
                break;
            default:
                break;
        }
    };


    const findMaxLikes = () => {
        const maxLikes = Math.max(cuteLikes, loveLikes, starLikes, coolLikes, smileLikes);
        let newWinner = '';
        if (maxLikes === cuteLikes) newWinner = 'Cute';
        else if (maxLikes === loveLikes) newWinner = 'Love';
        else if (maxLikes === starLikes) newWinner = 'Star';
        else if (maxLikes === coolLikes) newWinner = 'Cool';
        else if (maxLikes === smileLikes) newWinner = 'Smile';

        setWinner(newWinner);
    };

    const emojiMap = {
        Cute: '😊',
        Love: '❤️',
        Star: '⭐',
        Cool: '😎',
        Smile: '😄',
    };

    return (
        <>
            <div style={{ display: 'flex' }}>
                <Cute likes={cuteLikes} updateLikes={(likes) => updateLikes('cute', likes)} />
                <Love likes={loveLikes} updateLikes={(likes) => updateLikes('love', likes)} />
                <Star likes={starLikes} updateLikes={(likes) => updateLikes('star', likes)} />
                <Cool likes={coolLikes} updateLikes={(likes) => updateLikes('cool', likes)} />
                <Smile likes={smileLikes} updateLikes={(likes) => updateLikes('smile', likes)} />
                <button style={{ width: 100, height: 30 }} onClick={findMaxLikes}>Show result</button>
                {winner && (
                    <div>
                        <h2>Победитель: {winner} {emojiMap[winner]} з результатом {Math.max(cuteLikes, loveLikes, starLikes, coolLikes, smileLikes)}</h2>
                    </div>
                )}
            </div>
        </>
    );
};

export default Container;