/**
 * Created by Brykalova Viktoria
 */

var xmlFile;
var list_of_files;
var content_of_file;
var title = $('#titleEdit');
var bitch = $('#bitch');
var li_clouse_string = '<button type="button" onclick="deleteNode(';
var li_clouse_string_2 = ')" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></li>';
$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"db.xml",
        dataType:"xml",
        success:function(xml){
            xmlFile = xml;
            list_of_files = $('#list-of-files');
            var i = 0;
            $(xmlFile).find("file").each(function(){
                list_of_files.append('<li onclick="loadText(' + i + ')">' + $(this).find('title').text() +
                    li_clouse_string + i++ + li_clouse_string_2);
            })
        }
    });
});

function deleteNode(id){
    $(xmlFile).find("file")[id].remove();
    list_of_files.text('');
    var i = 0;
    $(xmlFile).find("file").each(function(){
        list_of_files.append('<li onclick="loadText(' + i + ')">' + $(this).find('title').text() +
            li_clouse_string + i++ + li_clouse_string_2);
    });
    title.attr("name", "").val("");
    //title.val("");
    bitch.val("");
    sync();
}

function loadText(id) {
    title.val($(xmlFile).find("title")[id].innerHTML).attr("name", id);
    bitch.val($(xmlFile).find("content")[id].innerHTML);
}

function create_(){
    title.attr("name", "").val("");
    bitch.val("");
}

function save(){
    var id = title.attr("name");
    if (id){
        $(xmlFile).find("title")[id].innerHTML = $('#titleEdit').val();
        $(xmlFile).find("content")[id].innerHTML = $('#bitch').val();
    }else{
        $(xmlFile).find('db').append($("<file><title>"+ $('#titleEdit').val() +"</title><content>"+ $('#bitch').val() +"</content></file>"));
    }
    title.val("");
    bitch.val("");
    list_of_files.text('');
    var i = 0;
    $(xmlFile).find("file").each(function(){
        list_of_files.append('<li onclick="loadText(' + i + ')">' + $(this).find('title').text() +
            li_clouse_string + i++ + li_clouse_string_2);
    });
    sync();
}

function sync(){
    $.ajax({
        type: "POST",
        url: "server.php",
        data: {file: new XMLSerializer().serializeToString(xmlFile)}
    });
}
