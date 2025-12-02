/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
	output: "export",
	basePath: isProd ? "/FiltragePaginationNextjs" : "",
	assetPrefix: isProd ? "/FiltragePaginationNextjs/" : "",
	// si tu utilises next/image — il faut désactiver l’optimisation
	images: {
		unoptimized: true,
	},
};
