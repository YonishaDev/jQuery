$(document).ready(function () {


    $('body').on('click', '#btn', function () {
        var name = $('#name').val()

        if (name == '') {
            $.confirm({
                title: 'Error',
                content: 'Please enter your name!',
                type: 'red',
                buttons: {
                    ok: {
                        text: "ok!",
                        btnClass: 'btn-primary',
                        keys: ['enter'],
                        action: function () {}
                    },
                    cancel: function () {}
                }
            });
            return false
        }
        var dob = $('#dob').val()

        if (dob == '') {
            $.confirm({
                title: 'Error',
                content: 'Please enter your dob!',
                type: 'red',
                buttons: {
                    ok: {
                        text: "ok!",
                        btnClass: 'btn-primary',
                        keys: ['enter'],
                        action: function () {}
                    },
                    cancel: function () {}
                }
            });
            return false
        }
        var email = $('#email').val()

        if (email == '') {
            $.confirm({
                title: 'Error',
                content: 'Please enter your email!',
                type: 'red',
                buttons: {
                    ok: {
                        text: "ok!",
                        btnClass: 'btn-primary',
                        keys: ['enter'],
                        action: function () {}
                    },
                    cancel: function () {}
                }
            });
            return false
        }
        var cpass = $('#cpass').val()

        if (cpass == '') {
            $.confirm({
                title: 'Error',
                content: 'Please enter your confirm password!',
                type: 'red',
                buttons: {
                    ok: {
                        text: "ok!",
                        btnClass: 'btn-primary',
                        keys: ['enter'],
                        action: function () {}
                    },
                    cancel: function () {}
                }
            });
            return false
        }
        var mobile = $('#mobile').val()
        if (mobile == '') {
            $.confirm({
                title: 'Error',
                content: 'Please enter your mobile Number!',
                type: 'red',
                buttons: {
                    ok: {
                        text: "ok!",
                        btnClass: 'btn-primary',
                        keys: ['enter'],
                        action: function () {}
                    },
                    cancel: function () {}
                }
            });
            return false
        }

    })
    $(document).on("focusin", "#fname", function () {
        $('#error-data-first').hide();
    });
    $(document).on("focusout", "#fname", function () {
        $('#error-data-first').Show();
    });




});