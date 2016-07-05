import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {

  renderCities(weather){
    const allTemps = weather.list.map(weather => weather.main.temp)
    const allPress = weather.list.map(weather => weather.main.pressure)
    const allHum = weather.list.map(weather => weather.main.humidity)

    return (
      <tr key={weather.city.id}>
        <td><GoogleMap lon={weather.city.coord.lon} lat={weather.city.coord.lat} /></td>
        <td><Chart data={allTemps} color={"blue"} unit={"°C"} /></td>
        <td><Chart data={allPress} color={"orange"} unit={"hPa"} /></td>
        <td><Chart data={allHum} color={"black"} unit={"%"} /></td>
      </tr>
    )

  }

  render(){
    if(this.props.weathers.length === 0){
      return <div>Choisis une ville pour voir le temps qu'il a fait ces 5 derniers jours.</div>
    }

    return <table className="table table-hover">
      <thead>
        <tr>
          <th>Ville</th>
          <th>Temperature (°C)</th>
          <th>Pression (hPa)</th>
          <th>Himidité (%)</th>
        </tr>
      </thead>
      <tbody>
        {this.props.weathers.map(this.renderCities)}
      </tbody>
    </table>
  }
}

const mapStateToProps = ({weather}) => {
  return {
    weathers: weather
  }
}

export default connect(mapStateToProps)(WeatherList)
