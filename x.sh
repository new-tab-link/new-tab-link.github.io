
  msg="$(date)"
  packageJson="./package.json"
   if [ -f "$packageJson" ]; then
  msg=v$(npm pkg get version)
  var="\""
  replace=""
  msg=${msg//$var/$replaces}
  fi
var="12345678abc"
replace="test"
echo ${var//12345678/$replace}
  echo msg is $msg