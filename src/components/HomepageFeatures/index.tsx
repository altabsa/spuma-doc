import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Scan',
    Svg: require('@site/static/img/undraw_photocopy_k0g7.svg').default,
    description: (
      <>
      Info  jak dokumenty są skanowane i rozpoznawane
      </>
    ),
  },
  {
    title: 'PUblish',
    Svg: require('@site/static/img/undraw_publish-post_7g2z.svg').default,
    description: (
      <>
        Hasło o rozbudowanych procesach zatwierdzania i opisywania
      </>
    ),
  },
  {
    title: 'MAnage',
    Svg: require('@site/static/img/undraw_file-manager_yics.svg').default,
    description: (
      <>
        Hasło o łatwym wyszukiwaniu dokumentów ,komentowaniu , wersjonowaniu i raportowaniu 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
