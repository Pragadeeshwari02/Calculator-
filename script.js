document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

const initApp = () => {
    window.funcin = function(input){
        const dis = document.querySelector("#screen") ;
        dis.value = dis.value + input;
    };
    window.clearscr = function(){
        document.querySelector("#screen").value= " ";
    };
    window.result = function(){
        let rslt = document.querySelector("#screen");
        try {
            rslt.value = eval(rslt.value);
        }
        catch(e) {
            rslt.value = "Error";
        }
    };
    window.back = function(){
        const bck = document.querySelector("#screen");
        bck.value = bck.value.slice(0,-1);
    };
};
