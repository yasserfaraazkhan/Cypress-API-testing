
module.exports = (on) => {

    on('before:browser:launch', (browser = {}, args) => {
        if (browser.name === 'chrome') {
          args.push('--disable-site-isolation-trials');
    
          return args
        }
      })
};
