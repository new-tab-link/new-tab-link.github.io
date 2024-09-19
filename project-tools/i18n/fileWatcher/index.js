
const path = require('path')
var watch = require('watch')
// import {watch} from 'watch'
// import {Monitor} from 'watch'
const fileSuffix = `.locale.ts`
const p = path.resolve(path.join(__dirname, '..', '..', '..', 'src'))
// const p = '../../../src'
console.log("ppppppppppppppppppppp", p)
watch.createMonitor(p, function (monitor) {
  // monitor.files[p] // Stat object for my zshrc.
  monitor.on("created", function (f, stat) {
    // Handle new files
    console.log(`create file`, f, stat)
    update(f)
  })
  monitor.on("changed", function (f, curr, prev) {
    // Handle file changes
    console.log(`file changed`, f, curr, prev)
    update(f)
  })
  monitor.on("removed", function (f, stat) {
    // Handle removed files
    console.log('removed', f)
  })
  // monitor.stop(); // Stop watching
})

function checkIsLocaleFile(f){
  const index = f.lastIndexOf(fileSuffix)
  const bl = index > -1 &&  index + fileSuffix.length == f.length
  console.log('index =', index, bl, f)
  return bl
  
}
function update(f){
  if(!checkIsLocaleFile(f))return 
}

function remove(f){
  if(!checkIsLocaleFile(f))return 
}