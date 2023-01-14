export const scroll = () => {
  window.addEventListener("scroll", () => {
    const abountContent = document.querySelector(".about-content");
    const menus = document.querySelector(".menu-content");
    const events = document.querySelector(".events-content");
    const contact = document.querySelector(".contact-content");
    const rooms = document.querySelector(".rooms-content");

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

    if (abountContentPosition < screenPosition) {
      abountContent.classList.add("active");
    } else {
      abountContent.classList.remove("active");
    }
    if (menusContentPosition < menusPosition) {
      menus.classList.add("active-menus");
    } else {
      menus.classList.remove("active-menus");
    }
    if (eventsContentPosition < eventsPosition) {
      events.classList.add("active-events");
    } else {
      events.classList.remove("active-events");
    }
    if (contactContentPosition < contactPosition) {
      contact.classList.add("contact-events");
    } else {
      contact.classList.remove("contact-events");
    }
    if (roomsContentPosition < roomsPosition) {
      rooms.classList.add("rooms-events");
    } else {
      rooms.classList.remove("rooms-events");
    }
  });
};
