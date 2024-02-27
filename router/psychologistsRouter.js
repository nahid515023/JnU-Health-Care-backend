const Router = require("express").Router();
const upload = require("../middleware/multerPicture");
const { getDataAll, signup, signin,addEmail } = require("../controller/psychologist");
const { profileData, updateProfile, changePassword, changeProfilePicture, deleteUser } = require("../controller/psychologistProfile");
const { forgotPass, checkPin,cngPassword } = require("../controller/forgotPassword2");


Router.get("/", getDataAll);
Router.get("/:id", profileData);
Router.post("/signup", signup);
Router.post("/signin", signin);
Router.post('/updatePassword/:id', changePassword);
Router.post('/updateProfile/:id', updateProfile);
Router.post("/changeProfilePicture/:id", upload.single("profilePicture"), changeProfilePicture);
Router.get('/deleteAccount/:id', deleteUser);
Router.post("/forgot-password", forgotPass);
Router.post("/send-code",checkPin);
Router.post("/change-password",cngPassword);

//supper admin
Router.post("/addEmail/:UserId", addEmail);





module.exports = Router;