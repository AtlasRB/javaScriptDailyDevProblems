import Carousel from "../carousel/carousel";

function Home() {
  const pages1 = [
    { text: 'Hello World Variations', url: '/beginner1', backGround: 'bg-blue-500', backGroundHover: 'bg-blue-700'},
    { text: 'Sum of Two Numbers', url: '/notAttempted', backGround: 'bg-red-500', backGroundHover: 'bg-red-700'},
    { text: 'Convert Minutes into Seconds', url: '/notAttempted', backGround: 'bg-green-500', backGroundHover: 'bg-green-700'},
    { text: 'FizzBuzz', url: '/notAttempted', backGround: 'bg-blue-500', backGroundHover: 'bg-blue-700'},
    { text: 'Palindrome Checker', url: '/notAttempted', backGround: 'bg-red-500', backGroundHover: 'bg-red-700'},
    { text: 'Find the Longest Word', url: '/notAttempted', backGround: 'bg-green-500', backGroundHover: 'bg-green-700'},
    { text: 'Sudoku Solver', url: '/notAttempted', backGround: 'bg-blue-500', backGroundHover: 'bg-blue-700'},
    { text: 'Binary Search Trees', url: '/notAttempted', backGround: 'bg-red-500', backGroundHover: 'bg-red-700'},
    { text: 'Efficient Prime Number Functions', url: '/notAttempted', backGround: 'bg-green-500', backGroundHover: 'bg-green-700'},
    { text: 'Writing a Program to play a Perfect Game of Tic-Tac-Toe', url: '/notAttempted', backGround: 'bg-blue-500', backGroundHover: 'bg-blue-700'},
    { text: 'Topological Sort Implementation', url: '/notAttempted',backGround: 'bg-red-500', backGroundHover: 'bg-red-700'},
    { text: 'Randomize Line Sequence in a File', url: '/notAttempted', backGround: 'bg-green-500', backGroundHover: 'bg-green-700'}
  ];

  const pages2 = [
    { text: 'Array Rotation', url: '/notAttempted', backGround: 'bg-blue-500', backGroundHover: 'bg-blue-700'},
    { text: 'Two Sum Problem', url: '/notAttempted', backGround: 'bg-red-500', backGroundHover: 'bg-red-700'},
    { text: 'Integer to Roman Numeral Converter', url: '/notAttempted', backGround: 'bg-green-500', backGroundHover: 'bg-green-700'},
    { text: 'Validating Email Addresses', url: '/notAttempted', backGround: 'bg-blue-500', backGroundHover: 'bg-blue-700'},
    { text: 'Pyramid Pattern Printing', url: '/notAttempted', backGround: 'bg-red-500', backGroundHover: 'bg-red-700'},
    { text: 'Find Missing Number in Array', url: '/notAttempted', backGround: 'bg-green-500', backGroundHover: 'bg-green-700'}
  ];

  const pages3 = [
    { text: 'Balanced Binary Tree Checker', url: '/notAttempted', backGround: 'bg-blue-500', backGroundHover: 'bg-blue-700'},
    { text: 'In-Order Successor in a Binary Search Tree', url: '/notAttempted', backGround: 'bg-red-500', backGroundHover: 'bg-red-700'},
    { text: 'Lowest Common Ancestor in a Binary Tree', url: '/notAttempted', backGround: 'bg-green-500', backGroundHover: 'bg-green-700'},
    { text: 'Alien Dictionary Ordering', url: '/notAttempted', backGround: 'bg-blue-500', backGroundHover: 'bg-blue-700'},
    { text: 'Regular Expression Matcher', url: '/notAttempted', backGround: 'bg-red-500', backGroundHover: 'bg-red-700'},
    { text: 'Serialize and Deserialize Binary Trees', url: '/notAttempted', backGround: 'bg-green-500', backGroundHover: 'bg-green-700'}
  ];

  return (
    <div className="flex flex-col font-mono">
      <h1 className="text-center lg:text-7xl text-4xl">JavaScript Daily.Dev Problems</h1>   
      
      <div>
        <div className="my-32">
          <Carousel data={pages1} title='Beginner'></Carousel>
        </div>

        <div className="my-32">
          <Carousel data={pages2} title='Intermediate'></Carousel>
        </div>

        <div className="my-32">
          <Carousel data={pages3} title='Advanced'></Carousel>
        </div>
      </div>
      
    </div>
  )
}

export default Home;
