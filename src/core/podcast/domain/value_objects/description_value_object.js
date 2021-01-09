export default class Description {
    constructor(text) {
        this.text = text
    }
    ellipsis(size) {
        if (this.text.length > 0) return `${this.text.slice(0, size)}...`
        else return ''
    }
}