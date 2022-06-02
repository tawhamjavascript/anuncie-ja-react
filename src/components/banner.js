import H2 from "./h2"
import IMG from "./img";
import LI from "./menu_secundario";

const BANNER = () => {
    const lista_informacao_site = ["Alta Visibilidade", "Segurança", 
                                   "Facilidade em Anunciar", 
                                   "+1000 Produtos Vendidos", 
                                   "Interface Simples"];
    return (
        <div className = "container"> 
            <div className = "banner-content">
                <div class="banner-text">
                    <H2 text = "Anuncie Já o seu <br> produto!"> </H2>
                    <ul>
                        { lista_informacao_site.map( (item, index) => <LI text = {item} key = {index}> </LI> ) }
                    </ul>

                </div>
                <div class="banner-img">
                    <IMG src = "imgs/banner.svg"> </IMG>
                </div>

            </div>
        </div>
    )
}