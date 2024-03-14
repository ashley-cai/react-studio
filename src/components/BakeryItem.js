// TODO: create a component that displays a single bakery item

export function BakeryItem({name, desc, price, img, onClick}) {
    return (
        <div class="bakery-item" onClick={onClick}>
            <img class="bakery-image" src={img}></img>
            <div>{name}</div>
            <div>{desc}</div>
            <div>{price}</div>
        </div>
    );
  }