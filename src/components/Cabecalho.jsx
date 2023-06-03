import './cabecalho.css'

import { BiMenu } from 'react-icons/bi'

export default function Cabecalho() {

    const abrirMenu = () => {
        const menu = document.querySelector('.menu-pages')
        menu.classList.toggle('abrir-menu')
    }

    return (
        <header className='cabecalho'>
            <nav className='menu-principal centralizar-alinhar'>
                <div className='menu-logo alinhar'>
                    <a href="/">
                        <img src="/logomarca.jpg" alt="Testando" className="logo" />
                    </a>
                </div>

                <ul className='menu-pages centralizar-alinhar'>
                    <li className='menu'> <a href="/">Home</a> </li>
                    <li className='menu'> <a href="sobre">Sobre</a> </li>
                    <li className='menu'> <a href="projetos">Projetos</a> </li>
                    <li className='menu'> <a href="contatos">Contatos</a> </li>
                </ul>

                <BiMenu size={70} className='menu-icone' onClick={abrirMenu}/>
            </nav>

        </header>
    )
}