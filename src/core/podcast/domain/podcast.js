import Uploaded from './value_objects/uploaded_value_object';
export default class Podcast {
    /**
     * this is the Podcast domain object 
     * @param {id} id Podcast
     * @param {title} title of the podcast
     * @param {description} description of the podcast
     * @param {duration} duration of the podcast
     * @param {picture} picture of the podcast
     * @param {url_audio} url_audio of the podcast
     * @param {uploaded_at} uploaded_at of the podcast
     */
    constructor(id, title, description, duration, picture, url_audio, uploaded_at) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.picture = picture;
        this.url_audio = url_audio;
        this.uploaded_at = new Uploaded(uploaded_at)
    }
}