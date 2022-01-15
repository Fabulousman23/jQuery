// 1. Adding a new item to the list of items:

function newItem() {
    let list = $('#list');
    let li = $('<li></li>');
    let input = $('#input');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write smth!');
    } else {
        $('#list').append(li);
        $('#input').val();
    }
// 2. crosing out:
    function crossOut() {
        li.toggleClass('strike');
        
    }


li.on('dblclick', crossOut);

// 3. add delete button

let crossOutButton = $('<crossOutButton></crossOutButton>')
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);


function deleteListItem() {
        li.addClass('delete');
    }
    crossOutButton.on('click', deleteListItem);

// 4. make list sortable

$('#list').sortable()

}