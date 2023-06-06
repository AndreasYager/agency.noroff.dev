/**
 *
 * This function is creating the content inside the header tag on each page
 *
 * @returns base header element
 *
 *
 */

export const header = () => {
  const headerElement = document.querySelector('header');
  headerElement.classList.add('bg-theme-dark');

  return (headerElement.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-dark w-100 mb-5">
    <div class="container">
      <a class="navbar-brand" href="/index.html">
      <div class="d-flex gap-2 m-2">
          <img src="/src/assets/icons/noroff-logo.svg" class="Logo-noroff" width="60" height="70" />
          <div class="d-flex flex-column">
            <h3><span class="company_name text-white">Noroff</span></h3>
            <h6><span class="company_branch text-white">Job Agency</span></h6>
          </div>
        </div>
        </a>
      <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" class="navbar-toggler dropdown" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon rounded-1 border-0 dropdown-toggle" id="navbarDropdown" role="button" data-bs-target="dropdown" style="background-color: white;"></span>
      </button>
      <div class="collapse navbar-collapse m-2" id="navbarNav">
      </div>
      </div>
 </nav>`);
};

// For testing states
const stateValue = 'null';
localStorage.setItem('Role', stateValue);
let pageTitle = document.querySelector('title');
pageTitle.innerText = 'Standard';

/**
 *
 * This function is adding the navigation to the header element based on the state of thus user.
 * If the user is Admin, user og not logged in, it will display different navigation options.
 *
 * If the user is logged in the navigation will change to have a sign out button
 *
 * @returns navigation option based on the user's status.
 *
 */
export const checkState = () => {
  const role = localStorage.getItem('Role');
  const navBarNav = document.getElementById('navbarNav');
  if (role == 'user') {
    return (navBarNav.innerHTML = `<ul class="navbar-nav d-flex align-items-center gap-2">
    <li class="nav-item">
      <a class="btn btn-theme-secondary nav-link text-white active border-0 px-3" id="home" href="/index.html">Home</a>
    </li>
    <li class="nav-item">
      <a class=" btn btn-theme-secondary nav-link text-white px-3" href="/pages/listings/index.html">Listings</a>
    </li>
    <li class="nav-item">
      <a class="btn btn-theme-secondary nav-link text-white bg-dark border-white rounded-0 px-3" aria-current="page" href="/pages/user/index.html">Profile</a>
    </li>
    <li class="nav-item">
      <a class="btn btn-theme-secondary text-white px-3" style="background-color: #08F3B0; href="#" id="signOut">Log out</a>
    </li>
  </ul>`);
  }

  if (role == 'admin') {
    return (navBarNav.innerHTML = `<ul class="navbar-nav d-flex align-items-center gap-2">
    <li class="nav-item">
      <a class="btn btn-theme-secondary nav-link text-white active border-0 px-3" id="home" href="/index.html">Home</a>
    </li>
    <li class="nav-item">
      <a class="btn btn-theme-secondary nav-link text-white px-3" aria-current="page" href="#">Profile</a>
    </li>
    <li class="nav-item">
    <a class="btn btn-theme-secondary nav-link text-white bg-dark border-white rounded-0 px-3" href="/pages/listings/index.html">Listings</a>
    </li>
    <li class="nav-item">
    <a class=""btn btn-theme-secondary nav-link text-black rounded-0 px-3" style="background-color: #08F3B0;" href="#" id="logOutUser">Log out</a>
    </li>
  </ul>`);
  }

  if (role == 'null') {
    return (navBarNav.innerHTML = `
    <ul class=" d-flex navbar-nav d-flex align-items-center gap-4">
    <li class="nav-item">
      <a class="btn btn-theme-secondary nav-link text-white active border-0 px-3" id="home" href="/index.html">Home</a>
    </li>
    <li class="nav-item">
    <a class="btn btn-theme-secondary nav-link text-white border-0 px-3" href="/pages/listings/index.html">Listings</a>
    </li>
    <li class="nav-item">
      <a class="btn btn-theme-secondary nav-link text-white bg-dark border-white rounded-0 px-3" href="/pages/auth/login/index.html" id="signInUser">Log in</a>
    </li>
    <li class="nav-item">
      <a class="btn btn-theme-secondary nav-link text-black rounded-0 px-3" style="background-color: #08F3B0;" id="registerUser" href="/pages/auth/register/applicant/index.html">Register</a>
    </li>
  </ul>`);
  }
};
