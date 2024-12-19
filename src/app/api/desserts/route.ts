import { NextResponse } from 'next/server';
import { Dessert } from '@/data/types';

// In a real app, this would come from a database
const desserts: Dessert[] = [
  {
    id: 1,
    title: 'Classic Chocolate Cake',
    category: 'Cakes',
    imageUrl: '/images/chocolate-cake.jpg',
    altText: 'Three-layer chocolate cake with rich chocolate ganache frosting and chocolate shavings on top'
  },
  {
    id: 2,
    title: 'Vanilla Bean Cheesecake',
    category: 'Cheesecakes',
    imageUrl: '/images/vanilla-cheesecake.jpg',
    altText: 'Creamy New York style cheesecake with vanilla bean specks and fresh berry compote'
  },
  {
    id: 3,
    title: 'Salted Caramel Brownies',
    category: 'Brownies',
    imageUrl: '/images/salted-caramel-brownies.jpg',
    altText: 'Fudgy chocolate brownies swirled with salted caramel and sprinkled with sea salt'
  },
  {
    id: 4,
    title: 'Lemon Meringue Pie',
    category: 'Pies',
    imageUrl: '/images/lemon-meringue.jpg',
    altText: 'Golden pie crust filled with tangy lemon curd and topped with fluffy toasted meringue peaks'
  },
  {
    id: 5,
    title: 'Red Velvet Cupcakes',
    category: 'Cupcakes',
    imageUrl: '/images/red-velvet-cupcakes.jpg',
    altText: 'Deep red velvet cupcakes topped with swirled cream cheese frosting and red velvet crumbs'
  },
  {
    id: 6,
    title: 'Apple Cinnamon Muffins',
    category: 'Muffins',
    imageUrl: '/images/apple-muffins.jpg',
    altText: 'Golden brown muffins studded with fresh apple chunks and topped with cinnamon streusel'
  },
  {
    id: 7,
    title: 'Double Chocolate Cookies',
    category: 'Cookies',
    imageUrl: '/images/chocolate-cookies.jpg',
    altText: 'Rich dark chocolate cookies with melted chocolate chunks throughout'
  },
  {
    id: 8,
    title: 'Strawberry Shortcake',
    category: 'Cakes',
    imageUrl: '/images/strawberry-shortcake.jpg',
    altText: 'Light vanilla sponge cake layered with fresh strawberries and whipped cream'
  },
  {
    id: 9,
    title: 'Blueberry Crumble Pie',
    category: 'Pies',
    imageUrl: '/images/blueberry-crumble-pie.jpg',
    altText: 'Fresh blueberry pie with a buttery crumble topping and flaky crust'
  },
  {
    id: 10,
    title: 'Tiramisu',
    category: 'Cakes',
    imageUrl: '/images/tiramisu.jpg',
    altText: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream'
  },
  {
    id: 11,
    title: 'Chocolate Chip Cookies',
    category: 'Cookies',
    imageUrl: '/images/choc-chip-cookies.jpg',
    altText: 'Golden brown cookies loaded with melted chocolate chips'
  },
  {
    id: 12,
    title: 'Raspberry Macarons',
    category: 'Cookies',
    imageUrl: '/images/macarons.jpg',
    altText: 'Pink French macarons filled with raspberry buttercream'
  },
  {
    id: 13,
    title: 'Apple Pie',
    category: 'Pies',
    imageUrl: '/images/apple-pie.jpg',
    altText: 'Classic apple pie with a lattice top crust and caramelized filling'
  },
  {
    id: 14,
    title: 'Dark Chocolate Truffles',
    category: 'Chocolates',
    imageUrl: '/images/dark-chocolate-truffles.jpg',
    altText: 'Rich dark chocolate truffles dusted with cocoa powder'
  },
  {
    id: 15,
    title: 'Chocolate Eclairs',
    category: 'Pastries',
    imageUrl: '/images/chocolate-eclairs.jpg',
    altText: 'Classic French eclairs filled with cream and topped with chocolate glaze'
  },
  {
    id: 16,
    title: 'Lemon Tart',
    category: 'Tarts',
    imageUrl: '/images/lemon-tart.jpg',
    altText: 'Classic French lemon tart with a buttery crust and zesty lemon curd filling'
  },
  {
    id: 17,
    title: 'Pecan Pie',
    category: 'Pies',
    imageUrl: '/images/pecan-pie.jpg',
    altText: 'Rich and gooey pecan pie with a flaky crust'
  },
  {
    id: 18,
    title: 'Raspberry Danish',
    category: 'Pastries',
    imageUrl: '/images/raspberry-danish.jpg',
    altText: 'Buttery Danish pastry filled with fresh raspberries and vanilla cream'
  },
  {
    id: 19,
    title: 'Almond Croissants',
    category: 'Pastries',
    imageUrl: '/images/almond-croissants.jpg',
    altText: 'Flaky, golden-brown croissants topped with sliced almonds and dusted with powdered sugar'
  },
  {
    id: 20,
    title: 'Creme Brulee',
    category: 'Custards',
    imageUrl: '/images/creme-brulee.jpg',
    altText: 'Classic French vanilla custard with a crackling caramelized sugar top'
  },
  {
    id: 21,
    title: 'Black Forest Cake',
    category: 'Cakes',
    imageUrl: '/images/black-forest.jpg',
    altText: 'Chocolate cake layers with cherry filling and whipped cream'
  }
];

export async function GET() {
  try {
    return NextResponse.json(desserts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch desserts' },
      { status: 500 }
    );
  }
}
