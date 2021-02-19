import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route, BrowserRouter as Router, useHistory } from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<Router>
        <Link to="/nyyppaguide">Etusivu</Link>
		
        
        <Switch>
          <Route exact path="/nyyppaguide"><Napit /></Route>
		  <Route exact path="/cooking"><Cooking /></Route>
		  <Route exact path="/alchemy"><Alchemy /></Route>
		  <Route exact path="/gathering"><Gathering /></Route>
        </Switch>
      </Router>

	
        
    
	
	</div>
);
}

const Napit = () => {

	
	return (
	  <div id="wrap">
		<div id="napit1">
            <p>
				<Link to="/cooking"><button type="button" class="btn">Cooking</button></Link>
				<Link to="/alchemy"><button type="button" class="btn">Alchemy</button></Link>
            </p>
            <p>
				<Link to="/gathering"><button type="button" class="btn">Gathering</button></Link>
                <Link to="/farming"><button type="button" class="btn">Farming</button></Link>
            </p>
        </div>
        <div id="napit2">
            <p>
				<Link to="/training"><button type="button" class="btn">Training</button></Link>
                <Link to="/sailing"><button type="button" class="btn">Sailing</button></Link>
            </p>
            <p>
				<Link to="/laskurit"><button type="button" class="btn">Laskurit</button></Link>
                <Link to="/yhteys"><button type="button" class="btn">Ota yhteyttä</button></Link>
            </p>
    	</div>
	</div>
	);
}
//<img src="cookingBig.png" alt="kuva kokkauksesta" class="float-right mr-3 d-none d-md-block">
const Cooking = () => {
	return (
		<div class="container sivu" id="article2"> 
        <article class="row single-post mt-5 no-gutters">
            <div class="col-12">
                <div class="col-12 my-3">
                    
                    <h1>Cooking</h1>
                    
                    <p>
                        Kokkaus on yksi pelin hyödyllisimmistä life skilleistä. Kokkaus on useiden eri materiaalien yhdistämistä annoksiksi, 
                        jotka antavat erilaisia hyötyjä pelissä. Vähän kuin alkemia! Se on myös yksi nopeimmista tavoista nostaa contribution-pisteitä. 
                        Kokkaukseen tarvitset asuinpaikan (residence) ja kokkaustyökalun (cooking utensil).
                    </p>

                    <p>
                        <h4>Mistä ainekset?</h4>
                        Riippuen ainesosasta, sen hankintatapa vaihtelee. Perusainesosat kuten vesi, suola ja sokeri ostetaan NPC-kauppiaalta,
                        jollainen löytyy jokaisesta suuresta kaupungista.
                        Jotkin ainesosat voi ostaa muilta pelaajilta. Useimmat lihat ja kerättävät materiaalit kuten perunat ovat tällaisia.
                        Kilpailu on kuitenkin kovaa joten on yleistä, ettei materiaaleja ole lainkaan myynnissä.

                    </p>
                    <h4>Hyödyllisiä reseptejä</h4>
                    <div class="row">
                        <div class="col-sm-6">
                        
                        <h6>Beer :</h6>
                        <ul>
                            <li>5x potato/wheat/barley/sweet potato/corn </li>
                            <li>6x mineral water</li>
                            <li>2x leavening agent</li>
                            <li>1x sugar</li>
                        </ul>
                    </div>
                    <div class="col-sm-6">
                        <h6>Good feed:</h6>
                        <ul>
                            <li>6x meat</li>
                            <li>1x fish</li>
                            <li>3x mineral water</li>
                            <li>4x flour</li>
                        </ul>
                    </div> 
                    </div>  
                </div>
            </div>
        </article>
    </div>
);
}  

const Alchemy = () => {
	return (
		<div class="container sivu" id="article3">
        <article class="row single-post mt-5 no-gutters">
            <div class="col-12">
                <div class="col-12 my-3">
                    
                    <h1>Alchemy</h1>
                    
                    <p>
                        Alkemia, aivan kuin kokkaus, on eri materiaalien yhdistämistä uusiksi tuotteiksi. 
                        Alkemian lopputuotteita ovat esimerkiksi eliksiirit, joista saa erilaisia hyötyjä pelissä. 
                        Pelissä alkemia on kokkausta harvemmin kehitetty taito, sillä sen materiaalit ovat harvinaisempia 
                        joten pelaaja joutuukin usein keräämään ne kaikki itse.
                        
                        Alkemiaan tarvitset asuinpaikan (residence) ja alkemiatyökalun (alchemy utensil).

                    </p>

                    <p>
                        <h4>Mistä ainekset?</h4>
                        Alkemiaan käytettyjen materiaalien hankintatapa vaihtelee. Työläiset voivat kerätä monia alkemiaan käytettyjä materiaaleja, 
                        mutta monesti se ei riitä. Työn tekeminen kuluttaa energiaa, jota pelaajan on jatkuvasti pidettävä nollan yläpuolella, jotta 
                        työläisistä olisi mitään hyötyä. Tämä tapahtuu useiden kokkauksen kautta valmistettavien ruokien avulla, joten on todennäköistä, 
                        että pelaaja joutuu käyttämään aikaa molempien taitojen kehittämiseen.
                        
                        Joitain materiaaleja voi ostaa muilta pelaajilta. Hinnat vaihtelevat kysynnän ja tarjonnan mukaan, joten on hyvä ottaa huomioon, 
                        maksavatko materiaalit enemmän kuin valmis tuote. 
                        
                        Joitakin materiaaleja käytetään alkemiassa niin paljon, että niitä on melkein mahdoton saada ostettua muilta pelaajilta. Tällaisia 
                        ovat esimerkiksi veri, hedelmät ja tietyt kukat ja sienet. Oikeastaan melkein jokainen alkemiassa käytetty materiaali on jatkuvasti 
                        loppuunmyyty, joten pelaaja joutuu keräämään ne itse. Tämän vuoksi alkemistin olisi hyvä kehittää myös gathering- sekä farming-taitojaan.


                    </p>
                    <h4>Hyödyllisiä reseptejä</h4>
                    <div class="row">
                        <div class="col-sm-6">
                        
                        <h6>Clear Liquid Reagent :</h6>
                        <ul>
                            <li>wild grass/weeds</li>
                            <li>sunrise herb</li>
                            <li>salt</li>
                            <li>purified water</li>
                        </ul>
                    </div>
                    <div class="col-sm-6">
                        <h6>Pure Powder Reagent:</h6>
                        <ul>
                            <li>wild grass/weeds</li>
                            <li>silver azalea</li>
                            <li>sugar</li>
                            <li>purified water</li>
                        </ul>
                    </div> 
                    </div>  
                </div>
            </div>
        </article>
    </div>
);
}  
const Gathering = () => {
	return (
		<div class="container sivu" id="article4"> 
        <article class="row single-post mt-5 no-gutters">
            <div class="col-12">
                <div class="col-12 my-3">
                    
                    <h1>Gathering</h1>
                    
                    <p>
                        Gathering on materiaalien keräämistä luonnosta. Se on helppo aloittaa ja tukee useita muita life skillejä.

                        Aloittaaksesi tarvitset työkalun (gathering tool) ja energiaa.

                    </p>

                    <p>
                        <h4>Työkalut</h4>
                        Pelissä on kahdeksan erilaista työkalua, joilla kerätään eri materiaaleja. Työkaluja voi ostaa kaupungeista löytyviltä NPC-kauppiailta, 
                        muilta pelaajilta kauppapaikalta sekä valmistamalla itse.

                        Nulla risus nibh, viverra nec eros at, ultrices iaculis nibh. Quisque a risus et nulla egestas consequat. Quisque congue metus eu eros 
                        vulputate mattis. Vivamus mollis tellus id eros ultrices, in euismod enim scelerisque.

                        Praesent malesuada erat ac mollis consectetur. Nam semper dapibus nibh, sit amet pretium nulla pretium non. Ut egestas velit leo, id 
                        placerat sem suscipit quis. Pellentesque ac quam ut dui gravida porta.

                        Cras pretium sed libero sed mattis. Ut cursus quam in nisi lacinia tristique. Donec ultrices velit non libero rutrum euismod. Proin 
                        laoreet purus eget libero fringilla blandit. Morbi ac dignissim nibh. Nullam at ex facilisis, molestie nunc eget, rutrum sem. 

                        Morbi non pellentesque arcu. Proin eu lacus ut libero lobortis vestibulum. Aenean tincidunt justo nec dui eleifend, ut hendrerit arcu 
                        viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam vitae nisi ut leo molestie rutrum
                         ut vitae velit. Quisque sit amet viverra nibh. Mauris bibendum tellus ut lacus posuere volutpat at nec nibh.


                    </p>
                    <p>
                        <h4>Rare Drops</h4>
                        Materiaaleja kerätessä voi sattumanvaraisesti löytää myös harvinaisempia esineitä kuten caphras kiviä, joita käytetään aseiden ja vaatteiden
                         turvalliseen paranteluun.
                        Mauris turpis ante, elementum in blandit ac, maximus eu dolor. Nunc at posuere metus, eget molestie augue. Suspendisse ipsum lorem, malesuada
                         eu arcu a, iaculis gravida justo. Mauris laoreet massa ac enim luctus, a cursus orci porta. Quisque at placerat quam, non euismod sapien. 
                         Phasellus mattis mattis lacus sed blandit. 
                        Etiam id condimentum turpis. In vitae consequat magna, vitae fringilla erat. Nullam interdum et nisl a pulvinar. Praesent fermentum velit tellus,
                         a vehicula dolor mattis sed. Suspendisse potenti. Aenean ac nisl vitae ipsum facilisis consectetur eget sit amet ante. Morbi eget erat et magna 
                         lobortis volutpat sit amet vel metus.

                    </p>
                </div>
            </div>
        </article>
    </div>
);
}  

const Farming = () => {
	return (
		<div class="container sivu" id="article2"> 
        <article class="row single-post mt-5 no-gutters">
            <div class="col-12">
                <div class="col-12 my-3">
                    
                    <h1>Farming</h1>
                    
                    <p>
                    Farming on erilaisten kasvien, sienten ja esimerkiksi lehmien kasvatusta. Se tukee kokkaus- ja alkemiataitoja, 
                    sillä kasvatetut kasvit sekä sivutuotteet ovat molemmat tärkeitä useissa eri resepteissä.

                    Alkuun pääsemikseksi tarvitset aitauksen (fence) sekä siemeniä.

                    </p>

                    <p>
                        <h4>Mistä aitaus</h4>
                        Pelissä on useita NPC-hahmoja, jotka vuokraavat aitauksia vaihdossa contribution-pisteisiin. 
                        Helpoin tapa löytää lähin tällainen hahmo on käyttämällä pelin sisäistä NPC-hakua hakusanalla “fence”
                        Pelaajalla voi olla yhtäaikaisesti kymmenen aitausta sijoitettuna ja tehokkuuden vuoksi se on myös kannattavin määrä.
                    </p>

                    <h4>Mistä aitaus</h4>

                    <p>
                    Pelissä on NPC-kauppiaita, jotka myyvät alhaisen tason siemeniä. Niiden laatua voi kuitenkin nostaa lisäämällä (plant breeding.)
                    Siemeniä voi myös löytää sattumanvaraisesti keräämällä eri kasveja. Näiden siementen laatu voi olla korkeampi kuin kauppiailta ostettujen.
                    Myös pelin kauppapaikalta voi ostaa siemeniä, joita muut pelaajat ovat laittaneet myyntiin.
                    </p>

                    <h4>Aitauksen sijoittaminen</h4>
                    <p>
                    Aitausten sijoittamiselle on muutamia rajoitteita. Niitä ei voi sijoittaa kaupunkeihin tai muille safe zoneille. Sijoittaminen ei myöskään onnistu node war-alueille.
                    Aitaus on sijoitettava tasaiselle, yleensä ruohon peittämälle alueelle. Joissain tapauksissa myös hiekka käy.
                    </p>
                    
                </div>
            </div>
        </article>
    </div>
);
}  

export default App;
