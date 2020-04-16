export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e981905bac2e32a4bc41f4a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zt3fir9c',
                  apiId: '0e1b15a9-160f-41ca-9e7c-938b8b3b5c77'
                },
                {
                  buildHookId: '5e9819052be849a8e4dd3b3f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-snt6vbpt',
                  apiId: 'c6ded253-962d-4870-b4ca-030db8e46d7e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-snt6vbpt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
