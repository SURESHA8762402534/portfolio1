class Project extends React.Component{
    render(){
        return(
            <>
             <h4 className="heading">Projects under taken</h4>
            <div className="cardcontainer">
            <div className="card">
                 <h4>"Secured intra Body Communication using <b>Red-Tacton</b> technology"</h4>
                 <p id="para">“RedTacton” is a new Human 
                    Area Networking technology that uses the 
                    surface of the human body as a safe, high speed 
                    network transmission path to use human area 
                    network for transmitting data over a shorter 
                    distance with high speed and efficiency.</p>
             </div>
             <div className="card">
                 <h4>"<b>Tic-Tok-Toi</b> App"</h4>
                 <p>This game allows two persons to play at a time, one has to place his
                      characters in a way that three characters has to come in a staight line.  </p>
             </div>
             <div className="card">
                 <h4>"<b>weather report</b> App "</h4>
                 <p>This app will help to get the weather report of
                     any place by searching the name of that place or city name</p>
             </div>
             <div className="card">
                 <h4><b>"Navigation map</b></h4>
                 <p>This app will helps to track the travelled path and allows to set the destination to travell</p>
             </div>
             
            </div>
            <br/><br/>
            <hr></hr>

            </>
        )
    }
}
