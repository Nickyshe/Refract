// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Heading from '@theme/Heading';
// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className={styles.heroTitle}>
//           Welcome to Refract Documentation
//         </Heading>
//         <p className={styles.heroSubtitle}>
//           A powerful framework for building reactive applications with optical state management and compositional components
//         </p>
//       </div>
//     </header>
//   );
// }

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`${siteConfig.title}`}
//       description="A powerful framework for building reactive applications with optical state management"
//       wrapperClassName="homepage">
//       <div className={styles.homepageWrapper}>
//         <HomepageHeader />
//         <main>
//           <HomepageFeatures />
//         </main>
//       </div>
//     </Layout>
//   );
// }


import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import RefractLandingPage from '@site/src/components/RefractLandingPage';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A powerful framework for building reactive applications with optical state management"
      wrapperClassName="homepage"
      noFooter={false} // Set to true if you want to hide footer on homepage
    >
      <RefractLandingPage />
    </Layout>
  );
}