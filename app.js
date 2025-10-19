const submit = document.getElementById('inputFile');
const ResumeBtn = document.getElementById('Btn-Resume');

ResumeBtn.addEventListener("click", ()=>{
    submit.click();
});
submit.addEventListener("change", (e)=>{
    const uploadOpened = e.target.files[0];
    console.log(uploadOpened.type );
    // if (uploadOpened.type === 'application/pdf') {
        
    // }
    //  const uploadURL = URL.createObjectURL(uploadOpened);
    //  console.log(uploadOpened.name);
     ResumeBtn.textContent =  uploadOpened.name ;
    //  console.log(ResumeBtn);
});