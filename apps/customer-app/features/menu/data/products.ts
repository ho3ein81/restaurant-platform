export type Product = {
  id: string
  name: string
  price: number
  category: string
  image: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Americano",
    price: 4.5,
    category: "ice-coffee",
    image: "/cafe-image/americano.jpg"
  },
  {
    id: "2",
    name: "Caramel",
    price: 4.8,
    category: "ice-coffee",
    image: "/cafe-image/caramel.jpg"
  },
  {
    id: "3",
    name: "Cappuccino",
    price: 3.9,
    category: "hot-coffee",
    image: "/cafe-image/coppucino.jpg"
  },
  {
    id: "4",
    name: "Espresso",
    price: 3.2,
    category: "hot-coffee",
    image: "/cafe-image/espresso.jpg"
  },
  {
    id: "5",
    name: "Latte",
    price: 4.0,
    category: "ice-coffee",
    image: "/cafe-image/latte.jpg"
  },
  {
    id: "6",
    name: "Nescafe",
    price: 4.1,
    category: "ice-coffee",
    image: "/cafe-image/nesscafe.jpg"
  },
  {
    id: "7",
    name: "Nut Chocolate",
    price: 4.4,
    category: "hot-coffee",
    image: "/cafe-image/nutchocolate.jpg"
  },
  {
    id: "8",
    name: "San Sebastian",
    price: 5.0,
    category: "dessert",
    image: "/cafe-image/sansebastian.jpg"
  },
  {
    id: "9",
    name: "Sneakers",
    price: 5.2,
    category: "ice-coffee",
    image: "/cafe-image/sneakers.jpg"
  }
]
