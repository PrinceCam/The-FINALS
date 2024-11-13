function truncateString(str, length) {
    if (str.length > length) {
      return str.slice(0, length) + "...";
    } else {
      return str;
    }
  }
  export default truncateString;