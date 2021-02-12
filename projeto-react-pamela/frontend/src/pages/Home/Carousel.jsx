import Foto1 from '../../img/cozinha01.jpg';
import Foto2 from '../../img/maquina01.jpg';
import Foto3 from '../../img/cozinha05.jpg';
import Foto4 from '../../img/cozinha04.jpg';


export default function Carousel (){
    return(
    <div className="container mb-5" style={{width:"60%"}}>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Foto1} className="d-block img-fluid" alt="Cozinha bonita" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="text text-white h1 "><strong>Black Friday</strong></h1>
                        <h3 className="text text-white h2 "><strong>Promoções o ano , <em> INTEIRO </em> não perca!</strong></h3>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={Foto2} className="d-block img-fluid" alt="Máquina de lavar bonita" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="text text-white h1"><strong>melhorias em sua casa.</strong></h1>
                        <h3 className="text text-white h2"><strong>descontos imperdíveis!</strong></h3>
                    </div>                
                </div>

                <div className="carousel-item">
                    <img src={Foto3} className="d-block  img-fluid" alt="Cozinha bonita" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="text text-white h1"><strong>Aqui o estilo é você quem faz!</strong></h1>
                        <h3 className="text text-white h2"><strong>Ghost Eletro aqui você está em casa!</strong> </h3>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={Foto4} className="d-block  img-fluid" alt="Cozinha bonita" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="text text-white h1"><strong>Venha nos conhecer</strong></h1>
                        <h3 className="text text-white h2"><strong> O melhor em produtos!!</strong></h3>
                    </div>
                </div>
               </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
    </div>  
    );
}