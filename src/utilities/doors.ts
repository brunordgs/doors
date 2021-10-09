import DoorModel from '../models/door';

export function createDoors(quantity: number, doorWithGift: number): DoorModel[] {
	return Array.from({ length: quantity }, (_, i) => {
		const doorNumber = i + 1;
		const hasGift = doorNumber === doorWithGift;

		return new DoorModel(doorNumber, hasGift);
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
