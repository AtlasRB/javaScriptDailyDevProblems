import Carousel12 from "../carousel/carousel12";
import Carousel6 from "../carousel/carousel6";

function Home() {
  const pages1 = [
    { text: 'Hello World Variations', url: '/beginner1', backGround: 'bg-blue'},
    { text: 'Sum of Two Numbers', url: '/notAttempted', backGround: 'bg-red'},
    { text: 'Convert Minutes into Seconds', url: '/notAttempted', backGround: 'bg-green'},
    { text: 'FizzBuzz', url: '/notAttempted', backGround: 'bg-blue'},
    { text: 'Palindrome Checker', url: '/notAttempted', backGround: 'bg-red'},
    { text: 'Find the Longest Word', url: '/notAttempted', backGround: 'bg-green'},
    { text: 'Sudoku Solver', url: '/notAttempted', backGround: 'bg-blue'},
    { text: 'Binary Search Trees', url: '/notAttempted', backGround: 'bg-red'},
    { text: 'Efficient Prime Number Functions', url: '/notAttempted', backGround: 'bg-green'},
    { text: 'Writing a Program to play a Perfect Game of Tic-Tac-Toe', url: '/notAttempted', backGround: 'bg-blue'},
    { text: 'Topological Sort Implementation', url: '/notAttempted', backGround: 'bg-red'},
    { text: 'Randomize Line Sequence in a File', url: '/notAttempted', backGround: 'bg-green'}
  ];

  const pages2 = [
    { text: 'Array Rotation', url: '/notAttempted', backGround: 'bg-blue'},
    { text: 'Two Sum Problem', url: '/notAttempted', backGround: 'bg-red'},
    { text: 'Integer to Roman Numeral Converter', url: '/notAttempted', backGround: 'bg-green'},
    { text: 'Validating Email Addresses', url: '/notAttempted', backGround: 'bg-blue'},
    { text: 'Pyramid Pattern Printing', url: '/notAttempted', backGround: 'bg-red'},
    { text: 'Find Missing Number in Array', url: '/notAttempted', backGround: 'bg-green'}
  ];

  const pages3 = [
    { text: 'Balanced Binary Tree Checker', url: '/notAttempted', backGround: 'bg-blue'},
    { text: 'In-Order Successor in a Binary Search Tree', url: '/notAttempted', backGround: 'bg-red'},
    { text: 'Lowest Common Ancestor in a Binary Tree', url: '/notAttempted', backGround: 'bg-green'},
    { text: 'Alien Dictionary Ordering', url: '/notAttempted', backGround: 'bg-blue'},
    { text: 'Regular Expression Matcher', url: '/notAttempted', backGround: 'bg-red'},
    { text: 'Serialize and Deserialize Binary Trees', url: '/notAttempted', backGround: 'bg-green'}
  ];

  return (
    <div className="flex flex-col font-mono">
      <h1 className="text-center lg:text-7xl text-4xl">JavaScript Daily.Dev Problems</h1>   
      
      <div>
        <div className="my-32">
          <h2 className="mt-16 flex justify-center lg:text-6xl lg:mb-8 text-4xl mb-16">Beginner</h2>
          <Carousel12 data={pages1}></Carousel12>
        </div>

        <div className="my-32">
          <h2 className="mt-16 flex justify-center lg:text-6xl lg:mb-8 text-4xl mb-16">Intermediate</h2>
          <Carousel6 data={pages2}></Carousel6>
        </div>

        <div className="my-32">
          <h2 className="mt-16 flex justify-center lg:text-6xl lg:mb-8 text-4xl mb-16">Advanced</h2>
          <Carousel6 data={pages3}></Carousel6>
        </div>
      </div>
      
    </div>
  )
}

export default Home;
