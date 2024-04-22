import { useState } from "react";
import Styles from "./style.module.css";

export const CardResultado = ({ adress, loading, setCep, setAdress }) => {

    const [input, setInput] = useState("");

    const sub = (e) => {
        e.preventDefault();
        setCep(input);
        setInput("");
    }

    const clear = () => {
        setAdress(null);
        setCep("");
    }

    return(
         <div>
            {loading ? (
                <p className={Styles.alerta}>Cep nao existe, atualize a pagina e tente Novamente.</p>
            ) : (
                <>
                    {adress ? (
                        
                        <div className={Styles.resultado}>
                            <p>Cep: <span className={Styles.span}>{adress.cep}</span></p>
                            <p>Rua: <span className={Styles.span}>{adress.logradouro}</span></p>
                            <p>Complemento: <span className={Styles.span}>{adress.complemento}</span></p>
                            <p>Bairro: <span className={Styles.span}>{adress.bairro}</span></p>
                            <p>Cidade: <span className={Styles.span}>{adress.localidade}</span></p>
                            <p>UF: <span className={Styles.span}>{adress.uf}</span></p>
                            <p>Ibge: <span className={Styles.span}>{adress.ibge}</span></p>
                            <p>Gia: <span className={Styles.span}>{adress.gia}</span></p>
                            <p>DDD: <span className={Styles.span}>{adress.ddd}</span></p>
                            <p>Siafi: <span className={Styles.span}>{adress.siafi}</span></p>
                        
                        <button className={Styles.botao1} onClick={clear}>Limpar endereco</button>
                        </div>
                    ) : (
                        <div className={Styles.inicio}>
                            <h1>Forneca seu Cep para proceguir</h1>
                            <form className={Styles.formu} onSubmit={sub}>
                                <input  className={Styles.input} placeholder="Digite Cep" type="number" value={input} onChange={(event) => setInput(event.target.value)} />
                                <button className={Styles.botao2} type="submit">Buscar Endereco</button>
                            </form>
                        </div>
                        
                    )}
            </>
        )}
            </div>
           
    )
};