import humanizeDuration from 'humanize-duration';
export default class Duration {
    constructor(duration) {
        this.duration = duration;
    }
    humanize() {
        return humanizeDuration(this.duration*1000, { round: true, units: ['h', 'm'] });
    }
}