import React from 'react';
import './RecommendedVideos.css';
import Chip from '@material-ui/core/Chip';
import VideoCard from './VideoCard';
import DraculaCastle from '../images/videos/Dracula Castle.jpg';
import Venom2Trailer from '../images/videos/Venom 2 Trailer.jpg';
import DespedidaKun from '../images/videos/Despedida Kun.jpg';
import Pocahontas from '../images/videos/Pocahontas.jpg';
import AleSergi from '../images/videos/Ale Sergi.jpg';
import Messi from '../images/videos/Messi.jpg';
import MonstersAtWork from '../images/videos/Monsters at Work.jpg';
import BasuraVolcanes from '../images/videos/Basura Volcanes.jpg';
import LuisitoComunica from '../images/channel/Luisito Comunica.jpg';
import OneMedia from '../images/channel/One Media.jpg';
import ESPN from '../images/channel/ESPN.jpg';
import TeLoResumo from '../images/channel/Te Lo Resumo.jpg';
import Telefe from '../images/channel/Telefe.jpg';
import Olé from '../images/channel/Olé.jpg';
import SensaCine from '../images/channel/SensaCine.jpg';
import WhatIf from '../images/channel/What If.jpg';

function RecommendedVideos() {
	return (
		<div className="recommendedVideos">
			<div className="recommendedVideos__chips">
				<Chip
					className="recommendedVideos__chip selected"
					variant="outlined"
					label="Todos"
				/>

				<Chip
					className="recommendedVideos__chip"
					variant="outlined"
					label="En tiempo real"
				/>

				<Chip
					className="recommendedVideos__chip"
					variant="outlined"
					label="Ciencia ficción"
				/>

				<Chip
					className="recommendedVideos__chip"
					variant="outlined"
					label="Listas de reproducción"
				/>

				<Chip
					className="recommendedVideos__chip"
					variant="outlined"
					label="Cumbias"
				/>

				<Chip
					className="recommendedVideos__chip"
					variant="outlined"
					label="Personajes"
				/>

				<Chip
					className="recommendedVideos__chip"
					variant="outlined"
					label="Tráiler"
				/>

				<Chip
					className="recommendedVideos__chip"
					variant="outlined"
					label="Música"
				/>

				<Chip
					className="recommendedVideos__chip"
					variant="outlined"
					label="Premier League"
				/>
			</div>

			<div className="recommendedVideos__videos">
				<VideoCard
					image={DraculaCastle}
					title="Así es el castillo real de DRÁCULA en Transilvania..."
					channelImage={LuisitoComunica}
					channel="Luisito Comunica"
					verified
					views="20 M de vistas"
					timestamp="hace 1 año"
				/>

				<VideoCard
					image={Venom2Trailer}
					title="VENOM 2 Official Trailer (2021)"
					channelImage={OneMedia}
					channel="ONE Media"
					verified
					views="21 M de vistas"
					timestamp="hace 1 semana"
				/>

				<VideoCard
					image={DespedidaKun}
					title="#Kun #Agüero, en exclusiva en #SportsCenter:..."
					channelImage={ESPN}
					channel="ESPN Fans"
					verified
					views="200,239 vistas"
					timestamp="hace 7 horas"
				/>

				<VideoCard
					image={Pocahontas}
					title="Pocahontas (La Uno y La Dos) | #TeLoResumo"
					channelImage={TeLoResumo}
					channel="Te lo resumo"
					verified
					views="1.1 M de vistas"
					timestamp="hace 6 días"
				/>

				<VideoCard
					image={AleSergi}
					title="Ale Sergi recordó su romance con Andrea..."
					channelImage={Telefe}
					channel="Telefe"
					verified
					views="78,311 vistas"
					timestamp="hace 23 horas"
				/>

				<VideoCard
					image={Messi}
					title="El regalo que emocionó a Messi"
					channelImage={Olé}
					channel="Olé"
					views="84,358 vistas"
					timestamp="hace 1 día"
				/>

				<VideoCard
					image={MonstersAtWork}
					title="MONSTERS AT WORK Tráiler Teaser (2021)..."
					channelImage={SensaCine}
					channel="SensaCine TRAILERS"
					verified
					views="961,036 vistas"
					timestamp="hace 5 días"
				/>

				<VideoCard
					image={BasuraVolcanes}
					title="¿Qué pasaría si arrojáramos nuestra basu..."
					channelImage={WhatIf}
					channel="Qué pasaría si - What If Es..."
					verified
					views="7.1 M de vistas"
					timestamp="hace 1 año"
				/>
			</div>
		</div>
	);
}

export default RecommendedVideos;
