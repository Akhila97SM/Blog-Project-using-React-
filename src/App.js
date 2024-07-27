import './App.css';
import TopBar from "./component/topbar/topBar";
import Header from"./component/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/footer/Footer";
import { Container } from 'react-bootstrap';
import Post from "./component/post/Post";
 import Advertisement from "./component/advertisement/Advertisement";


function App() {
  return (
     <div className="App">
    <Container>
    <TopBar/>
    <Header/>
    <Advertisement/>
    <Post/>
    <Advertisement/> 
    <Footer/> 
    </Container>
    </div>
  )
}

export default App;
