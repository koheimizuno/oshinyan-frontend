const favorites = new Array(12).fill({
  name: "猫好きさん",
});

const Fanciers = () => {
  return (
    <div className="flex flex-wrap gap-x-20 gap-y-4">
      {favorites.map((e, i) => (
        <div className="flex items-center" key={i}>
          <img
            className="w-7 h-7"
            src="/assets/imgs/icons/fancier.png"
            alt=""
          />
          <div className="ms-3">猫好きさん</div>
          <img className="ms-5" src="/assets/imgs/icons/comment_abbr.png" alt="" />
        </div>
      ))}
    </div>
  );
};

export default Fanciers;
