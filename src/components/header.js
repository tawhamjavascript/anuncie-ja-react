import LOGO from './logo'; 
import MENUPRINCIPAL from "./menu_principal"
const HEADER = (props) => {
    const { user } = props;
    return (
        <header>
            <div className="container">
                <div className="logo"> <LOGO> </LOGO> </div>
            </div>
            <nav>
                <MENUPRINCIPAL user = { user }> </MENUPRINCIPAL>


            </nav>

        </header>
    )
}

export default HEADER;