export default ({ body, title, preloadedState }) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" type="text/css" href="assets/style.css" />
        </head>
        
        <body>
          <div id="root">${body}</div>
          <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/recipes/server-rendering/#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g,'\\u003c')}
        </script>
          <script defer src="common.js"></script>
          <script defer src="app.js"></script>
        </body>
      </html>
    `;
  };