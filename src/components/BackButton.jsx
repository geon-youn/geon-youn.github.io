import styles from '../styles/backbutton.module.css';

function LeftArrow() {
  const style = {
    filter:
      'invert(100%) sepia(100%) saturate(0%) hue-rotate(39deg) brightness(107%) contrast(101%)',
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      style={style}
    >
      <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zm1.289-15.7 1.422 1.4-4.3 4.344 4.289 4.245-1.4 1.422-5.714-5.648z" />
    </svg>
  );
}

function BackButton() {
  return (
    <a className={styles.button} href="/">
      <div className={styles.left}>
        <LeftArrow></LeftArrow>
      </div>
      <div className={styles.right}>
        <div>back</div>
      </div>
    </a>
  );
}

export default BackButton;
