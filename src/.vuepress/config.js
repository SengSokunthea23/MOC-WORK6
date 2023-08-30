const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'FTA Knowledge Center',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    logo: '/image/circle-logo-moc.png',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      { text: 'Home',link: '/'},
      { text: 'ការណែនាំ', link: '/home/'}
    ],
    sidebar: {
      '/home/': [
        {
          title: 'FTA Knowledge Center',
          collapsable: false,
          children: [
            'FTApageFirst',
          ]
        },
        {
          title: 'ការប្រើប្រាស់ត្រឹមត្រូវ',
          collapsable: false,
          children: [
            'TrueSolutions',
            'TrueSolutions(2)'
          ]
        },
        {
          title: 'ការប្រើប្រាស់មិនត្រឹមត្រូវ',
          collapsable: false,
          children: [
            'InformationInPasswordAndUsername',
            'ForgotPassword',
            'OTPcode',
          ]
        },
        {
          title: 'ការកំណត់ (Settings)',
          collapsable: false,
          children: [
            'account',
            'ChangePassword',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
