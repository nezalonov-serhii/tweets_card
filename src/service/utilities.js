export const addDots = (followers) => {
   return followers.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1,");
};
