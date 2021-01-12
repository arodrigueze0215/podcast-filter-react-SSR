export default class FindPodcast {
    constructor(podcastRepository) {
        this.podcastRepository = podcastRepository
    }

    async execute(query) {
        return await this.podcastRepository.findPodcastBy(query);
    }
}