<p align="center">
  <a href="https://github.com/Kha-Tran22/ANM"><img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/title.png" alt="HCMUT" width="700" /></a>
</p>

#

**Single Sign-On (SSO)** is an authentication mechanism that allows users to access multiple applications or services with a single login. With SSO, users don't need to remember and input different login credentials for each system. Instead, they use a single set of credentials. In this project, we will implement the `OpenID Connect` authentication method.

# Table of Contents
- [Setup Visual Studio Code Environment](#setup-vs-code-environment)
- [Install Node.js](#install-nodejs)
- [Install MySQL Workbench](#install-mysql-workbench)
- [Guide to Connecting to MySQL](#guide-to-connecting-to-mysql)

## Setup Visual Studio Code Environment <a id="setup-vs-code-environment"></a>
Visit the [Visual Studio Code website](https://code.visualstudio.com/) to download and install the editor.

## Install Node.js <a id="install-nodejs"></a>
Visit the [Node.js website](https://nodejs.org/en/) to download and install the required version.

## Install MySQL Workbench <a id="install-mysql-workbench"></a>
Visit the [MySQL Community Server](https://dev.mysql.com/downloads/windows/installer/8.0.html) page to download and install MySQL Workbench.

## Guide to Connecting to MySQL <a id="guide-to-connecting-to-mysql"></a>

### 1. Create the MySQL Database
#### Import data from the `database.sql` file

**Step 1**: Create a new schema and name it `sso_user`.  
(*Note: If you use a different name, you must adjust the code in the `SSO_Backend` folder accordingly.*)

**Step 2**: Import data from the SQL file.
- Navigate to **Server** -> **Data Import**.
- Select **Import from Self-Contained File**.
- Choose the path to the `database.sql` file located in the `src` folder.
- In **Default Target Schema**, select `sso_user`.
<img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/sso_db1.png" width="500" />

**Step 3**: Click the **Start Import** button.

Once the schema is refreshed, if the structure matches the provided file, the import was successful.

<img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/sso_db2.png" width="200" />

### 2. Open the Source Code
Open the `SSO_Frontend` and `SSO_Backend` program folders in two separate windows.
<img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/sso_db3.png" width="500" />

### 3. Configure the Database Connection
First, verify the connection details in the `SSO_Backend` folder to ensure they are correct for connecting to MySQL.  
In `SSO_Backend`, open the `.env` file and `config.json` file (located in the `config` folder) and adjust the information as necessary.

<img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/sso_db4.png" width="500" />
- Check and update the following details:
  - `DB_USERNAME`: MySQL account username (e.g., `root`).
<img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/sso_db5.png" width="500" />
  - `DB_PASSWORD`: MySQL password (e.g., `123456`).
  - `DB_NAME`: The schema name created in MySQL (default: `sso_user`).  

Make the necessary changes. In the `config.json` file, only modify the **development** section.

### 4. Run the Application
Open a terminal and run the `npm start` command in both folders:

<img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/sso_db6.png" width="500" />
<img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/sso_db7.png" width="500" />

- **SSO_Frontend**: After running, the browser will automatically open at the URL [http://localhost:3000/](http://localhost:3000/).
- Access the URL [http://localhost:8080/user](http://localhost:8080/user) to verify the MySQL connection.  
If the page loads correctly, the MySQL connection is successful. Otherwise, review the steps to troubleshoot any issues.

**Note**: If the `npm start` command fails, delete the `node_modules` folder and the `package-lock.json` file. Then use the `npm install` command to reinstall the dependencies.

<img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/sso_db8.png" width="500" />
