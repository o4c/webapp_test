import * as domain from '@imgzine/imgzine-react-webcore/dist/domain'


const configs: domain.CustomConfig = {
  customClientConfig: {
    title: 'Simple webapp',
    general: {
      appDownloadEnabled: true,
      iosB2B: true,
    },
  },
  customI18nConfig: {
    defaultLang: 'nl',
    langs: ['nl', 'en'],
  },
  serverConfig: {
    platform: {
      app_version: '1.0.0',
    },
    profiles: {
      fields: domain.profiles.STANDARD_FIELDS
    }
  },
}

export default configs