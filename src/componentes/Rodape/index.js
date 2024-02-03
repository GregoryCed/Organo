import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='rodape'>
            <div className='redes-sociais'>
                <img src='/imagens/fb.png' alt='Logo do Facebook'></img>
                <img src='/imagens/tw.png' alt='Logo do Twitter'></img>
                <img src='/imagens/ig.png' alt='Logo do Instragram'></img>
            </div>
            <div className='logo-organo'>
                <img src='/imagens/logo.png' alt='Logo do projeto, Organo'></img>
            </div>
            <div className='text-alura'>
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Rodape;