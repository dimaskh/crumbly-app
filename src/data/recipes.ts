import { Dessert } from './types';

export const recipes: Dessert[] = [
  {
    id: 1,
    title: 'Classic Chocolate Cake',
    slug: 'classic-chocolate-cake',
    category: 'Cakes',
    description: 'A rich, moist three-layer chocolate cake with decadent chocolate ganache frosting. This classic dessert is perfect for any celebration or when you\'re craving something deeply chocolatey.',
    prepTime: '45 mins',
    cookTime: '30 mins',
    servings: 12,
    difficulty: 'Medium',
    imageUrl: '/images/chocolate-cake.jpg',
    altText: 'Three-layer chocolate cake with rich chocolate ganache frosting',
    ingredients: [
      '2½ cups all-purpose flour',
      '2 cups granulated sugar',
      '¾ cup unsweetened cocoa powder',
      '2 teaspoons baking soda',
      '1 teaspoon salt',
      '1 cup vegetable oil',
      '2 large eggs',
      '1 cup buttermilk',
      '2 teaspoons vanilla extract',
      '1 cup hot coffee'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease three 9-inch cake pans.',
      'Mix dry ingredients: flour, sugar, cocoa, baking soda, and salt.',
      'Add wet ingredients: oil, eggs, buttermilk, and vanilla. Mix well.',
      'Stir in hot coffee until combined.',
      'Pour batter evenly into prepared pans.',
      'Bake for 30-35 minutes.',
      'Cool completely before frosting.'
    ],
    tips: [
      'Room temperature ingredients work best',
      'Don\'t overmix the batter',
      'Use strong coffee for enhanced chocolate flavor'
    ]
  },
  {
    id: 2,
    title: 'Vanilla Bean Cheesecake',
    slug: 'vanilla-bean-cheesecake',
    category: 'Cheesecakes',
    description: 'A creamy, rich vanilla bean cheesecake with a buttery graham cracker crust and fresh berry compote. This classic dessert is elevated with real vanilla beans and a smooth, crack-free top.',
    prepTime: '45 mins',
    cookTime: '1 hour',
    servings: 12,
    difficulty: 'Medium',
    imageUrl: '/images/vanilla-cheesecake.jpg',
    altText: 'Vanilla bean cheesecake with graham cracker crust and berry compote',
    ingredients: [
      '2 cups graham cracker crumbs',
      '½ cup melted butter',
      '¼ cup granulated sugar',
      '32 oz cream cheese, softened',
      '1¼ cups granulated sugar',
      '4 large eggs',
      '⅓ cup heavy cream',
      '2 vanilla beans, scraped',
      '1 teaspoon vanilla extract'
    ],
    instructions: [
      'Preheat oven to 325°F. Wrap springform pan with foil.',
      'Mix graham crumbs, butter, and sugar. Press into pan.',
      'Beat cream cheese and sugar until smooth.',
      'Add eggs one at a time, then cream and vanilla.',
      'Pour into crust and bake in water bath for 1 hour.',
      'Cool in oven with door cracked, then chill overnight.'
    ],
    tips: [
      'Use room temperature ingredients',
      'Don\'t overmix after adding eggs',
      'Always use a water bath to prevent cracks'
    ]
  },
  {
    id: 3,
    title: 'Salted Caramel Brownies',
    slug: 'salted-caramel-brownies',
    category: 'Brownies',
    description: 'Fudgy chocolate brownies swirled with homemade salted caramel and sprinkled with flaky sea salt. These decadent treats combine rich chocolate with the perfect sweet-salty balance.',
    prepTime: '30 mins',
    cookTime: '35 mins',
    servings: 16,
    difficulty: 'Medium',
    imageUrl: '/images/salted-caramel-brownies.jpg',
    altText: 'Fudgy brownies with salted caramel and flaky sea salt',
    ingredients: [
      '2 cups dark chocolate chips',
      '1 cup unsalted butter',
      '1½ cups granulated sugar',
      '4 large eggs',
      '2 teaspoons vanilla extract',
      '1 cup all-purpose flour',
      '½ cup cocoa powder',
      '1 cup caramel sauce',
      'Flaky sea salt'
    ],
    instructions: [
      'Preheat oven to 350°F. Line 9x13 pan with parchment.',
      'Melt chocolate and butter together.',
      'Whisk in sugar, eggs, and vanilla.',
      'Fold in flour and cocoa powder.',
      'Pour into pan, swirl in caramel, sprinkle with salt.',
      'Bake 30-35 minutes until set but still fudgy.'
    ],
    tips: [
      'Use high-quality chocolate for best results',
      'Don\'t overbake - brownies should be fudgy',
      'Warm the caramel slightly for easier swirling'
    ]
  },
  {
    id: 4,
    title: 'Lemon Meringue Pie',
    slug: 'lemon-meringue-pie',
    category: 'Pies',
    description: 'A classic pie featuring a buttery crust filled with tangy lemon curd and topped with billowy toasted meringue. The perfect balance of sweet and tart flavors.',
    prepTime: '1 hour',
    cookTime: '45 mins',
    servings: 8,
    difficulty: 'Hard',
    imageUrl: '/images/lemon-meringue.jpg',
    altText: 'Lemon meringue pie with buttery crust and toasted meringue',
    ingredients: [
      '1 pre-baked pie crust',
      '6 large eggs, separated',
      '1½ cups granulated sugar',
      '⅓ cup cornstarch',
      '1½ cups water',
      '4 lemons, juiced and zested',
      '2 tablespoons butter',
      '¼ teaspoon cream of tartar'
    ],
    instructions: [
      'Make lemon curd: combine sugar, cornstarch, water, yolks, lemon.',
      'Cook until thickened, add butter, pour into crust.',
      'Beat egg whites and cream of tartar until foamy.',
      'Gradually add sugar, beat to stiff peaks.',
      'Top pie with meringue, sealing to edges.',
      'Bake at 350°F until golden, about 15 minutes.'
    ],
    tips: [
      'Use fresh lemons for best flavor',
      'Make sure curd is hot when adding meringue',
      'Cool completely before slicing'
    ]
  },
  {
    id: 5,
    title: 'Red Velvet Cupcakes',
    slug: 'red-velvet-cupcakes',
    category: 'Cupcakes',
    description: 'Moist red velvet cupcakes topped with swirled cream cheese frosting and red velvet crumbs. These classic Southern treats are perfect for any special occasion.',
    prepTime: '30 mins',
    cookTime: '20 mins',
    servings: 24,
    difficulty: 'Medium',
    imageUrl: '/images/red-velvet-cupcakes.jpg',
    altText: 'Red velvet cupcakes with cream cheese frosting and red velvet crumbs',
    ingredients: [
      '2½ cups all-purpose flour',
      '1½ cups sugar',
      '1 teaspoon cocoa powder',
      '1 teaspoon baking soda',
      '1 teaspoon salt',
      '2 eggs',
      '1½ cups vegetable oil',
      '1 cup buttermilk',
      '2 tablespoons red food coloring',
      '1 teaspoon vanilla extract',
      '1 teaspoon vinegar'
    ],
    instructions: [
      'Preheat oven to 350°F. Line cupcake pans.',
      'Mix dry ingredients in one bowl.',
      'Mix wet ingredients in another bowl.',
      'Combine wet and dry ingredients until just mixed.',
      'Fill cupcake liners ⅔ full.',
      'Bake 18-20 minutes. Cool before frosting.'
    ],
    tips: [
      'Use gel food coloring for intense color',
      'Don\'t overmix the batter',
      'Make sure ingredients are room temperature'
    ]
  },
  {
    id: 6,
    title: 'Apple Cinnamon Muffins',
    slug: 'apple-cinnamon-muffins',
    category: 'Muffins',
    description: 'Tender, spiced muffins studded with fresh apple chunks and topped with a buttery cinnamon streusel. Perfect for breakfast or as an afternoon treat.',
    prepTime: '25 mins',
    cookTime: '22 mins',
    servings: 12,
    difficulty: 'Easy',
    imageUrl: '/images/apple-muffins.jpg',
    altText: 'Apple cinnamon muffins with buttery streusel topping',
    ingredients: [
      '2 cups all-purpose flour',
      '1 cup granulated sugar',
      '2 teaspoons baking powder',
      '2 teaspoons ground cinnamon',
      '½ teaspoon salt',
      '2 large eggs',
      '1 cup milk',
      '¼ cup vegetable oil',
      '2 cups diced apples',
      '½ cup brown sugar',
      '¼ cup butter',
      '½ cup flour',
      '1 teaspoon cinnamon'
    ],
    instructions: [
      'Preheat oven to 375°F. Line muffin tin.',
      'Mix dry ingredients in large bowl.',
      'Whisk wet ingredients in separate bowl.',
      'Combine wet and dry ingredients, fold in apples.',
      'Make streusel: mix butter, sugar, flour, cinnamon.',
      'Fill muffin cups, top with streusel.',
      'Bake 20-22 minutes until golden.'
    ],
    tips: [
      'Use firm apples like Granny Smith or Honeycrisp',
      'Don\'t overmix the batter',
      'Cool in pan for 5 minutes before removing'
    ]
  },
  {
    id: 7,
    title: 'Double Chocolate Cookies',
    slug: 'double-chocolate-cookies',
    category: 'Cookies',
    description: 'Rich, fudgy chocolate cookies loaded with melted chocolate chunks. These decadent cookies have a brownie-like texture and intense chocolate flavor.',
    prepTime: '20 mins',
    cookTime: '12 mins',
    servings: 24,
    difficulty: 'Easy',
    imageUrl: '/images/chocolate-cookies.jpg',
    altText: 'Double chocolate cookies with melted chocolate chunks',
    ingredients: [
      '2¼ cups all-purpose flour',
      '½ cup cocoa powder',
      '1 teaspoon baking soda',
      '1 cup butter, softened',
      '¾ cup granulated sugar',
      '¾ cup packed brown sugar',
      '2 large eggs',
      '2 teaspoons vanilla extract',
      '2 cups semi-sweet chocolate chunks'
    ],
    instructions: [
      'Preheat oven to 350°F. Line baking sheets.',
      'Whisk flour, cocoa, and baking soda.',
      'Cream butter and sugars until light.',
      'Beat in eggs and vanilla.',
      'Mix in dry ingredients, then chocolate chunks.',
      'Drop by tablespoons onto sheets.',
      'Bake 10-12 minutes until set.'
    ],
    tips: [
      'Chill dough for thicker cookies',
      'Use room temperature ingredients',
      'Don\'t overbake - cookies will set as they cool'
    ]
  },
  {
    id: 8,
    title: 'Strawberry Shortcake',
    slug: 'strawberry-shortcake',
    category: 'Cakes',
    description: 'Light, fluffy vanilla sponge cake layered with fresh strawberries and whipped cream. A classic summer dessert that\'s both elegant and refreshing.',
    prepTime: '40 mins',
    cookTime: '25 mins',
    servings: 8,
    difficulty: 'Medium',
    imageUrl: '/images/strawberry-shortcake.jpg',
    altText: 'Strawberry shortcake with vanilla sponge cake and whipped cream',
    ingredients: [
      '2 cups all-purpose flour',
      '2 teaspoons baking powder',
      '¼ teaspoon salt',
      '1 cup butter, softened',
      '1½ cups granulated sugar',
      '4 large eggs',
      '2 teaspoons vanilla extract',
      '¾ cup milk',
      '4 cups fresh strawberries',
      '2 cups heavy cream',
      '¼ cup powdered sugar'
    ],
    instructions: [
      'Preheat oven to 350°F. Grease cake pans.',
      'Mix dry ingredients in bowl.',
      'Cream butter and sugar until fluffy.',
      'Add eggs one at a time, then vanilla.',
      'Alternate adding flour mix and milk.',
      'Bake 25 minutes, cool completely.',
      'Layer with whipped cream and strawberries.'
    ],
    tips: [
      'Use room temperature ingredients',
      'Don\'t overmix the batter',
      'Assemble just before serving'
    ]
  },
  {
    id: 9,
    title: 'Blueberry Crumble Pie',
    slug: 'blueberry-crumble-pie',
    category: 'Pies',
    description: 'A perfect summer pie filled with juicy blueberries and topped with a buttery crumble. The combination of sweet berries and crispy topping is irresistible.',
    prepTime: '45 mins',
    cookTime: '50 mins',
    servings: 8,
    difficulty: 'Medium',
    imageUrl: '/images/blueberry-crumble-pie.jpg',
    altText: 'Blueberry crumble pie with buttery crust and crispy topping',
    ingredients: [
      '1 pie crust',
      '6 cups fresh blueberries',
      '¾ cup granulated sugar',
      '¼ cup cornstarch',
      '1 lemon, zested and juiced',
      '¼ teaspoon salt',
      '1 cup all-purpose flour',
      '½ cup brown sugar',
      '½ cup butter, cold',
      '½ cup rolled oats'
    ],
    instructions: [
      'Preheat oven to 375°F.',
      'Mix berries, sugar, cornstarch, lemon, salt.',
      'Pour into pie crust.',
      'Make crumble: mix flour, sugar, butter, oats.',
      'Top pie with crumble mixture.',
      'Bake 45-50 minutes until bubbly.'
    ],
    tips: [
      'Use fresh or frozen berries',
      'Place pie on baking sheet to catch drips',
      'Cool completely before slicing'
    ]
  },
  {
    id: 10,
    title: 'Tiramisu',
    slug: 'tiramisu',
    category: 'Cakes',
    description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and creamy mascarpone filling. Dusted with cocoa powder for an elegant finish.',
    prepTime: '30 mins',
    cookTime: '0 mins',
    servings: 12,
    difficulty: 'Medium',
    imageUrl: '/images/tiramisu.jpg',
    altText: 'Tiramisu with coffee-soaked ladyfingers and mascarpone filling',
    ingredients: [
      '6 egg yolks',
      '1 cup granulated sugar',
      '1¼ cups mascarpone cheese',
      '1¾ cups heavy whipping cream',
      '2 packages ladyfinger cookies',
      '1 cup strong coffee, cooled',
      '2 tablespoons rum (optional)',
      'Cocoa powder for dusting'
    ],
    instructions: [
      'Beat egg yolks and sugar until pale.',
      'Fold in mascarpone until smooth.',
      'Whip cream to stiff peaks, fold into mixture.',
      'Dip ladyfingers in coffee mixture.',
      'Layer cookies and cream mixture.',
      'Refrigerate 4 hours or overnight.',
      'Dust with cocoa before serving.'
    ],
    tips: [
      'Use room temperature mascarpone',
      'Don\'t oversoak the ladyfingers',
      'Chill at least 4 hours'
    ]
  },
  {
    id: 11,
    title: 'French Croissants',
    slug: 'french-croissants',
    category: 'Pastries',
    description: 'Flaky, buttery French croissants with perfectly laminated layers. These classic pastries are crispy on the outside and tender inside, perfect for breakfast or brunch.',
    prepTime: '3 hours',
    cookTime: '20 mins',
    servings: 12,
    difficulty: 'Hard',
    imageUrl: '/images/croissants.jpg',
    altText: 'French croissants with flaky, buttery layers',
    ingredients: [
      '4 cups all-purpose flour',
      '1⅓ cups cold water',
      '⅓ cup sugar',
      '3 tablespoons butter, softened',
      '1 tablespoon active dry yeast',
      '2 teaspoons salt',
      '2 cups cold unsalted butter (for laminating)',
      '1 egg (for egg wash)'
    ],
    instructions: [
      'Mix flour, water, sugar, 3 tbsp butter, yeast, and salt. Knead until smooth.',
      'Chill dough for 1 hour.',
      'Create butter block and encase in dough.',
      'Perform three letter folds, chilling between each.',
      'Roll and cut into triangles.',
      'Shape croissants and proof until doubled.',
      'Brush with egg wash and bake at 400°F for 18-20 minutes.'
    ],
    tips: [
      'Keep ingredients and dough cold',
      'Rest dough between folds',
      'Don\'t rush the proofing process'
    ]
  },
  {
    id: 12,
    title: 'Danish Pastry',
    slug: 'danish-pastry',
    category: 'Pastries',
    description: 'Sweet Danish pastries filled with vanilla custard and fresh fruits, topped with a sweet glaze. These delicate pastries are perfect with coffee or tea.',
    prepTime: '2 hours',
    cookTime: '18 mins',
    servings: 12,
    difficulty: 'Medium',
    imageUrl: '/images/danish-pastry.jpg',
    altText: 'Danish pastry with vanilla custard and fresh fruits',
    ingredients: [
      '3½ cups all-purpose flour',
      '1 cup milk, lukewarm',
      '¼ cup sugar',
      '2¼ teaspoons active dry yeast',
      '2 eggs',
      '1 teaspoon salt',
      '1½ cups cold butter (for laminating)',
      '1 cup vanilla custard',
      '2 cups mixed berries',
      '1 cup powdered sugar (for glaze)'
    ],
    instructions: [
      'Mix flour, milk, sugar, yeast, eggs, and salt.',
      'Chill dough for 30 minutes.',
      'Laminate with butter using letter folds.',
      'Cut and shape into desired forms.',
      'Fill with custard and fruits.',
      'Proof until puffy.',
      'Bake at 375°F for 15-18 minutes.',
      'Glaze while warm.'
    ],
    tips: [
      'Keep butter cold during lamination',
      'Don\'t overfill the pastries',
      'Best served fresh'
    ]
  },
  {
    id: 13,
    title: 'Classic Crème Brûlée',
    slug: 'creme-brulee',
    category: 'Custards',
    description: 'Silky smooth vanilla custard topped with a layer of caramelized sugar that cracks perfectly when tapped with a spoon. A classic French dessert that\'s both elegant and delicious.',
    prepTime: '20 mins',
    cookTime: '35 mins',
    servings: 6,
    difficulty: 'Medium',
    imageUrl: '/images/creme-brulee.jpg',
    altText: 'Crème brûlée with caramelized sugar and vanilla custard',
    ingredients: [
      '2 cups heavy cream',
      '1 vanilla bean, split and scraped',
      '¼ cup sugar, plus more for topping',
      '4 large egg yolks',
      'Pinch of salt'
    ],
    instructions: [
      'Heat cream with vanilla bean and seeds.',
      'Whisk egg yolks with sugar until pale.',
      'Slowly temper hot cream into yolks.',
      'Strain mixture and divide among ramekins.',
      'Bake in water bath at 300°F for 30-35 minutes.',
      'Chill for at least 2 hours.',
      'Top with sugar and torch until caramelized.'
    ],
    tips: [
      'Use high-fat cream for best results',
      'Don\'t overbake - custards should slightly wobble',
      'Chill thoroughly before caramelizing'
    ]
  },
  {
    id: 14,
    title: 'Bread Pudding',
    slug: 'bread-pudding',
    category: 'Custards',
    description: 'Warm, comforting bread pudding made with buttery brioche, rich custard, and hints of vanilla and cinnamon. Served with a decadent bourbon sauce.',
    prepTime: '30 mins',
    cookTime: '45 mins',
    servings: 8,
    difficulty: 'Easy',
    imageUrl: '/images/bread-pudding.jpg',
    altText: 'Bread pudding with buttery brioche and rich custard',
    ingredients: [
      '1 loaf brioche bread, cubed',
      '4 cups whole milk',
      '4 large eggs',
      '1 cup sugar',
      '2 teaspoons vanilla extract',
      '1 teaspoon ground cinnamon',
      '½ teaspoon nutmeg',
      '¼ teaspoon salt',
      '½ cup raisins (optional)'
    ],
    instructions: [
      'Toast bread cubes until lightly golden.',
      'Whisk milk, eggs, sugar, and spices.',
      'Pour custard over bread and let soak.',
      'Transfer to baking dish.',
      'Bake at 350°F for 45 minutes until set.',
      'Let cool slightly before serving.'
    ],
    tips: [
      'Use stale bread for better absorption',
      'Don\'t skip the soaking time',
      'Serve warm for best taste'
    ]
  },
  {
    id: 15,
    title: 'Dark Chocolate Truffles',
    slug: 'chocolate-truffles',
    category: 'Chocolates',
    description: 'Smooth, rich dark chocolate truffles with a velvety ganache center, dusted with cocoa powder. These elegant confections are perfect for gifting or special occasions.',
    prepTime: '30 mins',
    cookTime: '0 mins',
    servings: 24,
    difficulty: 'Medium',
    imageUrl: '/images/dark-chocolate-truffles.jpg',
    altText: 'Dark chocolate truffles with velvety ganache center',
    ingredients: [
      '12 oz high-quality dark chocolate',
      '⅔ cup heavy cream',
      '2 tablespoons butter',
      '1 teaspoon vanilla extract',
      'Cocoa powder for coating',
      'Sea salt (optional)'
    ],
    instructions: [
      'Chop chocolate finely.',
      'Heat cream until simmering.',
      'Pour over chocolate and let sit.',
      'Stir until smooth, add butter and vanilla.',
      'Chill until firm.',
      'Roll into balls and coat in cocoa.'
    ],
    tips: [
      'Use high-quality chocolate',
      'Chill mixture thoroughly',
      'Use gloves when rolling'
    ]
  },
  {
    id: 16,
    title: 'Chocolate Bark',
    slug: 'chocolate-bark',
    category: 'Chocolates',
    description: 'Artisanal chocolate bark loaded with dried fruits, nuts, and a sprinkle of sea salt. This easy-to-make treat combines different chocolate varieties for a stunning marbled effect.',
    prepTime: '20 mins',
    cookTime: '0 mins',
    servings: 12,
    difficulty: 'Easy',
    imageUrl: '/images/chocolate-bark.jpg',
    altText: 'Chocolate bark with dried fruits, nuts, and sea salt',
    ingredients: [
      '12 oz dark chocolate',
      '8 oz white chocolate',
      '1 cup mixed nuts',
      '½ cup dried cranberries',
      '¼ cup pistachios',
      'Flaky sea salt',
      'Edible gold leaf (optional)'
    ],
    instructions: [
      'Temper dark and white chocolate separately.',
      'Pour dark chocolate on lined baking sheet.',
      'Swirl in white chocolate.',
      'Top with nuts, fruits, and salt.',
      'Let set completely.',
      'Break into pieces.'
    ],
    tips: [
      'Properly temper chocolate for snap',
      'Work quickly before chocolate sets',
      'Store in cool place'
    ]
  },
  {
    id: 17,
    title: 'Chocolate-Covered Strawberries',
    slug: 'chocolate-covered-strawberries',
    category: 'Chocolates',
    description: 'Fresh, juicy strawberries dipped in premium chocolate and decorated with white chocolate drizzle and chopped nuts. A romantic and elegant dessert perfect for special occasions.',
    prepTime: '30 mins',
    cookTime: '0 mins',
    servings: 24,
    difficulty: 'Easy',
    imageUrl: '/images/chocolate-strawberries.jpg',
    altText: 'Chocolate-covered strawberries with white chocolate drizzle and chopped nuts',
    ingredients: [
      '24 large fresh strawberries',
      '12 oz dark chocolate',
      '4 oz white chocolate',
      '½ cup chopped nuts (optional)',
      'Colored sprinkles (optional)'
    ],
    instructions: [
      'Wash and dry strawberries thoroughly.',
      'Melt dark chocolate in double boiler.',
      'Dip strawberries in chocolate.',
      'Add toppings while chocolate is wet.',
      'Drizzle with melted white chocolate.',
      'Let set on parchment paper.'
    ],
    tips: [
      'Use room temperature strawberries',
      'Ensure berries are completely dry',
      'Store in cool place'
    ]
  }
];
