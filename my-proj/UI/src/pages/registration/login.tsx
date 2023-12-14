import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Background from "../../assets/images/liquid-cheese.png";
import { stringAvatar } from "../../utils";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [formData, setFormData] = useState<any>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${Background})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          borderRadius: 2,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          width: "25vw",
        }}
      >
        <Avatar
          {...stringAvatar(formData.email.toUpperCase())}
          sx={{ width: 56, height: 56, mb: 1 }}
        />
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: "36px", fontWeight: "600" }}
        >
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          margin="normal"
          autoComplete="email"
          sx={{ width: "80%" }}
          required
        />
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password || ""}
          onChange={handleChange}
          margin="normal"
          autoComplete="current-password"
          sx={{ width: "80%" }}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "18vw",
            marginTop: "5px",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: "10px" }}
            size="large"
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: "10px" }}
            size="large"
            onClick={() => navigate("/signUp")}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
