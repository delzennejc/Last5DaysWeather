import React, {Component} from 'react'
import * as _ from 'lodash'
import {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

// DEFINES
const KELVIN_BASE = 273.15

const average = (data) => {
  return _.round(_.sum(data) / data.length)
}

const convertCelcius = (data) => {
  return _.ceil(data - KELVIN_BASE)
}

 export default ({ data, color, unit }) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type={"avg"} />
      </Sparklines>
      <div>{unit === '°C' ? convertCelcius(average(data)) : average(data)} {unit}</div>
    </div>
  )
}
