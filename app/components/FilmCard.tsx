"use client";

import React from "react";

interface FilmProps {
	title: string;
	description: string;
	running_time: string;
	director: string;
}

export default function FilmCard({
	title,
	description,
	running_time,
	director,
}: FilmProps) {
	return (
		<div className="film-card">
			<h3>{title}</h3>
			<p className="desc">{description.slice(0, 120)}...</p>
			<p>
				<strong>Durée :</strong> {running_time} min
			</p>
			<p>
				<strong>Réalisateur :</strong> {director}
			</p>
		</div>
	);
}
