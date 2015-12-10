var React = require('react');


module.exports = React.createClass({

  getInitialState: function(){
    return {active: false }
  },
  toggleCreateUser: function(){
    this.setState({active: !this.state.active})
  },
	render: function() {
		return (
      <div className="col-sm-3 col-md-3">
        <div className="caption text-center thumbnail">
          <h1>New User</h1>

          <div>
            <p><input type="text" className={"form-control text-center " + (this.state.active ? "" : "hidden")} placeholder="Name" /></p>
            <p><input type="text" className={"form-control text-center " + (this.state.active ? "" : "hidden")} placeholder="PIN" /></p>

            <div>
              <button  className={"btn btn-link " + (this.state.active ? "hidden" : "")}>
                   <img onClick={this.toggleCreateUser} src="./resources/clocked_in.png" width="120" />
              </button>
            </div>

            <div className={"btn-toolbar " + (this.state.active ? "" : "hidden")}>
                <button onClick={this.toggleCreateUser} className="btn btn-default pull-left">Cancel</button>
                <button className="btn btn-primary pull-right">Submit</button>
            </div>

          </div>
        </div>
	    </div>
    )
	}
});
