import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  messages: {
    'zh': require('./i18n/locale_zh.properties'),
    'en': require('./i18n/locale_en.properties')
  }
});
