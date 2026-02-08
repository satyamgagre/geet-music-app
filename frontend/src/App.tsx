import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "./components/ui/button";

function App() {
  return (
    <header style={{ display: "flex", gap: "12px", padding: "16px" }}>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign in</Button>
        </SignInButton>

        <SignUpButton mode="modal">
          <Button>Sign up</Button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </header>
  );
}

export default App;
