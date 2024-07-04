import { useEffect, useState } from "react";
import DynamicLayout from './layouts/DynamicLayout';
import { ComponentMappingProvider } from './context/ComponentMappingContext';
import { componentMapping } from './layouts/LayoutConfigFile';
import { ButtonStateProvider } from "./context/ButtonStateContext";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import Layout from './pages/Home page/Layout/Layout'
import { UserRoleProvider, useUserRole } from './context/UserRoleContext';

// function App() {
//   const { isAuthenticated, user } = useAuth0();

//   useEffect(() => {
//     const updateUserWithRole = async () => {
//       if (isAuthenticated && user) {
//         // Add a default role of "employee" to the user object
//         const userDataWithRole = { ...user, role: "employee" };

//         try {
//           // Send user data to json-server upon authentication
//           await axios.post('http://localhost:5000/users', userDataWithRole);
//           console.log('User data saved successfully');
//         } catch (error) {
//           console.error('Error saving user data', error);
//         }
//       }
//     };

//     updateUserWithRole();
//   }, [isAuthenticated, user]);


function App() {
  const { isAuthenticated, user, logout } = useAuth0();
  const [userData, setUserData] = useState(null);
  const { setRole } = useUserRole();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();
  }, []);

  if (!isAuthenticated) {
    return <Layout />;
  }

  if (!userData) {
    return (
      <div>
        Loading...
        <button
          className="bg-blue-500 text-white p-2 mb-4"
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
          Log Out
        </button>
      </div>
    );
  }

  const currentUser = userData.find(u => u.email === user.email);

  if (!currentUser) {
    return (
      <div>
        User not found
        <button
          className="bg-blue-500 text-white p-2 mb-4"
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
          Log Out
        </button>
      </div>
    );
  }

  setRole(currentUser.role);

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

export default function AppWrapper() {
  return (
    <UserRoleProvider>
      <App />
    </UserRoleProvider>
  );
}

// export default App;


{/* <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute role="admin">
              <DynamicLayout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee-dashboard"
          element={
            <ProtectedRoute role="employee">
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
      </Routes> */}