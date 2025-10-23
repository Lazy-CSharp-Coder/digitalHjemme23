function themeToggle() 
{
    console.log("Change theme?");

    const body = document.querySelector("body");
    body.classList.add("light")
    console.log(body);

    
}

export { themeToggle };