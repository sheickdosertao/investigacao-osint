import styles from "./style.module.css"

export const SectionNav = () => {

    return (
       <section>
        <h2 className={styles.h2nav}>Links uteis, pesquise voce mesmo</h2>
        <nav className={styles.nav}>
            <a href="https://cadastroempresa.com.br/">Comprovante Situação Cadastral de Pessoa Jurídica</a>
            <a href="https://portalbnmp.cnj.jus.br/#/pesquisa-peca#">Banco Nacional de Mandados de Prisão</a>
            <a href="https://portal.trf1.jus.br">Portal de Tribunal Regional Federal (TRF1)</a>
            <a href="https://antecedentes.policiacivil.pa.gov.br/consulta">Consulta de Antecedente Criminal</a>
            <a href="https://www.gov.br/anatel/pt-br/assuntos/celular-legal/consulte-sua-situacao">Busca Através do IMEI/Legalidade do Aparelho</a>
        </nav>
       </section>

    )
}