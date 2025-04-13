// Common media types
export interface MediaBase {
  id: number;
  title?: string;
  name?: string; // for TV shows
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  vote_average: number;
  vote_count: number;
  genre_ids?: number[];
  genres?: Genre[];
  popularity: number;
  media_type?: 'movie' | 'tv' | 'person';
}

export interface Movie extends MediaBase {
  title: string;
  release_date: string;
  runtime: number;
  budget?: number;
  revenue?: number;
  tagline?: string;
  status?: string;
  production_companies?: ProductionCompany[];
}

export interface TVShow extends MediaBase {
  name: string;
  first_air_date: string;
  last_air_date?: string;
  number_of_seasons: number;
  number_of_episodes: number;
  episode_run_time: number[];
  status?: string;
  networks?: Network[];
  seasons?: Season[];
  created_by?: Creator[];
}

export interface Person {
  id: number;
  name: string;
  profile_path: string | null;
  known_for_department: string;
  known_for?: MediaBase[];
  media_type: 'person';
}

export interface Genre {
  id: number;
  name: string;
}

export interface Network {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface Creator {
  id: number;
  name: string;
  profile_path: string | null;
  credit_id: string;
}

export interface Season {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  episode_count: number;
  air_date?: string;
}

export interface Episode {
  id: number;
  name: string;
  overview: string;
  still_path: string | null;
  air_date: string;
  episode_number: number;
  season_number: number;
  runtime?: number;
  vote_average: number;
  vote_count: number;
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
}

export interface Crew {
  id: number;
  name: string;
  job: string;
  department: string;
  profile_path: string | null;
}

export interface Credits {
  cast: Cast[];
  crew: Crew[];
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
}

export interface SearchResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: Array<Movie | TVShow | Person>;
}

export interface TrendingResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: Array<MediaBase>;
}

export interface MovieDetails extends Movie {
  credits?: Credits;
  videos?: { results: Video[] };
  similar?: { results: Movie[] };
  recommendations?: { results: Movie[] };
}

export interface TVShowDetails extends TVShow {
  credits?: Credits;
  videos?: { results: Video[] };
  similar?: { results: TVShow[] };
  recommendations?: { results: TVShow[] };
}

export interface SeasonDetails {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  air_date?: string;
  episodes: Episode[];
} 