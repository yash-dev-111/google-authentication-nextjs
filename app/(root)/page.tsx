// import { Button } from '@/components/ui/button'
// import { UserButton } from '@clerk/nextjs'

// const SetupPage =() =>  {
//   return (
//     <div>
//     <p>Application Page</p>
    

//     <UserButton afterSignOutUrl='/'/>
//     </div>
//   )
// }

// export default SetupPage



import { UserButton } from '@clerk/nextjs';
import styles from './SetupPage.module.css';

const SetupPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CodeTentacles Coding Assignment</h1>
      <p className={styles.desc}>Application Page</p>
      <div className={styles.buttonContainer}>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default SetupPage;

