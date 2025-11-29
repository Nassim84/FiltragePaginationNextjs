"use client";

import { useEffect, useState } from "react";
import FilmCard from "./components/FilmCard";

interface Film {
	id: string;
	title: string;
	description: string;
	running_time: string;
	director: string;
}

export default function Home() {
	const [films, setFilms] = useState<Film[]>([]);
	const [search, setSearch] = useState("");
	const [director, setDirector] = useState("");
	const [duration, setDuration] = useState("");
	const [page, setPage] = useState(1);

	const ITEMS_PER_PAGE = 9;

	useEffect(() => {
		async function fetchFilms() {
			const res = await fetch("https://ghibliapi.vercel.app/films");
			const data = await res.json();
			setFilms(data);
		}
		fetchFilms();
	}, []);

	// FILTRAGE
	const filtered = films.filter((film) => {
		const matchSearch = film.title.toLowerCase().includes(search.toLowerCase());
		const matchDirector = director ? film.director === director : true;

		const time = Number(film.running_time);
		let matchDuration = true;
		if (duration === "short") matchDuration = time < 60;
		if (duration === "medium") matchDuration = time >= 60 && time <= 120;
		if (duration === "long") matchDuration = time > 120;

		return matchSearch && matchDirector && matchDuration;
	});

	// PAGINATION
	const start = (page - 1) * ITEMS_PER_PAGE;
	const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);
	const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

	const directors = Array.from(new Set(films.map((f) => f.director)));

	return (
		<div className="container">
			<h1>Films Ghibli — Multi-filtre</h1>

			<input
				className="search"
				placeholder="Rechercher un film..."
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
					setPage(1);
				}}
			/>

			<div className="filters">
				<select
					value={director}
					onChange={(e) => {
						setDirector(e.target.value);
						setPage(1);
					}}
				>
					<option value="">Tous les réalisateurs</option>
					{directors.map((d) => (
						<option key={d} value={d}>
							{d}
						</option>
					))}
				</select>

				<select
					value={duration}
					onChange={(e) => {
						setDuration(e.target.value);
						setPage(1);
					}}
				>
					<option value="">Toutes les durées</option>
					<option value="short">Moins de 60 min</option>
					<option value="medium">60–120 min</option>
					<option value="long">Plus de 120 min</option>
				</select>
			</div>

			<div className="grid">
				{paginated.map((film) => (
					<FilmCard key={film.id} {...film} />
				))}
			</div>

			<div className="pagination">
				<button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
					◀ Précédent
				</button>

				<span>
					Page {page} / {totalPages}
				</span>

				<button
					disabled={page === totalPages}
					onClick={() => setPage((p) => p + 1)}
				>
					Suivant ▶
				</button>
			</div>
		</div>
	);
}
