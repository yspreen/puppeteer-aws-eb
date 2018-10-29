FROM yspreen/puppeteer
EXPOSE 80

WORKDIR /appshare
COPY my.puppeteer.js /appshare/my.puppeteer.js

CMD [ "node", "my.puppeteer.js" ]