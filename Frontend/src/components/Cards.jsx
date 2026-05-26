const Cards = ({ item }) => {
  console.log(item);
  return (
    <>
      <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img className="h-[256px] w-full" src={item.image} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {item.name}
            <span class="badge badge-secondary">{item.category}</span>
          </h2>
          <p className="my-5 text-sm">{item.title}</p>
          <div class="card-actions justify-between">
            <div class="badge badge-outline">${item.price}</div>
            <div class="cursor-pointer hover:bg-pink-500 py-1 px-2 rounded-md border-[1px]">Buy now</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
