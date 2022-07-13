import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styles from './not-found-screen.module.css';
import Header from 'components/header/header';
import { AppRoute } from 'const/const';

export default function NotFoundScreen(): JSX.Element {
  return (
    <main className="page__main page__main--not-found">
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div className="page__not-found-container container">
        <Header />
        <section className={styles.container}>
          <h1 className={styles.error404}>404</h1>
          <h2>Page not found</h2>
          <Link className={styles.link}to={AppRoute.Main}>Вернуться на главную</Link>
        </section>
      </div>
    </main>
  );
}
