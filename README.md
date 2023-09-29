# CRYPTO-TRADE

&nbsp; &nbsp; &nbsp; **Crypto Trade** is a **Backend Multipage Application App** where visitors can **view** the **Home page** and **All Crypto** catalog with available offers. The **application** provide **Guest** (not logged in) users with the functionality to **Login**, **Register**, and **view** the **Home page**, **All Crypto page**, and the **Details page**. They can also **register** with an **email**, **username**, and **password**, allowing them to **create** their offers for crypto trade and **buy crypto** (if the **current user** is **not** the **owner of the crypto** offer). Authors can edit or delete posts at any time. All users should be able **to see details**. Clicking the **Details button** on the crypto card should display the details page. If the currently registered user **is the Creator** of the crypto offer, the **Edit** and **Delete** buttons should be displayed. Otherwise, they should **not be available**. If the currently logged-in user is not the owner (a user who is not the creator of this crypto offer) and has not bought that crypto, he should see a **buy** button. If the currently logged in user **is not the Owner** and has **already bought crypto**, he **should not be able to buy more**. A **Search for Crypto** is also implemented. All **crypto offers** are shown when the user opens the **search page**.The **search button** filter all matches by **name and payment method (case insensitive)**.

&nbsp; &nbsp; &nbsp;All **Validations** of the User Input are implemented **Locally in the Controllers**. I use both **The System Errors** and the **Mongoose Errors** in my App. They are catched and rendered **Locally at the Coresponding Controller**.



### Used technologies

- Express
- Handlebars
- MongoDB
- Bcrypt, Jsonwebtoken, Cookie-Parser
- HTML & CSS

### Before you start the Application you need to install MongoDB.

### After successful installation of MongoDB you can start the Application.

To use Crypto-TRADE App locally, follow these steps:

1.  Clone the repository:

- `git clone https://github.com/kalinsky-dev/CRYPTO-TRADE`

2.  Navigate to the project directory and run npm install:

- `cd CRYPTO-TRADE & npm i`

3.  Start the application with npm start.

- `npm start`

That's it! You can now start Cubicle Application on your local machine at http://localhost:3000/.
