var React = require('react')

module.exports = React.createClass({

  render: function(){
    return <footer>
      <nav className="navbar navbar-default navbar-fixed-bottom">
        <div className="container-fluid">
            <div className='col-sm-5'>
              <h6 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h6>
              <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React.</strong></p>
              <p>You may view the <a href='https://github.com/clayellis/TimeClock'>Source Code</a> behind this project on GitHub.</p>
              <p> © 2015 Clay Ellis and Joey Nelson.</p>
            </div>
          </div>
      </nav>
    </footer>
  }

});
