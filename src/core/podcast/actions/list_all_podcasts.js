export default class listAllPodcast {
    constructor(podcastRepository) {
        this.podcastRepository = podcastRepository
    }

    async execute() {
        return await this.podcastRepository.all()
    }
}