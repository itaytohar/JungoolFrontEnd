import { routes } from "./routes";
import { Routes, Route } from "react-router-dom";
import { CustomerContext } from "./CustomerContext";
import { useMemo, useState } from "react";

const App: React.FC = () => {
  const [customer, setCustomer] = useState<string | null>(null);

  const providerVal = useMemo(
    () => ({ customer, setCustomer }),
    [customer, setCustomer]
  );

  return (
    <CustomerContext.Provider value={providerVal}>
      <Routes>
        {routes.map(({ path, element }, idx) => (
          <Route path={path} element={element} key={idx} />
        ))}
      </Routes>
    </CustomerContext.Provider>
  );
};

export default App;
