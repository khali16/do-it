import { Button, Box, TextField, Container } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submitHandler = () => {
    signInWithEmailAndPassword(getAuth(), email, password);
    console.log("udało sie");
  };

  return (
    <Container maxWidth="xs">
      <Box>
        <TextField
          variant="outlined"
          margin="normal"
          required
          label="Email Address"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Button onClick={submitHandler} fullWidth variant="contained">
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
