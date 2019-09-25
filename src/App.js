import React from 'react';
import './App.css';
import axios from 'axios'

class Superheroapp extends React.Component{
    state={
        superHeroName:"",
        jsonObject : {}
    }

 isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

 requestForData =(event)=> {
     var name = this.state.superHeroName;
     name=name.toLowerCase();
     axios({
         method:'get',
         url: 'http://localhost:8000',
         params:{
            "name" : name
        }
     })
     .then((response) =>{
         console.log(response.data);
         if(!this.isEmpty(response.data)){
             if(response.data["result"]["response"] === "error"){
                 alert(response.data["result"]["response"]["error"]);
                 //this.setState({jsonObject : {}});
             }else{
                 var jsonFirstResult = response.data["result"]["results"][0];
                 console.log("--------------------------------------------------------")
                 //console.log(response.data["results"]);
                 console.log("json first result = ",jsonFirstResult);
                 //var tempJsonObject = JSON.parse(response.data);
                 this.setState({jsonObject : jsonFirstResult});
                 console.log(this.state.jsonObject);
                //console.log(response.status);
                //console.log(response.statusText);
                //console.log(response.headers);
                //console.log(response.config);
                 //console.log("Srini " + this.state.jsonObject["images"]["lg"]);
            }
         }else{
             alert("request to server failed !!!!");
         }
         
     }, (error) =>{
         console.log(error);
     });
     
 }
 
 appendName = (event)=>{
     this.setState({superHeroName : event.target.value});
     
     console.log(this.state.superHeroName);
 }
 render() {
    return (
        <div>
        <div id="textContainer">
        <label>
          Enter Super Hero Name<br/><br/>
          <input type="text" name="enter super hero Name" id="superHeroName" onChange={this.appendName} />
        </label>
        <input type="submit" value="Submit" onClick={this.requestForData}/>
        </div>
        <div id="displayContainer">       
        
        { this.isEmpty(this.state.jsonObject) ? null : <img src={this.state.jsonObject["image"]["url"]} alt={this.state.jsonObject["name"]} />  }
        { this.isEmpty(this.state.jsonObject) ? null : <h1>{this.state.jsonObject["name"]}</h1>}
        {this.isEmpty(this.state.jsonObject) ? null : <h1>powerstats</h1>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>intelligence : {this.state.jsonObject["powerstats"]["intelligence"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>strength : {this.state.jsonObject["powerstats"]["strength"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>Speed : {this.state.jsonObject["powerstats"]["speed"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>durability : {this.state.jsonObject["powerstats"]["durability"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>Power : {this.state.jsonObject["powerstats"]["power"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>Combat : {this.state.jsonObject["powerstats"]["combat"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <h1>Appearance</h1>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>gender : {this.state.jsonObject["appearance"]["gender"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>Race : {this.state.jsonObject["appearance"]["race"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>Height : {this.state.jsonObject["appearance"]["height"][1]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>Weight : {this.state.jsonObject["appearance"]["weight"][1]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>Eyecolor : {this.state.jsonObject["appearance"]["eye-color"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>HairColor : {this.state.jsonObject["appearance"]["hair-color"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <h1>Biography</h1>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>fullName : {this.state.jsonObject["biography"]["full-name"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>alterEgos : {this.state.jsonObject["biography"]["alter-egos"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>Aliases : {this.state.jsonObject["biography"]["aliases"][0]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>PlaceOfBirth : {this.state.jsonObject["biography"]["place-of-birth"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>firstAppearance : {this.state.jsonObject["biography"]["first-appearance"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>Publisher : {this.state.jsonObject["biography"]["publisher"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <h1>Work</h1>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>Occupation : {this.state.jsonObject["work"]["occupation"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>Base : {this.state.jsonObject["work"]["base"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <h1>Connections</h1>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>groupAffiliation : {this.state.jsonObject["connections"]["group-affiliation"]}</p>}
        {this.isEmpty(this.state.jsonObject) ? null : <p>relatives : {this.state.jsonObject["connections"]["relatives"]}</p>}
        
        
        </div>
        </div>
    );
  }
}

export default Superheroapp;
