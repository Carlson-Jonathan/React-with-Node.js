import Calc from "./Pages/Calculator";
import Home from "./Pages/Home";
import People from "./Pages/People/People";
import Arrows from "./Pages/ArrowFunctions";
import Time from "./Pages/Counter";
import PrevValue from "./Pages/PrevValue";

function SetPage(page) {
  const pages = [Home, Calc, People, Arrows, Time, PrevValue];
  const pageToExport = pages[page];
  return pageToExport;
}

export default SetPage;

// Michael's API program for reference:
// https://codesandbox.io/s/pics-application-bp8ur
