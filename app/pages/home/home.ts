import {Page} from 'ionic-angular';

interface Budget {
	title : string;
	available : number;
	total : number;
}	


@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

	monthlyBudget: Budget;

	constructor() {
		this.monthlyBudget = {title: 'my monthly budget', available: 150, total: 750};
	}
}
