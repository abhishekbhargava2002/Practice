const populate= async (value,currency) => { 
    let myStr="";
    url="https://api.currencyapi.com/v3/latest?apikey=cur_live_7UStkUqQNBmahSoy8K635tE3Sjr5fK1UVPmVloZ2&base_currency=";
    let response=await fetch(url);
    let rJson=await response.json();
    document.querySelector(".output").style.display="block"; 
    console.log(rJson); 
    for(let key of Object.keys (rJson["data"])) {
        myStr +=`<tr>
                <td>${key}</td>
                <td>${rJson["data"][key]["code"]}</td>
                <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                </tr>
                `
    }
    const tableBody=document.querySelector("tbody");
    tableBody.innerHTML=myStr;
}

const btn=document.querySelector(".btn");//create a button
btn.addEventListener("click", (e)=> {
    e.preventDefault();
    console.log("button is clicked");
    const value=parseInt(document.querySelector("input[name='quantity']").value);
    const currency=parseInt(document.querySelector("input[name='quantity']").value);
    populate(value,currency);
})
 




//  let response=await fetch(url);
//     let rJson=await response.json();
//     document.querySelector(".output").style.display="block"; 
//     console.log(rJson); 
//     for(let key of Object.keys (rJson["data"])) {
//         myStr +=`<tr>
//                 <td>${key}</td>
//                 <td>${rJson["data"][key]["code"]}</td>
//                 <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
//                 </tr>
//                 `
//     }