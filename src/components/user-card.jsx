var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      clockedIn: false,
      clocking: false,
      buttonText: "Clock In",
      value: ""
    }
  },

  handleClick: function() {
    if (this.state.clocking) {
      // Clicked cancel
      this.setState({
        clocking: false,
        buttonText: this.state.clockedIn ? "Clock Out" : "Clock In",
        value: ""
      })
    } else {
      // Clicked either Clock In / Out
      this.setState({
        clocking: true,
        buttonText: "Cancel"
      })
    }
  },

  handlePinFieldChange: function(event) {
    var pin = event.target.value

    // The value must be set to accept input
    this.setState({ value: pin })

    // Check the length of the pin
    if (pin.length == 4) {
      if (pin == "1234") {
        this.setState({
          clocking: false,
          clockedIn: !this.state.clockedIn,
          buttonText: this.state.clockedIn ? "Clock In" : "Clock Out",
          value: ""
        })
      } else {
        this.setState({
          value: ""
        })
      }
    }
  },

  render: function() {
    // Properties - value = the pin text field's value
    var value = this.state.value

    // Other components
    var title = (<h3 className="text-center">{this.props.username}</h3>)

    var clockImage = (<img src={"./resources/" + (this.state.clockedIn ? "clocked_in" : "clocked_out") + ".png"}
                        className={"img-responsive center-block " + (this.state.clocking ? "hidden" : "")}>
                      </img>)

    var pinField = (<div className={"input-group input-group-lg " + (this.state.clocking ? "" : "hidden")}>
                      <span className="input-group-addon" id="basic-addon1">
                          <span className="glyphicon glyphicon-lock" aria-hidden="true"></span>
                      </span>
                      <input value={value} onChange={this.handlePinFieldChange} type="password" className="form-control" placeholder="PIN" aria-describedby="basic-addon1"></input>
                    </div>)

    var button = (<div className="btn-toolbar">
                    <a onClick={this.handleClick} className="btn btn-lg btn-primary btn-block">{this.state.buttonText}</a>
                  </div>)

    return <div className="col-sm-4 col-md-4">
        <div className="thumbnail">
          <div className="caption">
            {title}
            <div className="row space30"></div>
            {clockImage}
            <div className="row space30"></div>
            {pinField}
            <div className={"row preserveHeight " + (this.state.clocking ? "" : "hidden")}></div>
            {button}
            <div className="row space15"></div>
          </div>
        </div>
    </div>
  }
});
