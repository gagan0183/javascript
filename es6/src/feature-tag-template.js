function templatear(strings, ...keys) {
    return function(data) {
        let temp = [...strings];
        keys.forEach((key, i) => {
            temp[i] = temp[i] + data[key];
        });
        return temp.join('');
    }
}

const student = {
    name: "test",
    blogUrl: "http://test.com"
}

const studentTemplate = templatear`<article>
    <h3>${'name'} is a student at HackerYou</h3>
    <p>You can find their work at ${'blogUrl'}.</p>

</article>`;

const myTemplate = studentTemplate(student);
console.log(myTemplate);