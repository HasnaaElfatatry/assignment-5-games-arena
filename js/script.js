// Researched for this section
const navLinks = document.querySelectorAll(".navbar .navbar-nav li a");

function activateNavbarLink(selectedLink) {
  navLinks.forEach((link) => {
    link.classList.remove("active");
    link.removeAttribute("aria-current");
  });

  selectedLink.classList.add("active");
  selectedLink.setAttribute("aria-current", "location");
}

const initialLink =
  [...navLinks].find((link) => {
    return link.getAttribute("href") === window.location.hash;
  }) || navLinks[0];

if (initialLink) {
  activateNavbarLink(initialLink);
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    activateNavbarLink(link);
  });
});
