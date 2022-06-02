const MENUPRINCIPAL = ({ user }) => {
    return (
        <ul>
            <li> <a href="#myProduct"> Meus Anúncios </a> </li>
            <li> <a href="#product"> Produtos </a> </li>
            <li> Olá, { user } </li>

        </ul>
    )
}

export default MENUPRINCIPAL