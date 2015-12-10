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
    var value = this.state.value

    return <div className="col-sm-4 col-md-4">
        <div className="thumbnail">

          <div className="alert alert-warning alert-dismissible" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">x</span></button>
            <strong>Warning!</strong> Better check yourself, you're not looking too good.
          </div>

          <div className="caption">

            <h3 className="text-center">{this.props.username}</h3>

            <div className="row top30"></div>
            <img
              src={"./resources/" + (this.state.clockedIn ? "clocked_in" : "clocked_out") + ".png"}
              className={"img-responsive center-block " + (this.state.clocking ? "hidden" : "")}>
            </img>

            <div className="row top30"></div>
            <div className={"input-group input-group-lg " + (this.state.clocking ? "" : "hidden")}>
                <span className="input-group-addon" id="basic-addon1">
                    <span className="glyphicon glyphicon-lock" aria-hidden="true"></span>
                </span>
              <input value={value} onChange={this.handlePinFieldChange} type="password" className="form-control" placeholder="PIN" aria-describedby="basic-addon1"></input>
            </div>

            <div className={"row preserveHeight " + (this.state.clocking ? "" : "hidden")}></div>

            <div className="row top15"></div>
            <div className="btn-toolbar">
              <a onClick={this.handleClick} className="btn btn-lg btn-primary btn-block">{this.state.buttonText}</a>
            </div>
          </div>
        </div>
    </div>
  }
});
