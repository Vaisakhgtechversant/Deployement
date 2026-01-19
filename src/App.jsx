import AppRoutes from "./routes/AppRoutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="min-h-full flex flex-col overflow-hidden">
      <Navbar />
       <main className="flex-grow">
      <AppRoutes />
      </main>
      <Footer />

    </div>
  );
}

export default App;
