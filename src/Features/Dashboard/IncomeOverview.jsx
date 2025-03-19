import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);


const IncomeOverview = () => {
    const doughnutData = {
        labels: ["Donation", "Rent", "Miscellaneous", "Book Sale", "Uniform Sale"],
        datasets: [
          {
            data: [59234, 45000, 38000, 29000, 55000],
            backgroundColor: ["#00C853", "#FFC107", "#00BCD4", "#AB47BC", "#8D6E63"],
          },
        ],
      };
    
      const doughnutOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                let value = tooltipItem.raw;
                let total = doughnutData.datasets[0].data.reduce((a, b) => a + b, 0);
                let percentage = ((value / total) * 100).toFixed(1);
                return `₹ ${value.toLocaleString()} (${percentage}%)`;
              },
            },
          },
        },
      };
  return (
    <div className="mt-[1rem] p-[1rem] bg-background w-[50%] rounded-[10px]">
      <h2 className="font-bold">Income June 2024</h2>
      <Doughnut data={doughnutData} options={doughnutOptions} />
    </div>
  );
};

export default IncomeOverview;
