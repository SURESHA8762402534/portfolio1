class Project extends React.Component{
    render(){
        return(
            <>
             <h4 className="heading">Projects under taken</h4>
            <div className="cardcontainer">
            <div className="card">
                 <h4>"E-Commerce website"</h4>
                 <p id="para">This e-commerce website is developed by using the fakestore api, and this contains 
                    the basic functionalities of a normal e-commerce website.</p>
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
