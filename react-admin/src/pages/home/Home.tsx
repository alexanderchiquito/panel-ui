import BarCharBox from '../../components/barCharBox/BarCharBox'
import Chartbox from '../../components/charBox/Chartbox'
import TopBox from '../../components/topBox/TopBox'
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser, barChartBoxRevenue, barChartBoxVisit } from '../../data'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
        <div className="box box1">
          <TopBox/>
        </div>
        <div className="box box2"><Chartbox {...chartBoxUser} /></div>
        <div className="box box3"><Chartbox {...chartBoxProduct} /></div>
        <div className="box box4"></div>
        <div className="box box5"><Chartbox {...chartBoxConversion} /></div>
        <div className="box box6"><Chartbox {...chartBoxRevenue}/></div>
        <div className="box box7">box 7</div>
        <div className="box box8"><BarCharBox {...barChartBoxVisit} /></div>
        <div className="box box9"><BarCharBox {...barChartBoxRevenue} /></div>
    </div>
  )
}

export default Home