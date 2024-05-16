import { useState } from 'react';
import { listFood } from "../constants/listFood"
import { Title } from '../components/title/Title';
import { ButtonInicio } from '../components/buttons/ButtonInicio';
import "../styles/emojis.css"
import { ButtonEmojis } from '../components/buttons/ButtonEmojis';


export const Emojis = () => {
    const [currentEmoji, setCurrentEmoji] = useState('');

    const generateRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * listFood.length);
    const randomEmoji = listFood[randomIndex];
    setCurrentEmoji(randomEmoji);
    };
    return (
        <>
        <ButtonInicio />
        <Title title="Emojis Aleatorios" />
        <div className="cardColores">
                <div className="tools">
                    <div className="circle">
                        <span className="red box"></span>
                    </div>
                    <div className="circle">
                        <span className="yellow box"></span>
                    </div>
                    <div className="circle">
                        <span className="green box"></span>
                    </div>
                </div>
                <div className="card__content">
                    <div className='emoji__container'>
                        <span className='emoji' >{currentEmoji}</span><br />
                    </div>
                        <ButtonEmojis generarEmoji={generateRandomEmoji} />
                </div>
            </div>
        </>
    )
}
