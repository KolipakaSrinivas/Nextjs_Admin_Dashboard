import Navbar from "@/app/ui/dashboard/navbar/Navbar";
import Sidebar from "@/app/ui/dashboard/sideBar/Sidebar";
import Footer from "@/app/ui/dashboard/footer/Footer";
import styles from '@/app/ui/dashboard/dashboard.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;


