import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import Home from "./pages/home";
import About from "./pages/about";
import Services1 from "./pages/Services1";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";
import QuoteModal from "./pages/Quote/page"

function Router() {
  return (
       <>
       <ScrollToTop/>
         <Navbar />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services1} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    <Route
  path="/quote" component={QuoteModal}/>


      <Route component={NotFound} />
    </Switch>
     <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
