async function init() {

    //created ADMIN user
    const admin = await userModel.create({
        name: "Akash Kumar Singh",
        userId: "itsakash1806",
        email: "itsakash18.06@gmail.com",
        userType: "ADMIN",
        password: "Welcome"
    })
    console.log(admin)
}