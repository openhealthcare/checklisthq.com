var loadedmodal=false;
var global_pre="";
var global_post="";

$("#closebutton").click(function(e) {
  $("#myModal").hide()
});

function modal(type, text, pre, post) {
  $("#modaltitle").html(text);
  $("#myModal").show();
  $("#myModal input").focus();

  global_pre=pre;
  global_post=post;

  if (!loadedmodal){
    loadedmodal=true;
    $("#modalForm").submit(submitmodal);
  }
}

function submitmodal(e){
    $("#myModal").hide()
    $("#id_content").val($("#id_content").val()+global_pre+$("#modalval").val()+global_post+"\n");
    $("#modalval").val("");
    return false;
}

$("#id_content").focus();

$("#addheading").click(function(e) {
  modal("heading", "Add Heading", "= ", " =");
  return false;
});

$("#addchecklistitem").click(function(e) {
  modal("checklistitem", "Add Item", "[] ", "");
  return false;
});

$("#addchecklistgroupitem").click(function(e) {
  modal("checklistgroupitem", "Add Choice Item", "() ", "");
  return false;
});

$("#addtextbox").click(function(e) {
  modal("Textbox", "Add Text Item", "[...] ", "");
  return false;
});

$("#preview").click(function(e) {
  $("#checklistform").submit();
});

