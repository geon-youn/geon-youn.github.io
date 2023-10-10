import '../styles/transition.css';

function Transition({ hidden }) {
  return hidden ? (
    <></>
  ) : (
    <div className="transition">
      <div className="blur"></div>
      <img src="../../public/icon.png" alt="Geon osu! logo" />
    </div>
  );
}

export default Transition;
