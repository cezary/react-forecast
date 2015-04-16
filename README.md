# react-forecast

A forecast component for React powered by Forecast.io.

## Installation

```bash
npm install react-forecast --save
```

## Demo

http://cezary.github.io/react-forecast/

## Usage

```javascript
var React = require('react');
var Forecast = require('react-forecast');

var Component = React.createClass({
  render: function() {
    return (
      <Forecast latitude={34.05} longitude={118.25} name='Los Angeles' />
    );
  }
});
```

**latitude** *number*, **longitude** *number*

The coordinates of the place being forecasted

**name** *string*

The name of the place

**color** *string*

Color of the temperature bars

**font** *string*

Change the font from default Helvetica

**units** *string*

Change the localization of the units ('us’ for Fahrenheit and mph, ‘uk’ for Celsius and mph, ‘ca’ for Celsius and km/h, and ‘si’ for Celsius and m/s)
