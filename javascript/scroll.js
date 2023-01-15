export const scroll = () => {
  window.addEventListener("scroll", () => {
    const homeContent = document.querySelector(".home-content");
    const abountContent = document.querySelector(".about-content");
    const menus = document.querySelector(".menu-content");
    const events = document.querySelector(".events-content");
    const contact = document.querySelector(".contact-content");
    const rooms = document.querySelector(".rooms-content");

    const homeContentPosition = homeContent.getBoundingClientRect().top;
    const homePosition = window.innerHeight / 1;

    const abountContentPosition = abountContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1;

    const menusContentPosition = menus.getBoundingClientRect().top;
    const menusPosition = window.innerHeight / 1;

    const eventsContentPosition = events.getBoundingClientRect().top;
    const eventsPosition = window.innerHeight / 1;

    const contactContentPosition = contact.getBoundingClientRect().top;
    const contactPosition = window.innerHeight / 1;

    const roomsContentPosition = rooms.getBoundingClientRect().top;
    const roomsPosition = window.innerHeight / 1;

    if (homeContentPosition < homePosition) {
      homeContent.classList.add("active-home");
    } else {
      homeContent.classList.remove("active-home");
    }
    if (abountContentPosition < screenPosition) {
      abountContent.classList.add("active");
      homeContent.classList.remove("active-home");
    } else {
      abountContent.classList.remove("active");
    }
    if (menusContentPosition < menusPosition) {
      menus.classList.add("active-menus");
      homeContent.classList.remove("active-home");
      abountContent.classList.remove("active");
    } else {
      menus.classList.remove("active-menus");
    }
    if (eventsContentPosition < eventsPosition) {
      events.classList.add("active-events");
      menus.classList.remove("active-menus");
      homeContent.classList.remove("active-home");
      abountContent.classList.remove("active");
    } else {
      events.classList.remove("active-events");
    }
    if (contactContentPosition < contactPosition) {
      contact.classList.add("contact-events");
      menus.classList.remove("active-menus");
      homeContent.classList.remove("active-home");
      abountContent.classList.remove("active");
      events.classList.remove("active-events");
    } else {
      contact.classList.remove("contact-events");
    }
    if (roomsContentPosition < roomsPosition) {
      rooms.classList.add("rooms-events");
      menus.classList.remove("active-menus");
      homeContent.classList.remove("active-home");
      abountContent.classList.remove("active");
      events.classList.remove("active-events");
      contact.classList.remove("contact-events");
    } else {
      rooms.classList.remove("rooms-events");
    }
  });
};
