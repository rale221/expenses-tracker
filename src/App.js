import './App.css';
import Expenses from './components/Expenses';

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
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
