import {Link} from 'react-router-dom';

function Beginner1() {
  
  //Log Hello World
  console.log("Hello World");

  //Different Languages
  console.log("English - Hello World");
  console.log("Japanese - Kon'nichiwa sekai");
  console.log("Spanish - Hola Mundo");
  console.log("French - Bonjour le monde");

  //Include a name
  function logName() {
    var nameValue = document.getElementById("name");
    console.log("Hello " + nameValue.value);
  }

  //Have a nice day
  console.log("Hello World");
  console.log("Have a nice day");

  //Create a picture
  console.log("#   # ##### #     #       ###      #   #  ###  ####  #     ####  ");
  console.log("#   # #     #     #      #   #     # # # #   # #   # #     #   # ");
  console.log("##### ####  #     #      #   #     # # # #   # ####  #     #   # ");
  console.log("#   # #     #     #      #   #     # # # #   # # ##  #     #   # ");
  console.log("#   # ##### ##### #####   ###       # #   ###  #  ## ##### ####  ");

  //Repeat the code
  for (let i = 1; i<11; i++) {
    console.log(i + ". Hello World")
  }

    return (
      <div>
        <Link to='/' className='lg:text-3xl text:lg hover:underline ml-8 lg:fixed lg:visible invisible'>Link back to home page</Link>
        <div className="font-mono lg:mx-[20%] mx-[5%] whitespace-pre text-wrap lg:text-2xl text-xl">
          <h1 className="lg:text-6xl text-5xl mb-16 text-center">Hello World Variations</h1>
          <h2 className="lg:text-5xl text-3xl mb-8 text-center">The Task</h2>
          <p className="mb-32 text-center">1. Hello World Variations<br /><br />

              The first program most people learn in a new programming language is the "Hello World" program. It's a simple code that shows the message "Hello World" on your screen. <br /><br />

              Here are some easy and fun ways to change up the Hello World program: <br /><br />

              Try It in a Different Language<br />
              You can write "Hello World" in another language, like:<br />
              Spanish - "Hola Mundo"<br />
              French - "Bonjour le monde"<br />
              Japanese - "Kon'nichiwa sekai"<br />

              Make It About You<br />
              Change "Hello World" to "Hello [Your Name]". Just replace [Your Name] with your actual name.<br />

              Say More Than Hello<br />
              Add a new line with to say "Hello World" and then "Have a nice day!" right after.<br />

              Create a Picture You can also use letters and symbols to draw something like:<br />
              <div className="lg:text-2xl text-xs">
              *********     ***       *       *    <br />
              *       *   *     *    ***     * *   <br />
              *       *  *       *  *****   *   *  <br />
              *       *  *       *    *    *     * <br />
              *       *  *       *    *   *       *<br />
              *       *  *       *    *    *     * <br />
              *       *   *     *     *     *   *  <br />
              *********     ***       *       *    <br /></div><br />

              Do It Over and Over<br />
              Write a loop in your code to print "Hello World" 10 times.<br />

              These ideas are just the start. You can try out different things and see what fun you can have with printing messages!</p>

          <h2 className="lg:text-5xl text-3xl mb-8 text-center">My Code</h2>
          <h2 className="lg:text-5xl text-3xl mb-8 text-center">Open the console to see what the runs!</h2>
          <div className="lg:text-2xl text-base">
            <h3 className="lg:text-4xl text-2xl mb-4 text-center">Output Hello World</h3>
            <p className="mb-16">console.log("Hello World");</p>

            <h3 className="lg:text-4xl text-2xl mb-4 text-center">Different Languages</h3>
            <p className="mb-16">console.log("English - Hello World");<br />
              console.log("Japanese - Kon'nichiwa sekai");<br />
              console.log("Spanish - Hola Mundo");<br />
              console.log("French - Bonjour le monde");<br />
            </p>

            <h3 className="lg:text-4xl text-2xl mb-4 text-center">Include a name</h3>
            <div className="flex justify-center items-center id=enteredName mb-2">
              <input type="text" id="name" placeholder="Enter your name" autoComplete="on" className="text-black text-center lg:text-2xl text-xl rounded-md p-1" />
              <button onClick={logName} className="lg:text-2xl text-xl lg:ml-4 ml-2 bg-darkblue p-1 rounded-md">Enter</button>
            </div>
            <p>function logName() &#123;</p>    
            <p>    var nameValue = document.getElementById("name");</p>
            <p>    console.log("Hello " + nameValue.value);</p>
            <p className="mb-16">&#125;</p>

            <h3 className="lg:text-4xl text-2xl mb-4 text-center">Have a nice day!</h3>
            <p>console.log("Hello World")</p>
            <p className="mb-16">console.log("Have a nice day)</p>

            <h3 className="lg:text-4xl text-2xl mb-4 text-center">Create a picture</h3>
            <p className="lg:text-2xl text-xs mb-16">console.log("#   # ##### #     #       ###      #   #  ###  ####  #     ####  ");<br />
                console.log("#   # #     #     #      #   #     # # # #   # #   # #     #   # ");<br />
                console.log("##### ####  #     #      #   #     # # # #   # ####  #     #   # ");<br />
                console.log("#   # #     #     #      #   #     # # # #   # # ##  #     #   # ");<br />
                console.log("#   # ##### ##### #####   ###       # #   ###  #  ## ##### ####  ");</p>

            <h3 className="lg:text-4xl text-2xl mb-4 text-center">Repeat the code</h3>
            <p>for (let i = 1; i&lt;11; i++) &#123;</p>  
            <p>    console.log(i + ". Hello World")</p>  
            <p className="mb-16">&#125;</p>
          </div>
          <h2 className="lg:text-5xl text-3xl mb-8 text-center">Output Screenshot</h2>
          <div className="flex justify-center mb-16">
            <img src='\assets\images\helloWorldVariationsOutput.PNG' alt="A screenshot showing the output of my code in the browser console for this problem"></img>
          </div>
        </div>
        <Link to='/' className="lg:text-3xl text:lg hover:underline ml-8 lg:invisible visible">Link back to home page</Link>
      </div>
    );
  };
  
  export default Beginner1