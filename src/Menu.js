import Greek_yogurt from "./images/Greek_yogurt.mp4"
import Smoked_Salmon from "./images/Smoked_Salmon.mp4";
import Chicken_Caesar from "./images/Grilled_Chicken_Caesar_Salad.mp4";
import Mushroom_Risotto from "./images/Mushroom_Risotto.mp4";
import Truffle_Caprese_Panini from "./images/Truffle_Caprese_Panini.jpg";
import Truffle_Filet_Mignon from "./images/Truffle-Infused Filet Mignon.mp4";
import Avocado_Toast_Deluxe from "./images/Avocado_Toast_Deluxe.mp4"
import Smoked_Gouda_Carbonara from "./images/Smoked_Gouda_Carbonara.mp4"


const BreakfastItems = [
  {
    name: "Smoked Salmon Eggs Benedict",
    price: 24.99,
    src: Smoked_Salmon,
    facts: [
      "Poached eggs on an English muffin, topped with smoked salmon and hollandaise sauce.",
      "Approximately 500-600 calories per serving.",
    ],
  },
  {
    name: "Healthy Start",
    price: 18.99,
    src: Greek_yogurt,
    facts: [
      "Greek yogurt parfait with fresh berries and granola.",
      "Approximately 300-400 calories per serving.",
    ],
  },
  {
    name: "Avocado Toast Deluxe",
    price: 22.99,
    src: Avocado_Toast_Deluxe,
    facts: [
      "Whole grain toast topped with mashed avocado, poached egg, and cherry tomatoes.",
      "Approximately 350-450 calories per serving.",
    ],
  },
];

const LunchItems = [
  {
    name: "Grilled Chicken Caesar Salad",
    price: 22.19,
    src: Chicken_Caesar,
    facts: [
      "Romaine lettuce, grilled chicken breast, croutons, parmesan cheese, and Caesar dressing.",
      "Approximately 600-700 calories per serving.",
    ],
  },
  {
    name: "Truffle-infused Caprese Panini",
    price: 24.39,
    src: Truffle_Caprese_Panini,
    facts: [
      "Fresh mozzarella, heirloom tomatoes, basil pesto, and a drizzle of truffle oil on ciabatta bread.",
      "Approximately 500-600 calories per serving.",
    ],
  },
  {
    name: "Lobster and Avocado Wrap",
    price: 28.34,
    src: Greek_yogurt,
    facts: [
      "Chunks of succulent lobster, creamy avocado, mixed greens, and aioli wrapped in a spinach tortilla.",
      "Approximately 700-800 calories per serving.",
    ],
  },
];

const DinnerItems = [
  {
    name: "Truffle-Infused Filet Mignon",
    price: 54.69,
    src: Truffle_Filet_Mignon,
    facts: [
      "Prime beef tenderloin, truffle-infused mashed potatoes, and red wine reduction.",
      "Approximately 700-800 calories per serving.",
    ],
  },
  {
    name: "Truffle Mushroom Risotto",
    price: 43.69,
    src: Mushroom_Risotto,
    facts: [
      "Creamy risotto with a medley of mushrooms, truffle oil, and parmesan cheese.",
      "Approximately 500-600 calories per serving.",
    ],
  },
  {
    name: "Smoked Gouda Carbonara",
    price: 43.85,
    src: Smoked_Gouda_Carbonara,
    facts: [
      "Used smoked Gouda cheese, adding a deliciously smoky flavor to this silky, hearty and totally delicious pasta.",
    ],
  },
];
export {BreakfastItems, LunchItems, DinnerItems };