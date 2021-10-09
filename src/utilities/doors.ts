import DoorModel from '../models/door';

export function createDoors(quantity: number, selected: number): DoorModel[] {
	return Array.from({ length: quantity }, (_, i) => {
		const number = i + 1;
		const hasGift = number === selected;

		return new DoorModel(number, hasGift);
	});
}

export function updateDoors(doors: DoorModel[], updatedDoor: DoorModel): DoorModel[] {
	return doors.map((door) => {
		const sameDoor = door.number === updatedDoor.number;

		if (sameDoor) {
			return updatedDoor;
		}

		return updatedDoor.opened ? door : door.unselect();
	});
}
