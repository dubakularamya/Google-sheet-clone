let tbody=document.querySelector('tbody')
async function alldata() 
{
    let res=await fetch("https://accjob-random-data.onrender.com/data");
    
    let finaldata= await res.json();
    console.log(finaldata)
    for(let i of finaldata){
      let tr=document.createElement('tr');
      let id=document.createElement('td')
      id.innerText=i.ID
      let name=document.createElement('td')
      name.innerText=i.Name;
      let gender=document.createElement('td')
      gender.innerText=i.Gender;
      let classs=document.createElement('td')
      classs.innerText=i.Class;
      let marks=document.createElement('td')
      marks.innerText=i.Marks;
      let passing=document.createElement('td')
      passing.innerText=i.Passing;
      let email=document.createElement('td')
      email.innerText=i.Email;
      tr.append(id,name,gender,classs,marks,passing,email)
      tbody.append(tr)

    }
    
}
let sortAZ=document.querySelector('#sortAZ');
sortAZ.addEventListener('click',() => 
{
    let sorted_data = final_data.sort((a, b) => 
    {
        return a.Name.localeCompare(b.Name);
    })
    console.log(final_data)


});
alldata();

