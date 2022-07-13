import index_logo from '../../assets/index_logo.svg'
import './styles.css'

function Header() {
    return (
        <>
        <header>
            <div className="meta_logo_container">
                <img src={index_logo} alt="index_logo"/>
                <h1>Meta</h1>
                <p>Relatorio de vendas -
                    <a href="http://www.google.com">Mais informações</a>
                </p>
            </div>
        </header>
        </>
    )
}

export default Header