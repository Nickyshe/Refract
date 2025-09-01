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
      noFooter={false}
    >
      <RefractLandingPage />
    </Layout>
  );
}