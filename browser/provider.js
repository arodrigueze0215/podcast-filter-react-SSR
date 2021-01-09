import ListAllPodcast from '../src/core/podcast/actions/list_all_podcasts'
import PodcastRepository from '../src/core/podcast/infrastructure/browser_podcast_repository';
const podcastRepository = new PodcastRepository(window.__PRELOADED_STATE__);

export const listAllPodcast = new ListAllPodcast(podcastRepository);