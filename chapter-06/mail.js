var mailing_list = [];

/** Before (Action) */
function add_contact(email) {
    mailing_list.push(email);
}

/** Before (Action) */
function submit_form_handler(event) {
    var form = event.target;
    var email = form.elements["email"].value;
    add_contact(email);
}

/** After (Computation) */
function add_contact(mailing_list, email) {
    var list_copy = mailing_list.slice();  // make copy
    list_copy.push(email);                 // change copy
    return list_copy;                      // return copy
}

/** After (Action) */
function submit_form_handler(event) {
    var form = event.target;
    var email = form.elements["email"].value;
    mailing_list = add_concat(mailing_list, email);
}
