var miniConsole = (() => {
  let cache = [];
  let handler = (ev) => {
    if (ev.keyCode === 113) {
      var script = document.createElement('script');
      console.log('本地按下f2时', cache);

      script.onload = () => {
        for (var i = 0, fn; fn = cache[i++];) {
          fn();
        }
      };
      script.src = './true.js';
      document.getElementsByTagName('head')[0].appendChild(script);
      document.body.removeEventListener('keydown', handler); // 只加载一次 true.js
    }
  };
  document.body.addEventListener('keydown', handler, false);
  return {
    log() {
      let args = arguments;
      cache.push(() => {
        return miniConsole.log.apply(miniConsole, args);
      });
      console.log('本地', cache);
    }
  }
})();

miniConsole.log(11);
miniConsole.log(110);