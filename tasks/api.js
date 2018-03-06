import gulp from 'gulp';
import yaml from 'gulp-yaml';
import rename from 'gulp-rename';
import sequence from 'gulp-sequence';
import log from 'fancy-log';

import baseConfig from './config/base.config';

/**
 * Generating static client side apis
 * */
const APPLICATION_YML = 'application.yml';
const APPLICATION_JSON = 'application.json';

gulp.task('api:application', function(done) {
  log.info('Building application.properties');
  gulp.src(APPLICATION_YML).pipe(yaml({
    space: 2
  })).pipe(rename(APPLICATION_JSON)).pipe(gulp.dest(baseConfig.dir.build + '/api')).on('end', done);
});

gulp.task('api', sequence(
  ['api:application']
));
