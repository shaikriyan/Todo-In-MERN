const registerUser = async (req, resp) => {
  // we will need to ensure that the username doesn't exist in our DB.
  // add the user into the DB and
  console.log("req body : ", req.body);

  resp.status(200).json({
    success : true,
    message : "registered successfully."
  })
};

const loginUser = async () => {
  // credential checks will be done in the auth middle wares,
  // we will just create the token and send username to user (Hi Hari, This is overall progress..)
};

module.exports = { registerUser, loginUser };
