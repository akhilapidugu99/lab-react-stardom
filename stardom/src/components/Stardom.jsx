import React, { Component } from 'react';
import prostar from'../components/prostars.json';
import './Stardom.css';

class Stardom extends Component {
    constructor(){
        super();
        this.state = {
            prostars: [prostar[0],
            prostar[1],prostar[2],
            prostar[3],prostar[4]]
        };
    }
    dataProstars = () => {
        const data = this.state.prostars;
        const mapRow = data.map(prostar => (
            <tr key={prostar.id}>
                <td><img className="img" src={prostar.pictureUrl } alt={prostar.pictureUrl} /></td>
                <td>{prostar.name}</td>
                <td>{prostar.popularity}</td>
                <td><button className="deletebtn" onClick={this.state.removePeople}>Delete</button></td>
            </tr>  
        ));
        return mapRow;
    }
    addRandomProstar=()=>{
        let others = prostar.slice(5,prostar.length);
        const value = Math.ceil(Math.random() * others.length)+1;
        this.setState( {
             prostars:this.state.prostars.concat(others[value])
            });
    }
    sortName=()=> {
        var newData=this.state.prostars;
        newData.sort((object1,object2)=>{
        let obj1 = object1.name.toLocaleUpperCase()
        let obj2 = object2.name.toLocaleUpperCase()
      
        if (obj1 < obj2) {
          return -1;
        }
        if (obj1 > obj2) {
          return 1;
        }
        return 0;
        
    });
    this.setState({prostars:newData});
}
sortPopularity=()=>{
    var newData=this.state.prostars;
    newData.sort((object1,object2)=>{
        const obj1=object1.popularity;
        const obj2=object2.popularity;
        if (obj1 < obj2) {
            return 1;
          }
          if (obj1 > obj2) {
            return -1;
          }
          return 0;
    });
    this.setState({prostars:newData});
}
// removePeople() {
//     var array = this.state.prostars; 
//     var index = array.indexOf(this.target.value);
//     if (index !== -1) {
//       array.splice(index, 1);
//       this.setState({prostars: array});
//     }
//   };
     
      

    render() {
        return (
            <React.Fragment>
            <div  className="title">
                <h1>ProStars</h1>
            </div>
            <div className="maindata">
                <div className="buttons">
                    <button className="addstar" onClick={this.addRandomProstar}>Get Random Contact</button>
                    <button className="sortname" onClick={this.sortName}>Sort By Name</button>
                    <button className="sortpopularity" onClick={this.sortPopularity}>Sort By Popularity</button>
                </div>
                <div >
                    <center>
                    <table className="table">
                        <thead className="tablehead">
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>{this.dataProstars()}</tbody>
                    </table>
                    </center>
                </div>

            </div>
        </React.Fragment>
    );
    }
}

export default Stardom;