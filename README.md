# React-forecast

A forecast component for React powered by Forecast.io.

#### Usage

```
    var Forecast = require('react-forecast')

    Forecast({
      latitude:34.05,
      longitude:118.25,
      name:'Los Angeles'
    })
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
