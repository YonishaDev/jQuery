$(document).ready(function () {
    //add a task to the list
    $('#addTask').click(function () {
        // alert('Cliked!')
        var task = $('#taskInput').val();
        if (task) {
            //Append list item to the List
            $('#taskList').append('<li>' + task + '</li>');
            $('#taskList').val('');
        }
    })

    //highlight input filed on focus
    $('#taskInput').focus(function () {
        $(this).addClass('highlight');
    })



});

// var userInput = $(this).val();
// if(userInput.length<3){
//     $('.error').show()
// }