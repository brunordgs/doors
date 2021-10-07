export default class Door {
	#number: number;
	#hasGift: boolean;
	#selected: boolean;
	#opened: boolean;

	constructor(number: number, hasGift = false, selected = false, opened = false) {
		this.#number = number;
		this.#hasGift = hasGift;
		this.#selected = selected;
		this.#opened = opened;
	}

	get number() {
		return this.#number;
	}

	get hasGift() {
		return this.#hasGift;
	}

	get selected() {
		return this.#selected;
	}

	get opened() {
		return this.#opened;
	}

	toggleSelect() {
		const selected = !this.selected;
		return new Door(this.number, this.hasGift, selected, this.opened);
	}

	toggleOpen() {
		const opened = true;
		return new Door(this.number, this.hasGift, this.selected, opened);
	}

	unselect() {
		const selected = false;
		return new Door(this.number, this.hasGift, selected, this.opened);
	}
}
