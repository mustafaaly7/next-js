export default function Signup() {
    return (
     <>
     {/* to make pages like the same styling e.g like pages with no headers i.e login signup  */}
     {/* in react we created route groups we do same in here aswell   */}
     {/* but here we create route group folders  */}
     {/* the folder name should be inside paranthesis bracket and it wont show in folder   */}
     {/* like (auth) uske andar login uske saath signup  */}
     {/* so it wont be like /auth/login  */}
     {/* it will be /login  */}
     {/* cuz it is inside auth group  */}
     {/* if u wanna make it like /auth/login  */}
     {/* u gotta make another folder named auth inside it and dont add it in () */}
     <h1 className="text-center text-6xl my-5">Signup</h1>
     </>
    );
  }