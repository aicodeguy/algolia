// Replace with your own values
const searchClient = algoliasearch(
    'AX46MM40Y3',
    '33f0e792cb6968136f5e56cd0aa7c098' // search only API key, not admin API key
  );
  
  const search = instantsearch({
    indexName: 'dev_memes',
    searchClient,
    routing: true,
  });
  
  search.addWidget(
    instantsearch.widgets.configure({
      hitsPerPage: 10,
    })
  );
  
  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-box',
      placeholder: 'Search for memes',
    })
  );
  
//  search.addWidget(
//    instantsearch.widgets.hits({
//      container: '#hits',
//      templates: {
//        item: document.getElementById('hit-template').innerHTML,
//        empty: `We didn't find any results for the search <em>"{{query}}"</em>`,
//      },
//    })
//  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item: `
          <div>
            <img src="{{url}}" align="left" alt="{{name}}" width="300" />
            <div class="hit-name">
              {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
            </div>
          </div>
        `,
      },
    })
  );
  
  search.start();
  