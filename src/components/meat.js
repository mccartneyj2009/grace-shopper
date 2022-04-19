const Meat = ({ meats }) => {
  return (
    <>
      <h1>We have the meats</h1>

      <div>
        {meats.map((meat) => {
          return (
            <div key={meat.id}>
              <h2>{meat.species}</h2>
              <p>{meat.image}</p>
              <p> {meat.description}</p>
              <p>{meat.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Meat;
