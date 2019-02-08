interface IMaterial {
	name: string;
	amount: number;
}

interface IMenu {
	name: string;
	picture: string;
	materials: IMaterial[];
	time_cost: number;
}