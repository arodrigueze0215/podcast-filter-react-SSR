import ListAllPodcast from '../src/core/podcast/actions/list_all_podcasts'
import PodcastRepository from '../src/core/podcast/infrastructure/api_podcast_repository';
const podcastRepository = new PodcastRepository();

export const listAllPodcast = new ListAllPodcast(podcastRepository);