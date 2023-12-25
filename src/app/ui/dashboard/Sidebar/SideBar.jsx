import React from "react";
import styles from "./Sidebar.module.css";
import MenuLinks from "./MenuLinks/MenuLinks";
import Image from "next/image";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout
} from "react-icons/md";

function SideBar() {
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />
        }
      ]
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />
        }
      ]
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />
        }
      ]
    }
  ];
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          alt="avather"
          src="/noavatar.png"
          height={50}
          width={50}
          className={styles.userImage}
        />
        <div className={styles.userDetail}>
          <span className={styles.userName}>Jhone Joe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((items) => (
          <li key={items.title}>
            <span className={styles.cat}>{items.title}</span>
            {items.list.map((item) => (
              <MenuLinks key={item.title} item={item} />
            ))}
          </li>
        ))}
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </ul>
    </div>
  );
}

export default SideBar;
