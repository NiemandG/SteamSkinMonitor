import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip } from 'chart.js'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip)
function ChartComponent({ data }) {

	const title = Object.keys(data)
	const buyPrice = data[title][data[title].length - 1].price_buy
	const sellPrice = data[title][data[title].length - 1].price_sell

	const labelsValues = data[title].map(el => el.date)
	const valuesSell = data[title].map(el => el.price_sell)
	const valuesBuy = data[title].map(el => el.price_buy)
	const dataValues = {
		labels: labelsValues,
		datasets: [{
			label: 'Продажа',
			data: valuesSell,
			fill: false,
			borderColor: 'rgb(255, 17, 53)',
			tension: 0.1
		},
		{
			label: 'Покупка',
			data: valuesBuy,
			fill: false,
			borderColor: 'rgb(15, 19, 255)',
			tension: 0.1
		}
		]
	}
	return (
		<div className="card" style={{ width: "33rem", marginLeft: "10px", marginTop: "10px" }}>
			<div class="card-body">
				<h5 class="card-title">{title}</h5>
				<Line data={dataValues} />
			</div>
			<p style={{ marginLeft: "10px" }}>Текущая цена продажи: {sellPrice}</p>
			<p style={{ marginLeft: "10px" }}>Текущая цена покупки: {buyPrice}</p>
		</div>
	)
}

export default ChartComponent