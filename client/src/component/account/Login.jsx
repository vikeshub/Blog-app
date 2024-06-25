import { useState } from "react";
import { Box, TextField, styled, Button, Typography } from "@mui/material";
import { API } from "../../service/api";


const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0 0 0/20%);
`;
const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;
const signupIntialValues={
  name:'',
  username:'',
  password:''
}
const Login = () => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
  const [account, toggleAccount] = useState("login");
  const [signup,setSignup]=useState(signupIntialValues);
  const [error,setError]=useState('');


  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount('signup');
  };

  const onInputchange=(e)=>{
    setSignup({ ...signup,[e.target.name]:e.target.value});
  }


  const signupUser = async () => {
    try {
      let response = await API.userSignup(signup);
      if (response.isSuccess) {
        setError('');
        setSignup(signupIntialValues);
        toggleAccount('login');
      } else {
        setError(response.msg.message || 'Something went wrong! Please try again later.');
      }
    } catch (error) {
      setError(error.message || 'Something went wrong! Please try again later.');
    }
   
  };


  return(

  

  <Component>
    <Box>
      <Image src={imageURL} alt="login" />
      {account === "login" ? (
        <Wrapper>
          <TextField variant="standard" label="Enter Username" />
          <TextField variant="standard" label="Enter Password" />

          {error && <Error>{error}</Error>}

          <LoginButton variant="contained">Login</LoginButton>
          <Text style={{ textAlign: "center" }}>OR</Text>
          <SignupButton onClick={() => toggleSignup()}>
            Create an Account
          </SignupButton>
        </Wrapper>
      ) : (
        <Wrapper>
          <TextField variant="standard" onChange={(e)=>onInputchange(e)} name='name' label="Enter name" />
          <TextField variant="standard" onChange={(e)=>onInputchange(e)} name='username' label="Enter Username" />
          <TextField variant="standard" onChange={(e)=>onInputchange(e)} name='password' label="Enter Password" />


          {error && <Error>{error}</Error>}
          <SignupButton onClick={()=>signupUser()}>Signup</SignupButton>
          <Text style={{ textAlign: "center" }}>OR</Text>
          <LoginButton variant="contained" onClick={() => toggleSignup()}>
            Already have an Account
          </LoginButton>
        </Wrapper>
      )}
    </Box>
  </Component>
  )
};

export default Login;
