import './App.css';
import Expenseitem from './components/ExpenseItem';

function App() {
	const expenses = [
		{
			id: 'e1',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2021, 5, 15),
		},
		{
			id: 'e2',
			title: 'Toilet Paper',
			amount: 94.67,
			date: new Date(2021, 4, 15),
		},
		{ id: 'e3', title: 'New Tv', amount: 894.67, date: new Date(2021, 3, 25) },
		{
			id: 'e4',
			title: 'Sneakers',
			amount: 104.67,
			date: new Date(2021, 2, 12),
		},
	];
	return (
		<div>
			<Expenseitem
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			/>
			<Expenseitem
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			/>
			<Expenseitem
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			/>
			<Expenseitem
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			/>
		</div>
	);
}

export default App;
