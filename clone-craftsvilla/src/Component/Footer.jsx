import styled from '@emotion/styled'
import './Footer.css'
function Footer() {
    return (
       <DIV>
        <div className="footer">
            <div>
                <h2>ABOUT US</h2>
                <p>India's most convenient online <br />
                    grocery channel Buyerapp Fresh and <br />
                    Smart makes your grocery shopping <br />
                    even simpler. No more hassles of<br />
                    sweating it out in crowded markets,<br />
                    grocery shops & supermarkets - now <br />
                    shop from the comfort of your home;<br />
                    office, or on the move. We offer you<br />
                    the convenience of shopping for<br />
                    everything that you need for your <br />
                    home - be it fresh fruits & vegetables,<br />
                    rice, dals, oil, packaged food, dairy<br />
                    item, frozen, pet food, household <br />
                    cleaning items & personal care<br />
                    products from a single virtual store.</p>
                    <h2>PAYMENT OPTIONS</h2>
            </div>
            <div>
                <h2>OUR COMPANY</h2>
                <p>About Us</p>
                <p> Contact Us</p>
            </div>


            <div>
                <h2>TOP CATEGORIES</h2>
                <p>Grocery</p>
            </div>
            <div>
                <h2>POLICIES & INFO</h2>
                <p>Privacy Policy</p>
                <p>SUPPORT</p>
                <p>For Help, send an email to<br />
                    care@craftsvilla.com</p>
            </div>

        </div>
        </DIV>

    )
}
const DIV=styled.div`@media (min-width:400px) and (max-width:800px){
    .footer{
        display:grid;
        grid-template-columns:repeat(2,1fr)
    }
}
@media (min-width:0px) and (max-width:400px){
    .footer{
        display:grid;
        grid-template-columns:repeat(1,1fr)
    }
} 
`
export default Footer