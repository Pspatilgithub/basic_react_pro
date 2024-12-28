import Home from "./Home";
import Contact from './Contact';
import About from './About';
import Greeting from './Greeting';
function App () {
    return (
        <div>
        <h1> hello from reactjs </h1>
        <Home name = {'pooja'} age = {24}/>
        <Greeting name = {'Akash'}/>
        <Greeting name = {'Ayush'}/>

        <About/>
<Contact/>
        </div>
    );
}
    export default App;