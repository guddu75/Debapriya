const alert = require('cli-alert');

module.exports = (isDebug,cli) => {
    if(!isDebug){
        return;
    }
    alert({
        type:'warning',
        msg :'CLI DATA ↓'
    })
    console.log('inputs',cli.input);
    console.log('flags',cli.flags);
    console.log();

}