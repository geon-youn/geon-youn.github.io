import '../styles/transition.css';

function Transition({ hidden }) {
  return hidden ? (
    <></>
  ) : (
    <>
      <div className="blur"></div>
      <img src="../../public/icon.png" alt="Geon osu! logo" />
    </>
  );
}

export default Transition;
