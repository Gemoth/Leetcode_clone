import { useState } from "react";
const problems1 = [{
  title: "201. Bitwise AND of Numbers Range",
  difficulty: "easy",
  completion: "65%"
},
{
  title: "202. Happy Number",
  difficulty: "medium",
  completion: "96%"
},
{
  title: "203. Remove Linked List Elements",
  difficulty: "hard",
  completion: "96%"
}]

const problems2 = [{
  title: "277. Bitwise AND of Numbers Range",
  difficulty: "hard",
  completion: "65%"
},
{
  title: "289. Happy Number",
  difficulty: "medium",
  completion: "96%"
},
{
  title: "673. Remove Linked List Elements",
  difficulty: "hard",
  completion: "96%"
}]

function App() {

const [problems, setProblems] = useState([])

/*setInterval(() => {
  setProblems((problems: { title: string; difficulty: string; completion: string; }[]) => [...problems, {
      title: "Title4",
      difficulty: "easy",
      completion: "65%"
  }])
}, 3000);*/
  
  return (
    <div>
        <input type="text" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <button>Sign in</button>
        <div>
            <button onClick={()=>{
              setProblems(problems=>problems1)
            }}>1</button>
            <button onClick={()=>{
              setProblems(problems=>problems2)
            }}>2</button>
        </div>
        <div>
          {problems.map(problem => <ProblemStatement
            title={problem.title}
            completion={problem.completion}
            difficulty={problem.difficulty}/>)}
        </div>
    </div>
  )
}

function ProblemStatement(props: { title: string; completion: string; difficulty: string; }) {
  const title = props.title;
  const completion = props.completion;
  const difficulty = props.difficulty;

  return <tr>
    <td>
      {title}
    </td>
    <td>
      {completion}
    </td>
    <td>
      {difficulty}
    </td>
  </tr>
}

export default App
