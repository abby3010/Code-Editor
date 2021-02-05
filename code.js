// Setup ACE
let codeEditor=ace.edit("editorCode");;

// Retrive Elements
const exeCode=document.getElementById('run');
const resetCode=document.getElementById('reset');

let editorLib={
    init(){
        //Configure ACE

        //Theme
        codeEditor.setTheme("ace/theme/github");

        //Set Language
        codeEditor.session.setMode("ace/mode/javascript");

        //Set Options
        codeEditor.setOptions({
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
        });
    }
}

//Events
exeCode.addEventListener('click',()=>{
    //Get input from code editor
    const userCode=codeEditor.getValue();

    //Run the user codeEditor
    try{
        new Function(userCode)();
    }
    catch(err){
        console.log(err);
    }
});
resetCode.addEventListener('click',()=>{
    codeEditor.setValue('');
})
editorLib.init();