import Transition from '../components/Transition';

function Page({ children }) {
  return (
    <>
      <Transition />
      {children}
    </>
  );
}

export default Page;
