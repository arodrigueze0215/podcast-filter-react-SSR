import ListAllPodcast from '../src/core/podcast/actions/list_all_podcasts'
import FindPodcast from '../src/core/podcast/actions/find_podcast'
import PodcastRepository from '../src/core/podcast/infrastructure/browser_podcast_repository';

const browserPodcastRepository = new PodcastRepository(window.__PRELOADED_STATE__);
export const listAllPodcast = new ListAllPodcast(browserPodcastRepository);
export const findPodcast = new FindPodcast(browserPodcastRepository);
