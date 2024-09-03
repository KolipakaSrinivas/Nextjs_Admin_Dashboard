import styles from "@/app/ui/dashboard/dashboard.module.css";
import Card from "@/app/ui/dashboard/card/Card";
import Transactions from "@/app/ui/dashboard/transactions/Transactions";
import RightBar from "@/app/ui/dashboard/rightBar/RightBar";
import Chart from "@/app/ui/dashboard/chart/Chart";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
