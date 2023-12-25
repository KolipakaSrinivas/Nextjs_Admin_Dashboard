import Card from "../ui/dashboard/Card/Card";
import Chart from "../ui/dashboard/Chart/Chart";
import Rightbar from "../ui/dashboard/RightBar/RightBar";
import styles from "../ui/dashboard/dashboard.module.css";
import Transactions from '../ui/dashboard/Transactions/Transactions'
function page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions/>
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
}

export default page;
