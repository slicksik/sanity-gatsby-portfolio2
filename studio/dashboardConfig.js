export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e0b3824d07f09ed7709ebea',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio2-studio-nfinucnk',
                  apiId: '4e313795-6ec7-4210-9be7-b2603fe4db72'
                },
                {
                  buildHookId: '5e0b38258f87442278006a45',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio2-web-pk41ysgz',
                  apiId: 'e7266164-4bf3-4dfd-9a15-ab7425a8bf30'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/slicksik/sanity-gatsby-portfolio2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio2-web-pk41ysgz.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
