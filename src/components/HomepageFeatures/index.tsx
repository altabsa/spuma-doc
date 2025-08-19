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
      <p className="subtitle"><strong>Zeskanuj. Rozpoznaj. Działaj.</strong></p>
      <p>Dodaj dokument ze skanera, e-maila lub integracji – SPUMA rozpoznaje treść (OCR) i przygotowuje go do dalszej pracy.</p>
      </>
    ),
  },
  {
    title: 'PUblish',
    Svg: require('@site/static/img/undraw_publish-post_7g2z.svg').default,
    description: (
      <>
        <p className="subtitle"><strong>Zatwierdzaj. Deleguj. Kontroluj.</strong></p>
      <p>Obsługuj procesy obiegu dokumentów – opisuj, deleguj i zatwierdzaj zgodnie z ustalonymi schematami.</p>
      </>
    ),
  },
  {
    title: 'MAnage',
    Svg: require('@site/static/img/undraw_file-manager_yics.svg').default,
    description: (
      <>
        <p className="subtitle"><strong>Znajdź. Komentuj. Raportuj.</strong></p>
      <p>Wyszukuj dokumenty po treści i atrybutach, dodawaj komentarze i twórz raporty zapewniające pełną kontrolę.</p>
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
