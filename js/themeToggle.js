function themeToggle() 
{
    console.log("Change theme?");

    const body = document.querySelector("body");
    console.log(body);

    if(body.classList.contains("light"))
    {
        body.classList.remove("light");
        body.classList.add("dark");
    } 
    else
    {
        body.classList.remove("dark");
        body.classList.add("light");
    }
    
    
}

export { themeToggle };