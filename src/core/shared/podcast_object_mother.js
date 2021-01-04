import Podcast from "../podcast/domain/podcast";

export default class PodcastObjectMother {
    static anyOptions() {
        return {
            ANY_ID: '7762941',
            ANY_TITLE: 'A big title',
            ANY_DESCRIPTION: 'A big Description',
            ANY_DURATION: 336.864,
            ANY_PICTURE: 'https://images.theabcdn.com/i/37471711',
            ANY_AUDIO: 'https://audioboom.com/posts/7762863-.mp3',
            ANY_UPLOADED: '2021-01-01T11:38:15.000Z',

        }
    }
    static withAllInfo() {
        return new Podcast(
            PodcastObjectMother.anyOptions().ANY_ID,
            PodcastObjectMother.anyOptions().ANY_TITLE,
            PodcastObjectMother.anyOptions().ANY_DESCRIPTION,
            PodcastObjectMother.anyOptions().ANY_DURATION,
            PodcastObjectMother.anyOptions().ANY_PICTURE,
            PodcastObjectMother.anyOptions().ANY_AUDIO,
            PodcastObjectMother.anyOptions().ANY_UPLOADED
        )
    }

}