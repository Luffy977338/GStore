import SortBattleRoyale from "./pages/sort-battle-royale/SortBattleRoyale";
import SortSandbox from "./pages/sort-sandbox/SortSandbox";
import Games from "./components/games/Games";
import { IRoute } from "./types/route.types";
import SortActionAdventure from "./pages/sort-action-adventure/SortActionAdventure";
import SortActionRpg from "./pages/sort-action-rpg/SortActionRpg";
import SortShooter from "./pages/sort-shooter/SortShooter";
import SortMoba from "./pages/sort-moba/SortMoba";
import FinallyBasket from "./components/finally-basket/FinallyBasket";

const homeURL = "/home/_";

export const routes: IRoute[] = [
   { path: `${homeURL}all`, component: Games },
   { path: `${homeURL}sandbox`, component: SortSandbox },
   { path: `${homeURL}action-adventure`, component: SortActionAdventure },
   { path: `${homeURL}battle-royale`, component: SortBattleRoyale },
   { path: `${homeURL}action-rpg`, component: SortActionRpg },
   { path: `${homeURL}shooter`, component: SortShooter },
   { path: `${homeURL}moba`, component: SortMoba },
   { path: "/basket", component: FinallyBasket },
];
