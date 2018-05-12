import applicationConfig from '@/../build/api/application';

function getApplicationConfig() {
  return new Promise((resolve) => {
    resolve({
      data: applicationConfig
    });
  });
}

export default {
  getApplicationConfig
};
