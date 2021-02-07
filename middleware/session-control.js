export default function (context) {
  console.log("Session control");
  if (process.server) {
    if (context.req.headers.cookie) {
      let cookie = context.req.headers.cookie.split(';').find(c => c.trim().startsWith('connect.sid='));
      if (cookie) {
        cookie = cookie.split('=')[1];
        console.log(cookie);
        //vuexContext.commit("setAuthkey", cookie);
      }
    } else {
      console.log("Cookie yok");
    }
  } else {
    console.log("Client");
  }
}