<p align="center">
 <img src="https://github.com/riteskmr20/The-Flavours/blob/main/demo/Logo.9832a24e.png" width="100" />
</p>
<p align="center">
    <h1 align="center">THE-FLAVOURS</h1>
</p>
<p align="center">
    <em>Best Food deliveries at your doorstep</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/riteskmr20/The-Flavours?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/riteskmr20/The-Flavours?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/riteskmr20/The-Flavours?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/riteskmr20/The-Flavours?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&logo=Jest&logoColor=white" alt="Jest">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running The-Flavours](#-running-The-Flavours)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)


---

##  Overview

[Live Demo](https://the-flavours.vercel.app/)


A React-based web application that replicates key functionalities of the Swiggy food delivery platform. The app leverages the Swiggy API to fetch and display restaurant data, manage user interactions, and handle cart functionality.

## Screenshots

### Main Page
<p align="center">
  <img src="https://github.com/riteskmr20/The-Flavours/blob/main/demo/top.png" alt="Main Page Screenshot" width="800" />
</p>

### All Restaurants
<p align="center">
  <img src="https://github.com/riteskmr20/The-Flavours/blob/main/demo/top.png" alt="All Restaurants Screenshot" width="800" />
</p>

### About Page
<p align="center">
  <img src="https://github.com/riteskmr20/The-Flavours/blob/main/demo/about.png" alt="About Page Screenshot" width="800" />
</p>

### Contact Page
<p align="center">
  <img src="https://github.com/riteskmr20/The-Flavours/blob/main/demo/contact%20us.png" alt="Contact Page Screenshot" width="800" />
</p>

### Menu Page
<p align="center">
  <img src="https://github.com/riteskmr20/The-Flavours/blob/main/demo/menu%20items.png" alt="Menu Page Screenshot" width="800" />
</p>

### Cart Page
<p align="center">
  <img src="https://github.com/riteskmr20/The-Flavours/blob/main/demo/cart.png" alt="Cart Page Screenshot" width="800" />
</p>



---

##  Features

Features
Home Page: Displays a list of restaurants with options to filter and search.
Restaurant Details: Provides detailed information about a selected restaurant, including ratings, cost, and cuisine.
Cart: Allows users to add items to their cart and view the cart contents.
Contact Page: Provides contact information and additional details.

---

##  Repository Structure

```sh
└── The-Flavours/
    ├── app.js
    ├── babel.config.js
    ├── index.html
    ├── jest.config.js
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── components
    │   │   ├── About.js
    │   │   ├── Body.js
    │   │   ├── Cart.js
    │   │   ├── Closedres.js
    │   │   ├── Contact.js
    │   │   ├── Error.js
    │   │   ├── Footer.js
    │   │   ├── Header.js
    │   │   ├── Img
    │   │   │   └── Logo.png
    │   │   ├── ItemsList.js
    │   │   ├── ResMenu.js
    │   │   ├── RestaurantCard.js
    │   │   ├── RestaurantCategory.js
    │   │   ├── Shimmer.js
    │   │   ├── User.js
    │   │   └── UserClass.js
    │   └── utils
    │       ├── UserContext.js
    │       ├── appStore.js
    │       ├── cartSlice.js
    │       ├── constants.js
    │       ├── mockData.js
    │       ├── useOnlineStatus.js
    │       └── useRestaurantMenu.js
    ├── style.css
    └── tailwind.config.js
```


---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`

###  Installation

1. Clone the The-Flavours repository:

```sh
git clone https://github.com/riteskmr20/The-Flavours
```

2. Change to the project directory:

```sh
cd The-Flavours
```

3. Install the dependencies:

```sh
npm install
```

###  Running The-Flavours

Use the following command to run The-Flavours:

```sh
node app.js
```

###  Tests

To execute tests, run:

```sh
npm test
```

---


---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/riteskmr20/The-Flavours/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/riteskmr20/The-Flavours/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/riteskmr20/The-Flavours/issues)**: Submit bugs found or log feature requests for The-flavours.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/riteskmr20/The-Flavours
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

[**Return**](#-quick-links)

---
