import Transition from '../components/Transition';

function Page({ children, name = null }) {
  return (
    <>
      {/* transition */}
      <Transition home={name === 'Home'} />

      {/* main content */}
      {children}
    </>
  );
}

export default Page;
