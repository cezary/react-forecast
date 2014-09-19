React = require 'react'
{iframe} = React.DOM

module.exports = React.createClass
  displayName: 'forecast'
  render: ->
    iframe {
      type:'text/html'
      height:'245'
      width:'100%'
      frameborder:'0'
      style:border:'none'
      src:"http://forecast.io/embed/#lat=#{ @props.latitude }&lon=#{ @props.longitude }&name=#{ @props.name || "" }&color=#{ @props.color || "" }&font=#{ @props.font || "" }&units=#{ @props.units || "" }"
    }
