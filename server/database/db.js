import mongoose from "mongoose";
export const Connection = async(Username, Password) => {
  const URL = `mongodb+srv://user:vikesh123@user-authentication.hxzabzq.mongodb.net/`;
  try {
    await mongoose.connect(URL, {});
    console.log("database connected succesfully");
  } catch (error) {
    console.log("Error While connecting Database", error);
  }
};
export default Connection;
