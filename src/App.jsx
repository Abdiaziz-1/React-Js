import Blog from "./Components/Blog";
import UserCardProp from "./Exercise3/UserCardProps";
import UserCard from "./UserCard";

function App() {


  return(
    <div>
    {/* <UserCard /> */}
    {/* <Blog /> */}
    <UserCardProp 
      UserName = "Abdiaziz"
      UserEmail = "abdimoham100@gmail.com"
     />

       <UserCardProp 
      UserName = "Amina"
      UserEmail = "amina@gmail.com"
     />

       <UserCardProp 
      UserName = "Ali"
      UserEmail = "ali@gmail.com"
     />
     
    
    </div>
  )
}
export default App;
