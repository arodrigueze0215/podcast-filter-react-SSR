import format from 'date-fns/format';
export default class Uploaded {
    constructor(date) {
        this.date = date;
    }
    formatDate() {
        const date = new Date(this.date)
        return format(date, 'MMMM dd, yyyy')
    }
}