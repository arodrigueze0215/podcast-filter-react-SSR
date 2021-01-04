    export default class PodcastRepository {
    constructor () {
        this.allPodcast = new Array();
    }
    async all() {        
        return await this.allPodcast;
    }

    store(podcast) {
        this.allPodcast.push(podcast)
    }
}