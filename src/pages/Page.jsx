import Transition from '../components/Transition';

function Page({ children, name = null }) {
    return (
        <>
            <Transition home={name === 'Home'} />
            {children}
        </>
    );
}

export default Page;
