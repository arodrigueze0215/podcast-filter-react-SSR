import PodcastRepository from '../../src/core/podcast/infrastructure/podcast_repository_in_memory'
import ListAllPodcast from '../../src/core/podcast/actions/list_all_podcasts'
import PodcastObjectMother from '../../src/core/shared/podcast_object_mother';

test('list the podcasts', async () => {
    const podcastRepository = new PodcastRepository();
    const podcastObjectMother = PodcastObjectMother.withAllInfo();
    podcastRepository.store(podcastObjectMother);
    const listAllPodcast = new ListAllPodcast(podcastRepository);
    const allPodcast = await listAllPodcast.execute();
    const podcast = allPodcast[0];

    expect(podcast.title).toBe('A big title')

});