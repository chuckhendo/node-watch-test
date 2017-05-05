#!/usr/bin/env node

const gulp = require("gulp");

gulp.watch("scripts/**/*.js", function(e) {
    console.log(JSON.stringify(e));
});