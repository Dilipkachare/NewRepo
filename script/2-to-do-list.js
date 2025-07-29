const List = [
    { name: 'make roti', dueDate: '28-07-2025' },
    { name: 'make rice', dueDate: '28-07-2025' }
];
rendertoList();


function rendertoList() {
    let todoisHtml = ' ';
    for (let i = 0; i < List.length; i++) {
        const myListObject = List[i];
        // const name = myListObject.name;
        // const dueDate = myListObject.dueDate;
        const { name, dueDate } = myListObject;

        const html = `
        <div>${name}</div>
         <div> ${dueDate}</div>
<button onclick="
List.splice(${i} , 1);
rendertoList();
" class="Delete-Button">Delete</button>
`;
        todoisHtml += html;
    }
    console.log(todoisHtml);

    document.querySelector('.js-to-do-list').innerHTML = todoisHtml;

}
function ToList() {
    const myElement = document.querySelector
        (".input-element");

    const inputDate = document.querySelector
        (".js-inputDate-element");
    const dueDate = inputDate.value;
    let name = myElement.value;
    console.log(name);
    List.push({
        // name : name ,
        // dueDate : dueDate,
        name,
        dueDate

    });
    console.log(List);
    name = myElement.value = '';
    // if(List.push(name)){
    // myElement.value='';
    // }
    rendertoList();
}