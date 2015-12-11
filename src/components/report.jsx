var React = require('react')

module.exports = React.createClass({


  getInitialState: function() {
    return {
      numberFilter: true,
      nameFilter: false,
      hoursFilter: false,

      reportInfo: [
        {
           name: 'Johnny Cage',
           totalHours: 10.5,
           number: 1
         },{
           name: 'Angus Stone',
           totalHours: 42.0,
           number: 2
         },{
           name: 'Ford Prefect',
           totalHours: 32.6,
           number: 3
         }
       ],
    }
  },

filterNumber: function(){
  this.setState({
    numberFilter: true,
    nameFilter: false,
    hoursFilter: false
  })
},
filterName: function(){
  this.setState({
    numberFilter: false,
    nameFilter: true,
    hoursFilter: false
  })
},
filterHours: function(){
  this.setState({
    numberFilter: false,
    nameFilter: false,
    hoursFilter: true
  })
},

render: function(){

  var person1 = this.state.reportInfo[0]
  var person2 = this.state.reportInfo[1]
  var person3 = this.state.reportInfo[2]

  var caret = (
    <span className="badge" id="basic-addon1">
        <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
    </span>
  )

  return(
      <div className="container">
        <h2>Report</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th><button id="#" onClick={this.filterNumber} className={"btn btn-default text-bold " + (this.state.numberFilter ? "btn-primary active" : "")}>#</button></th>
              <th><button id="name" onClick={this.filterName} className={"btn btn-default " + (this.state.nameFilter ? "btn-primary active" : "")}>Name</button></th>
              <th><button id="totalHours" onClick={this.filterHours} className={"btn btn-default " + (this.state.hoursFilter ? "btn-primary active" : "")}>Total Hours</button></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{person1.number}</td>
              <td>{person1.name}</td>
              <td>{person1.totalHours}</td>
            </tr>
            <tr>
              <td>{person2.number}</td>
              <td>{person2.name}</td>
              <td>{person2.totalHours}</td>
            </tr>
            <tr>
              <td>{person3.number}</td>
              <td>{person3.name}</td>
              <td>{person3.totalHours}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
});
