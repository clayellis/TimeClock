var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      clockedIn: false,
      clocking: false
    }
  },
  handleClick: function() {
    if (this.state.clocking) {
      this.setState({
        clocking: false,
        clockedIn: !this.state.clockedIn
      })
      console.log("clocked " + (this.state.clockedIn ? "in" : "out"));
    } else {
      this.setState({ clocking: true })
      console.log("clocking " + (this.state.clockedIn ? "in" : "out"));
    }
  },
  render: function() {
    return <div className="col-sm-4 col-md-4">
        <div className="thumbnail">
            <div className="caption">

              <h3 className="text-center">{this.props.username}</h3>

              <div className="row top30"></div>
              <img
                src={"./resources/" + (this.state.clockedIn ? "clocked_in" : "clocked_out") + ".png"}
                className="img-responsive center-block">
              </img>

              <div className="row top30"></div>
              <div className="input-group input-group-lg">
                  <span className="input-group-addon" id="basic-addon1">
                      <span className="glyphicon glyphicon-lock" aria-hidden="true"></span>
                  </span>
                <input type="password" className="form-control" placeholder="PIN" aria-describedby="basic-addon1"></input>
              </div>

              <div className="row top15"></div>
              <p><a
                onClick={this.handleClick}
                className="btn btn-lg btn-primary btn-block">{this.state.clockedIn ? "Clock Out" : "Clock In"}
              </a></p>

            </div>
        </div>
    </div>
  }
});
