import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TeLoResumo from '../images/channel/Te Lo Resumo.jpg';
import TeLoResumoLarge from '../images/channel/Te Lo Resumo Large.jpg';
import BrigadaZ from '../images/videos/Brigada Z.jpg';
import Pocahontas from '../images/videos/Pocahontas.jpg';

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage__filter">
				<TuneOutlinedIcon />

				<h2>Filtros</h2>
			</div>

			<hr />

			<ChannelRow
				image={TeLoResumoLarge}
				channel="Te lo resumo"
				verified
				subs="5.81 M de suscriptores"
				videos="520"
				description="Te lo resumo así nomás, un canal con resúmenes de tus series y películas favoritas o no tan favoritas o que ni siquiera sabías ..."
			/>

			<hr />

			<h4>Lo más reciente de Te lo resumo</h4>

			<VideoRow
				image={BrigadaZ}
				title="La Saga de la Brigada Z | #TeLoResumo"
				views="548,116 vistas"
				timestamp="hace 4 días"
				channelImage={TeLoResumo}
				channel="Te lo resumo"
				description="Twitch | https://www.twitch.tv/teloresumoasinomas Instagram | https://www.instagram.com/teloresumo/ Twitter ..."
			/>

			<VideoRow
				image={Pocahontas}
				title="Pocahontas (La Uno y La Dos) | #TeLoResumo"
				views="1.2 M de vistas"
				timestamp="hace 6 días"
				channelImage={TeLoResumo}
				channel="Te lo resumo"
				description="Twitch | https://www.twitch.tv/teloresumoasinomas Instagram | https://www.instagram.com/teloresumo/ Twitter ..."
			/>
		</div>
	);
}

export default SearchPage;
