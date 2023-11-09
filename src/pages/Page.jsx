import Transition from '../components/Transition';

function Page({ children, page = 'Home' }) {
  return (
    <>
      {/* transition */}
      <Transition page={page} />

      {/* main content */}
      {children}
    </>
  );
}

export default Page;
