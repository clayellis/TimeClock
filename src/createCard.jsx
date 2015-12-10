var React = require('react');


module.exports = React.createClass({

  getInitialState: function(){
    return {active: false }
  },
  toggleCreateUser: function(){
    this.setState({active: !this.state.active})
  },
  addUser: function(newUser){
    this.props.title: 'jimbo';
    this.setState();
  },
	render: function() {
		return (
      <div className="col-sm-4 col-md-4">
        <div className="thumbnail text-center">
          <div className="caption">
            <h3>New User</h3>

            <div className="row top30"></div>

              <div>
                <div>
                  <button  className={"btn " + (this.state.active ? "hide" : "")}>
                       <img className={"img-responsive center-block " + (this.state.active ? "hide" : "")}
                         onClick={this.toggleCreateUser}
                         src={"./resources/add_user.png"} />
                  </button>
                </div>

                <div className={"center-block " + (this.state.active ? "" : "hidden")}>
                  <div className="row top30"></div>
                  <input type="text" className="form-control input-lg" placeholder="Name"></input>
                </div>

                <div className="row top17"></div>

                <div className={"input-group input-group-lg " + (this.state.active ? "" : "hidden")}>
                    <span className={"input-group-addon " + (this.state.active ? "" : "hidden")} id="basic-addon1">
                        <span className="glyphicon glyphicon-lock" aria-hidden="true"></span>
                    </span>
                  <input type="password" className="form-control"  placeholder="PIN" aria-describedby="basic-addon1"></input>
                </div>

                <div className="row top17"></div>

                <div className={"btn-toolbar " + (this.state.active ? "" : "hidden")}>
                    <button onClick={this.toggleCreateUser}
                      className="btn btn-default btn-lg pull-left">Cancel</button>

                    <button onClick={this.addUser('hey')} className="btn btn-primary btn-lg pull-right">Submit</button>
                </div>

              </div>
          </div>
        </div>
	    </div>
    )
	}
});
