const fs = require('fs').promises;

const filename = './test.txt';

fs.readFile(filename)
    .then(data => console.log(`${filename}: ${data.length}`))
    .catch(err => console.error(err));

fs.readdir('./')
    .catch(console.error)
    .then(files => {
        files.forEach(file => {
            fs.readFile(file)
                .catch(console.error)
                .then(data => console.log(`${file}: ${data.length}`))
        })
        
        console.log('Done');
    });
