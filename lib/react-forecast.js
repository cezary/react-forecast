var React = require('react');

module.exports = React.createClass({
  displayName: 'Forecast',

  render: function() {
    var url = "http://forecast.io/embed/#lat=" + this.props.latitude +
                "&lon=" + this.props.longitude +
                "&name=" + this.props.name || '' +
                "&color=" + this.props.color || '' +
                "&font=" + this.props.font || '' +
                "&units=" + this.props.unit || '';

    return (
      <iframe type='text/html' height='245' width='100%' frameBorder='0' src={url} />
    );
  }
});
