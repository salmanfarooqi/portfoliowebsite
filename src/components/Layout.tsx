// import React, { ReactNode, useState } from "react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import Footer from "./Footer";
// import { GiHamburgerMenu } from "react-icons/gi";

// interface Props {
//   children?: ReactNode;
//   onclick?: () => void;
// }

// const Layout: React.FC<Props> = ({ children }) => {
//   const [show, setshow] = useState(false);
//   return (
//     <div className="w-full h-screen flex">
//       <title>Flux Fantasy</title>

//       <div className="hidden sm:block">
//         <Sidebar notificationLength={1}  />
//       </div>
 
//       {show &&
//       <div className="absolute  z-50">
//       <Sidebar notificationLength={0} onClick={() => setshow(!show)} />
//       </div>
//       }
//       <div id="scroll-right" className="w-full overflow-y-scroll z-0">
//         <Header onClick={() => setshow(!show)}/>
//         <div>{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Layout;
