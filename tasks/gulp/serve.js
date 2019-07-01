const gulp = require('gulp')
const connect = require('gulp-connect')

const pathFromRoot = require('../../util/pathFromRoot')
const { integrationTestPort } = require('../../constants')

gulp.task('serve', () => {
  connect.server({
    root: pathFromRoot('dist'),
    port: process.env.PORT || process.env.port || 3000
  })
})

gulp.task('serve:integration', () => {
  connect.server({
    root: pathFromRoot('dist'),
    port: integrationTestPort
  })
})
