export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5ce4f29d12191becff3b9cd6',
                  title: 'Sanity Studio',
                  name: 'Finansordbok-studio',
                  apiId: 'bd1bdab1-dc9e-482e-b8f3-bcbecfea8c5c'
                },
                {
                  buildHookId: '5ce4f29d56241dffd0705c92',
                  title: 'Blog Website',
                  name: 'Finansordbok',
                  apiId: '4ac12895-7a72-4d14-bbfe-1bf5e4c8dc7f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Thymas1/Finansordbok',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Finansordbok.netlify.com', category: 'apps'}
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
