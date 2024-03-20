 import {Link} from "react-router-dom"
function Home(){
    return(<>
    <div className="log">Hello world!
        <h1>Login</h1>
        <form>
        <input type="text" placeholder="email" required/>
        <br></br>
        <br></br>

        {/* <Link to="https://www.glassdoor.co.in/Interview/Securin-Interview-Questions-E6025195.htm"><button type ="submit">login</button></Link> */}
        </form>
    </div>
    </>
    )
}
export default Home