import H2 from "./h2"
import PRODUCTS from "./product"

const MYPRODUCT = () => {
    // decidir se coloca o objeto inteiro ou uma parte dele 
    return (
        <div class="container">
            <div class="products-content">
                <H2 text = "Meus Anúncios"> </H2>
                <div class="products-list client-products-list" id="client-products-list">
                    
                    

                </div>
            </div>

            <div class="no-product">
                <h3>Parece que você não possui nenhum anúncio!</h3>
                <p> Clique no botão abaixo para inserir um novo anúncio. </p>
            </div>

            <div class="myProductButton">
                <button class="button-open-modal">Inserir Produtos</button>
            </div>
        </div>
    )

}