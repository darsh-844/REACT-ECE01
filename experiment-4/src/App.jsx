import './App.css'
import Student from './components/Student'

function App() {
  return (
    <>
      <h1 className="h1">Student Information</h1>
      <Student className="studen" name={"Darsh"} marks={20} major={"Computer Science"} />
      <br />
      <Student className="studen" name={"Bharat"} marks={22} major={"Mathematics"} />
      <br />
      <Student className="studen" name={"Aarushi"} marks={21} major={"Physics"} />
    </>
  )
}

export default App
