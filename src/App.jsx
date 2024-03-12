
// import Layout from './layouts/Layout';
import DynamicLayout from './layouts/DynamicLayout';
import { ComponentMappingProvider } from './context/ComponentMappingContext';
import { componentMapping } from './layouts/LayoutConfigFile';
// import PDFexp from './PDFexp'

function App() {
  return (
    <div className="App">
      <ComponentMappingProvider value={componentMapping}>
        <DynamicLayout />
      </ComponentMappingProvider>
      {/* <Layout /> */}

      {/* <PDFexp /> */}
    </div>
  );
}

export default App;
