var React = require('react');

module.exports = React.createClass({

  getInitialState: function(){
    return {
      active: false,
      validName: false,
      validPin: false,
      nameValue: "",
      pinValue: ""
    }
  },

  handlePinFieldChange: function(event) {
    var pin = event.target.value
    // Only allow pin's of max length 4
    if (pin.length <= 4) {
      this.setState({
        pinValue: pin,
        validPin: pin.length == 4
      })
    } else if (pin.length < 4) {
      this.setState({ validPin: false })
    }
  },

  handleNameFieldChange: function(event) {
    var name = event.target.value
    // Valid names are not empty
    this.setState({
      nameValue: name,
      validName: name != ""
    })
  },

  toggleCreateUser: function(){
    this.setState({
      active: !this.state.active,
      validName: false,
      validPin: false,
      nameValue: "",
      pinValue: ""
    })
  },

	render: function() {
    // Properties - value = the pin text field's value
    var pinValue = this.state.pinValue
    var nameValue = this.state.nameValue

    var headerLabel = (
      <h3>New User</h3>
    )

    var addButtonImage = (
      <div>
         <img className={"img-responsive center-block hoverPointerImage " + (this.state.active ? "hidden" : "")}
           onClick={this.toggleCreateUser}
           src={"./resources/add_user.png"} />
      </div>
    )

    var nameInput = (
      <div className={"center-block " + (this.state.active ? "" : "hidden")}>
        <input value={nameValue} onChange={this.handleNameFieldChange} type="text" className="form-control input-lg" placeholder="Name"></input>
      </div>
    )

    var passwordInput = (
      <div className={"input-group input-group-lg " + (this.state.active ? "" : "hidden")}>
          <span className={"input-group-addon " + (this.state.active ? "" : "hidden")} id="basic-addon1">
              <span className="glyphicon glyphicon-lock" aria-hidden="true"></span>
          </span>
        <input value={pinValue} onChange={this.handlePinFieldChange} type="password" className="form-control"  placeholder="PIN" aria-describedby="basic-addon1"></input>
      </div>
    )

    var buttonGroup = (
      <div className={"panel-footer row " + (this.state.active ? "" : "hidden")}>
          <button className={"btn btn-primary btn-lg btn-half " + (this.state.validPin && this.state.validName ? "" : "disabled")}>Submit</button>
          <button onClick={this.toggleCreateUser} className="btn btn-default btn-lg btn-half ">Cancel</button>
      </div>
    )

		return (
      <div className="col-sm-4 col-md-4">
        <div className="thumbnail text-center">
          <div className="caption">
            {headerLabel}
            <div className="row space30"></div>
            <div>
              {addButtonImage}
              <div className={"row space30" + (this.state.active ? "hidden" : "")}></div>
              {nameInput}
              <div className="row space5"></div>
              {passwordInput}
              <div className="row space5"></div>
              {buttonGroup}
            </div>
          </div>
        </div>
	    </div>
    )
	}
});
