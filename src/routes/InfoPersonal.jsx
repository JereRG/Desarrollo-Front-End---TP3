import PsychologyIcon from '@mui/icons-material/Psychology';
import MailIcon from '@mui/icons-material/Mail';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import "../styles/infopersonal.css"
import { Title } from '../components/title/Title';
import { ButtonInicio } from '../components/buttons/ButtonInicio';

export const InfoPersonal = () => {
    return (
        <>
        <ButtonInicio />
        <Title title="Informacion personal" />
        <div className="card">
            <a href="mailto:jeremiasrg01@gmail.com" target='_blank'>
                <button className="mail">
                    <MailIcon className='svg' />
                </button>
            </a>
            <div className="profile-pic">
                <PsychologyIcon className='img'/>
            </div>
            <div className="bottom">
                <div className="content">
                    <span className="name">Jeremias Guzman</span>
                    <span className="about-me"
                        >- Full Stack Developer <br />
                        • Apasionado por el aprendizaje <br />
                        • Web3 <br />
                        • Dispuesto a todo
                    </span>
                </div>
                <div className="bottom-bottom">
                    <div className="social-links-container">
                        <a href="https://x.com/jereeguzmann" target='_blank'>
                            <XIcon className='svg' />
                        </a>
                        <a href="https://www.linkedin.com/in/jere-r-guzman/" target='_blank'>
                            <LinkedInIcon className='svg' />
                        </a>
                        <a href="https://github.com/JereRG" target='_blank'>
                            <GitHubIcon className='svg' />
                        </a>
                    </div>
                <a href="https://jererg-portfolio.vercel.app/" target='_blank'> 
                    <button className="button">Portafolio</button>
                </a>
                </div>
            </div>
        </div>
        </>

    )
}
