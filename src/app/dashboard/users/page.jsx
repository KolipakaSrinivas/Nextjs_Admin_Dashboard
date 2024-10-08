import styles from "@/app/ui/dashboard/users/search.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import {deleteUser} from '@/app/lib/actions'

const UserPage = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count,users} = await fetchUsers(q,page);


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user,index) =>
              <tr key={index}>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4,16)}</td>
                <td>{user.isAdmin ? 'Admin': 'Client'}</td>
                <td>{user.isActive ? 'Active': 'Passive'}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <form action={deleteUser} >
                      <input type="hidden" name="id"  value={(user.id)} />
                      <button action={deleteUser} className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            )}
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  );
};

export default UserPage;
