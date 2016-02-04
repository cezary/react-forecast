'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'Forecast',

  getDefaultProps: function getDefaultProps() {
    return {
      height: 245,
      width: '100%'
    };
  },

  render: function render() {
    var url = '//forecast.io/embed/#lat=' + this.props.latitude + '&lon=' + this.props.longitude + '&name=' + this.props.name || '' + '&color=' + this.props.color || '' + '&font=' + this.props.font || '' + '&units=' + this.props.unit || '';

    return React.createElement('iframe', { type: 'text/html', height: this.props.height, width: this.props.width, frameBorder: '0', src: url });
  }
});

