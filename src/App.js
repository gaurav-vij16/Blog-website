import "./App.css"
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";



export default function App() {

  return (
    <div className=" w-full h-full flex flex-col justify-center items-center">

        <Header/>
        <Content/>
        <Footer/>
        
    </div>
  );

}
