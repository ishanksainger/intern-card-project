// import files
import "./App.css";
import { Card, CardContent } from "./components/ui/Card";
import CardDetails from "./components/ui/CardDetails";
import InnerCard from "./components/ui/InnerCard";
import MenuCard from "./components/ui/MenuCard";

// main app function
function App() {
  return (
    // parent div
    <div className="min-w-full min-h-screen flex justify-center items-center">
      {/* shadcn Card component */}
      <Card>
      {/* shadcn cardcontent with 2 different components*/}
        <CardContent>
        {/* innercard Component for image*/}
          <InnerCard />
          {/* CardDetails Component for the text*/}
          <CardDetails />
          {/* MenuCard Component for menu icon*/}
          <MenuCard/>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
