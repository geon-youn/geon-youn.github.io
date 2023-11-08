import Page from './Page';
import styles from '../styles/contact.module.css';

const contacts = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/geon-youn/',
  },
  {
    name: 'Email',
    url: 'mailto:geon.youn@outlook.com',
  },
  {
    name: 'Discord',
    url: 'https://discordapp.com/users/166508795915141121',
  },
];

function Contact() {
  return (
    <Page page={'Contact'}>
      <div className={styles.contacts}>
        {contacts.map((c) => {
          return (
            <a
              className={styles.contact}
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noreferrer"
            >
              {c.name}
            </a>
          );
        })}
      </div>
    </Page>
  );
}

export default Contact;
