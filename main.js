var teacherName = "sir zia";
console.log(teacherName.toUpperCase());
console.log(teacherName.toLowerCase());
console.log(teacherName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
