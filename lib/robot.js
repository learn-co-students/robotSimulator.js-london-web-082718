class Robot {

	constructor() {
		this.coordinates = [0,0];
		this.bearing = 'north';
	}

	compass() { return ["north", "east", "south", "west"]; }

	setCoordinates(...args) {
		this.coordinates = args;
	}

	setBearing(bearing) {
		if (this.compass().includes(bearing)) {
			this.bearing = bearing;
		} else {
			throw 'Invalid Robot Bearing';
		}
	}

	place(instructions) {
		this.coordinates = [instructions.x, instructions.y];
		this.bearing = instructions.direction;
	}

	bearingIndex() {
		return this.compass().indexOf(this.bearing);
	}

	changeBearing(index) {
		this.bearing = this.compass()[index];
	}

	turnRight() {
		let bearingIndex = this.bearingIndex();
		if (++bearingIndex === 4) { bearingIndex = 0 };
		this.changeBearing(bearingIndex);
	}

	turnLeft() {
		let bearingIndex = this.bearingIndex();
		if (--bearingIndex === -1) { bearingIndex = 3 };
		this.changeBearing(bearingIndex);
	}

	advance() {
		switch (this.bearing) {
			case 'north':
				this.coordinates[1]++;
				break;
			case 'east':
				this.coordinates[0]++;
				break;
			case 'south':
				this.coordinates[1]--;
				break;
			case 'west':
				this.coordinates[0]--;
				break;
		}
	}

	translateInstructions(instructions) {
		instructions.split('').forEach( 
			instr => this.translateSingleInstruction(instr)
		)
	}

	translateSingleInstruction(instruction) {
		switch (instruction) {
			case 'L':
				this.turnLeft()
				break;
			case 'R':
				this.turnRight()
				break;	
			case 'A':
				this.advance()
				break;
		}
	}

}
