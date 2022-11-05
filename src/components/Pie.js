import React, { useState, useEffect, useContext } from 'react';
import { ExpenseContext } from '../ExpenseContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart() {
  const [totalOut, setTotalOut] = useState(0);
  const [totalIn, setTotalIn] = useState(0);
  const { expenses } = useContext(ExpenseContext);


  // If one of these are zero then value has to be 0

  useEffect(() => {
    const outgoings = expenses.filter(e => e.type === 'expense');
    const incomings = expenses.filter(e => e.type === 'income');

    if (outgoings.length === 0) {
      setTotalOut(0);
    } else {
      const totalOutgoing = outgoings.map(o => Number(o.amount)).reduce((accumulator, currentValue) => accumulator + currentValue);
      setTotalOut(totalOutgoing);
    }

    if (incomings.length === 0) {
      setTotalIn(0);
    } else {
      const totalIncoming = incomings.map(o => Number(o.amount)).reduce((accumulator, currentValue) => accumulator + currentValue);
      setTotalIn(totalIncoming);
    }

  }, [expenses]);

  const data = {
    labels: ['Expenses', 'Income'],
    datasets: [
      {
        label: '# of Votes',
        data: [totalOut, totalIn],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgb(187, 247, 208, 0.4)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgb(187, 247, 208, 1)'
        ],
        borderWidth: 2,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;