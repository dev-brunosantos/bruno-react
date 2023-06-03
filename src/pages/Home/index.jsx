import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'

import './home.css'
import Cabecalho from '../../components/Cabecalho'

export default function Home() {
    return (
        <div className='home paginas '>
            <Cabecalho />

            <main className='corpo centralizar-alinhar '>
                <div className='saudacao alinhar-coluna'>
                    <h2> <span>Eu Sou</span> <br /> Bruno Santos </h2>

                    <p>Desenvolvedor Full Stack</p>
                </div>

                <div className='redes alinhar-coluna'>
                    <a href='#a' className='redes-links'>
                        <FaGithub size={40} />
                    </a>
                    <a href='#a' className='redes-links'>
                        <FaInstagram size={40}/>
                    </a>
                    <a href='#a' className='redes-links'>
                        <FaWhatsapp size={40} />
                    </a>
                </div>
            </main>
        </div>
    )
}