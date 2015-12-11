var React = require('react');

module.exports = React.createClass({

  getInitialState: function(){
    return {active: false }
  },

  toggleCreateUser: function(){
    this.setState({active: !this.state.active})
  },

	render: function() {

    var headerLabel = (
      <h3>New User</h3>
    )

    var addButtonImage = (
      <div>
        <button  className={"btn " + (this.state.active ? "hide" : "")}>
             <img className={"img-responsive center-block " + (this.state.active ? "hide" : "")}
               onClick={this.toggleCreateUser}
               src={"./resources/add_user.png"} />
        </button>
      </div>
    )

    var nameInput = (
      <div className={"center-block " + (this.state.active ? "" : "hidden")}>
        <input type="text" className="form-control input-lg" placeholder="Name"></input>
      </div>
    )

    var passwordInput = (
      <div className={"input-group input-group-lg " + (this.state.active ? "" : "hidden")}>
          <span className={"input-group-addon " + (this.state.active ? "" : "hidden")} id="basic-addon1">
              <span className="glyphicon glyphicon-lock" aria-hidden="true"></span>
          </span>
        <input type="password" className="form-control"  placeholder="PIN" aria-describedby="basic-addon1"></input>
      </div>
    )

    var buttonGroup = (
      <div className={"panel-footer row " + (this.state.active ? "" : "hidden")}>
          <div className="col-xs-6 text-left">
                <button onClick={this.toggleCreateUser} className="btn btn-default btn-lg pull-left">Cancel</button>
          </div>
          <div class="col-xs-6 text-right">
              <button className="btn btn-primary btn-lg pull-right">Submit</button>
          </div>
      </div>
    )

		return (
      <div className="col-sm-4 col-md-4">
        <div className="thumbnail text-center">
          <div className="caption">
            {headerLabel}
            <div className="row top30"></div>
              <div>
                {addButtonImage}
                <div className="row top30"></div>
                {nameInput}
                <div className="row top17"></div>
                {passwordInput}
                <div className="row top17"></div>
                {buttonGroup}
              </div>
          </div>
        </div>
	    </div>
    )
	}
});
