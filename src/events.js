import { EventEmitter } from "events";

const lightTheme = {
  bg: "#191919",
  wColor: "#f8f8ff",
  dColor: "#191919",
  gColor: "#8a8888",
  sColor: "#F2C14E",
};

const darkTheme = {
  bg: "#ECECEC",
  wColor: "#191919",
  dColor: "#f8f8ff",
  gColor: "#4F4F4F",
  sColor: "#679267",
};

let theme = lightTheme;

class event extends EventEmitter {
  isScrollingToBottom(cb) {
    this.on("scrollToBottom", cb);
  }
  isScrollToTop(cb) {
    this.on("scrollToTop", cb);
  }
  ditectScrollDirection(e) {
    this.emit(e === "TOP" ? "scrollToBottom" : "scrollToTop");
  }
  isWidthChange() {
    this.emit("widthChanged", window.innerWidth);
  }
  onWidthChanges(cb) {
    this.on("widthChanged", cb);
  }
  chnageTheme() {
    this.emit("changeTheme");
  }
  themeIsChnaging(cb) {
    this.on("changeTheme", cb);
  }
  theme() {
    return theme;
  }
  setTheme(arg) {
    if (!arg) theme = theme === lightTheme ? darkTheme : lightTheme;
    else theme = arg;
  }
}

const events = new event();
export default events;
