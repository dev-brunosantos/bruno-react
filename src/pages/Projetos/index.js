import { Link } from 'react-router-dom'
import Cabecalho from '../../components/Cabecalho'

export default function Projetos() {
    return (
        <div className='projetos paginas'>
            <Cabecalho />

            <button>
                <Link to={'/'}>
                    Voltar
                </Link>
            </button>
        </div>
    )
}