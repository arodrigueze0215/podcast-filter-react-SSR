import PodcastRepository from '../../src/core/podcast/repository/podcast_repository'
describe('test the fetch of audioboom API', () => {
    test('get all podcast from API', async () => {
        const podcastRepository = new PodcastRepository();
        const all = await podcastRepository.all()
        expect(all.length).toBeGreaterThan(0)    
    });
});