function* extractTags(html) {
    let tagArray = html.match(/(<[a-zA-Z'"=\/ ]+>)/g);
    for(let tag of tagArray) {
        yield tag;
    }
}


let html = `<html><body>
<p align="center"><span lang="en">Hello</span>, HTML
</p> Bye, bye</body></html>`;
for (let tag of extractTags(html)) {
    console.log(tag);
}
