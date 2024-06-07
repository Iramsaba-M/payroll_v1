
// import Layout from './layouts/Layout';
import DynamicLayout from './layouts/DynamicLayout';
import { ComponentMappingProvider } from './context/ComponentMappingContext';
import { componentMapping } from './layouts/LayoutConfigFile';
import { ButtonStateProvider } from "./context/ButtonStateContext"

function App() {
  return (
    <div className="App">
      <ComponentMappingProvider value={componentMapping}>
        <ButtonStateProvider>
          <DynamicLayout />
        </ButtonStateProvider>
      </ComponentMappingProvider>
    </div>
  );
}

export default App;
