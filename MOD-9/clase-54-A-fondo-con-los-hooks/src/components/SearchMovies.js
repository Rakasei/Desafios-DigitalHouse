import React, { useState, useRef, useEffect } from 'react';
import noPoster from '../assets/images/no-image.png';

const SearchMovies = () => {
	const apiKey = 'a21491b3';

	const [searchTerm, setSearchTerm] = useState('');
	const [movieList, setMovieList] = useState([]);
	const searchInputRef = useRef(null);

	useEffect(() => {
		if (searchTerm.trim() === '') return;

		const fetchMovies = async () => {
			const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
			try {
				const response = await fetch(url);
				const result = await response.json();
				if (result.Response === 'True') {
					setMovieList(result.Search || []);
				} else {
					setMovieList([]);
				}
			} catch (error) {
				console.error("Error: ", error);
				setMovieList([]);
			}
		};

		fetchMovies();
	}, [searchTerm]);

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		setSearchTerm(searchInputRef.current.value.trim());
	};

	return (
		<div className="container-fluid">
			{apiKey ? (
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							<form onSubmit={handleSearchSubmit}>
								<div className="form-group">
									<label htmlFor="search">Buscar por título:</label>
									<input id="search" ref={searchInputRef} type="text" className="form-control" />
								</div>
								<button type="submit" className="btn btn-info">Buscar</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Resultados para: {searchTerm}</h2>
						</div>
						{movieList.length > 0 ? (
							movieList.map((movie, index) => (
								<div className="col-sm-6 col-md-3 my-4" key={index}>
									<div className="card shadow mb-4">
										<div className="card-header py-3">
											<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
										</div>
										<div className="card-body">
											<div className="text-center">
												<img
													className="img-fluid px-3 px-sm-4 mt-3 mb-4"
													src={movie.Poster !== 'N/A' ? movie.Poster : noPoster}
													alt={movie.Title}
													style={{ width: '90%', height: '400px', objectFit: 'cover' }}
												/>
											</div>
											<p>{movie.Year}</p>
										</div>
									</div>
								</div>
							))
						) : (
							<div className="alert alert-warning text-center">No se encontraron películas</div>
						)}
					</div>
				</>
			) : (
				<div className="alert alert-danger text-center my-4 fs-2">No se agregó una API key correcta!</div>
			)}
		</div>
	);
};

export default SearchMovies;
