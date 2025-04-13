// Get streaming URL from VidSrc
export const getStreamingUrl = async (tmdbId: string, mediaType?: 'movie' | 'tv', season?: number, episode?: number): Promise<string> => {
  // Use VidSrc.to API for real streaming links
  if (mediaType === 'movie' || !mediaType) {
    return `https://vidsrc.to/embed/movie/${tmdbId}`;
  } else {
    // For TV shows
    if (season && episode) {
      return `https://vidsrc.to/embed/tv/${tmdbId}/${season}/${episode}`;
    } else if (season) {
      return `https://vidsrc.to/embed/tv/${tmdbId}/${season}`;
    } else {
      return `https://vidsrc.to/embed/tv/${tmdbId}`;
    }
  }
};