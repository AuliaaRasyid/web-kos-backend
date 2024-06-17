
# Web-Kos-Backend



## Authors

- [@Muhammad Aulia Rasyid](https://www.github.com/auliaarasyid)


## Tech Stack

**Server:** 
- Node -> untuk menjalankan JavaScript di sisi server.
- Express -> framework aplikasi web Node.js yang minimal dan fleksibel yang menyediakan berbagai fitur robust untuk aplikasi web dan mobile.
- Mongoodb/Mongoose -> database NoSQL yang menggunakan dokumen mirip JSON dengan skema opsional. Mongoose adalah library Object Data Modeling (ODM) untuk MongoDB dan Node.js, yang menyediakan abstraksi tingkat lebih tinggi untuk pemodelan data.
- Midtrans ->  penyedia layanan gateway pembayaran di Indonesia. Ini memungkinkan bisnis online untuk menerima pembayaran melalui berbagai metode pembayaran termasuk kartu kredit, transfer bank, dan e-wallet.
- Cors -> itur keamanan yang diimplementasikan di browser untuk membatasi skrip yang berjalan di satu halaman agar tidak mengakses sumber daya di halaman lain.
- Bycrypt -> Bcrypt adalah fungsi hash password yang dirancang untuk lambat dan tahan terhadap serangan brute-force. Ini umum digunakan untuk menyimpan kata sandi dengan aman di database.

**Client:**
- [Web-Kos-Frontend](https://github.com/AuliaaRasyid/Web-Kos-Frontend)
## Run Locally

Clone the project

```bash
git clone https://github.com/AuliaaRasyid/web-kos-backend.git
```

Go to the project directory

```bash
cd web-kos-backend
```

## Installation

Install my-project with npm

```bash
npm install or npm i
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env by creating it in the main folder or you can rename the envExamples in the directory to `.env`

**The environment variables:**
```bash
MONGO_URI= mongodb+srv://username:password@kosan.mrvbfkj.mongodb.net/kosan?retryWrites=true&w=majority&appName=kosan
JWT_SECRET = SECRET
PORT=5000
MIDTRANS_SERVER_KEY = Your Midtrants key
MIDTRANS_APP_URL= https://app.sandbox.midtrans.com
FRONT_END_URL = http://localhost:5173
```

**For MONGO_URI**

To create the MONGO_URI step by step:

1. Log in to MongoDB Atlas Dashboard:
    - Go to MongoDB Atlas.
    - Log in with your credentials.

2. Navigate to Clusters:
    - Once logged in, you'll land on the MongoDB Atlas dashboard.
    - Click on "Clusters" in the left-hand menu.

3. Select or Create a Cluster:
    - If you already have a cluster, click on it. If not, create a new cluster by clicking on the "Build a New Cluster" button.
    - Follow the steps to configure your cluster (choose cloud provider, region, cluster tier, etc.) and click "Create Cluster".

4. Database Access Setup:
    - In the left-hand menu, click on "Database Access" under the "Security" section.
    - Click on the "Add New Database User" button.
    - Enter a username and password for your MongoDB database user. Make sure to remember these credentials as they will be part of your MONGO_URI.

5. IP Whitelist Setup (if necessary):
    - In the left-hand menu, click on "Network Access" under the "Security" section.
    - Click on the "Add IP Address" button and add your current IP address to the IP Whitelist. This allows your application to connect to the MongoDB cluster.

6. Get the Connection String (MONGO_URI):
    - Click on "Clusters" in the left-hand menu to go back to the cluster dashboard.
    - Click on the "Connect" button for your cluster.
    - Choose "Connect your application".

    - Copy the connection string provided. It should look something like this:
  
    ```bash
    Copy code
    mongodb+srv://username:password@clustername.mongodb.net/database
    ```
    Replace:
    - username with the username you created.
    - password with the password you set for the user.
    - clustername with the name of your MongoDB cluster.
    - database with the name of your specific database (in your case, it's kosan).

7. Replace Your MongoDB URI  
    - This line:

      ![App Screenshot](https://i.imgur.com/rCGf0Jy.png)
    - Replace the placeholders (username, password, clustername, and database) in the connection string you copied with the actual values.
    - Add it to the `.env`


**For the MIDTRANS_SERVER_KEY:**

Go ahead and make a Midtrans Account in *[Midtrans Login](https://dashboard.midtrans.com/login)* 
Once you are Logged in and are in midtrans dashboard you dont need to continue the business registration, go straigth to 
`settings -> Acces Keys` you will find the  MIDTRANS_SERVER_KEY



## Runing Server
When everything is installed and imported now run the server
```bash
//For dev
npm run nodemon
```

```bash
//with nodejs
npm run start
```


## API Endpoints

### Login & Registration
1. Login
    - **Endpoints:** `/login`
    - **Method:** `post`
    - **Body :**
      ```json
      {
        "username": "string",
        "password": "string"
      }
      ```

2. Register
    - **Endpoints:** `/register`
    - **Method:** `post`
    - **Body :**
      ```json
      {
        "no_kamar": "Number"
        "username": "string"
        "name": "string"
        "no_telepon": "string"
        "tanggal_masuk": "date"
        "password": "string"
        "role": "string"
      }
      ```

### Admin
1. Create & Register user
    - **Endpoints:** `/users`
    - **Method:** `post`
    - **Body :**
      ```json
      { 
        "no_kamar": "Number"
        "username": "string"
        "name": "string"
        "no_telepon": "string"
        "tanggal_masuk": "date"
        "password": "string"
        "role": "string"
      }
      ```

2. Get All user
    - **Endpoints:** `/users`
    - **Method:** `get`

3. Get user by id
    - **Endpoints:** `/users/:id`
    - **Method:** `get`

4. Update user by id
    - **Endpoints:** `/users/:id`
    - **Method:** `PUT`
    - **Body :** `Partial user object (fields to be updated).`

5. Delete user by id
    - **Endpoints:** `/users/:id`
    - **Method:** `DELETE`

6. Get All complaints
    - **Endpoints:** `/complaints`
    - **Method:** `get`

7. Get complaints by id
    - **Endpoints:** `/users/:userId/complaints/:complaintId`
    - **Method:** `get`

8. Delete complaints by complaintId
    - **Endpoints:** `/users/:userId/complaints/:complaintId`
    - **Method:** `DELETE`

9. Get Room Status
    - **Endpoints:** `/status`
    - **Method:** `GET`

10. Get Room Status
    - **Endpoints:** `/status`
    - **Method:** `PUT`
    - **Body :**
      ```json
      {
        "availability": "string"
      }
      ```

### User
1. Get user by id
    - **Endpoints:** `/users/:id`
    - **Method:** `GET`

2. Create a Complaint for a User
    - **Endpoints:** `/users/:id/keluhan`
    - **Method:** `POST`
    - **Body :**
      ```json
      {
        "keluhan": "string"
      }
      ```

3. Update a User's Name
    - **Endpoints:** `/users/:id/change-name`
    - **Method:** `PUT`
    - **Body :**
      ```json
      {
        "name": "string"
      }
      ```

4. Update a User's Password
    - **Endpoints:** `/users/:id/change-password`
    - **Method:** `PUT`
    - **Body :**
      ```json
      {
        "oldPassword": "string",
        "newPassword": "string"
      }
      ```

### Payment
1. Create a Payment
    - **Endpoints:** `/payments/create-payment`
    - **Method:** `POST`
    - **Body :**
      ```json
      {
        "userId": "string"
        "duration": "number"
      }
      ```

2. Get Payment by Order ID
    - **Endpoints:** `/payments/:orderId`
    - **Method:** `GET`

3. Update Payment Status
    - **Endpoints:**`/payments/update-status`
    - **Method:** `PUT`
    - **Body :**
      ```json
      {
          "orderId": "string",
          "paymentStatus": "string" 
      }
      ```

4. Midtrans Transaction Notification
    - **Endpoints:**`/payments/notification`
    - **Method:** `POST`
    - **Body :** `Midtrans notification data`
