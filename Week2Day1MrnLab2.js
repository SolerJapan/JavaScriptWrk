const grade = 22;
if (grade>90) {
  console.log('you have earned an A');
}
else if (grade<90 && grade>80) {
  console.log('you have earned an B');
}
else if (grade<80 && grade>70) {
  console.log('you have earned an C');
}
else if (grade<70 && grade>55) {
  console.log('you have earned an D');
}
else {
  console.log('you have failed F');
}
