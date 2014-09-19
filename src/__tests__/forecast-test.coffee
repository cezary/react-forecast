jest.dontMock '../forecast'

describe 'forecast', ->
  it 'should have an iframe', ->
    React = require 'react/addons'
    Forecast = require '../forecast'
    TestUtils = React.addons.TestUtils

    forecast = TestUtils.renderIntoDocument Forecast(latitude:34.05, longitude:118.25, name:'Los Angeles')
    iframe = TestUtils.findRenderedDOMComponentWithTag(forecast, 'iframe')
    expect(iframe).toBeDefined()
    expect(iframe.getDOMNode().src).toBe("http://forecast.io/embed/#lat=34.05&lon=118.25&name=Los Angeles&color=&font=&units=")
