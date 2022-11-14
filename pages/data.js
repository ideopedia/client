import React from 'react';
import Image from 'next/image';
import log from "../public/logo.svg"
// const Data = () => {
//   function handleHover(){
//     return (
//       <Image src={log} width={100} height={70}className="absolute" />
//     )
//   }
//   return (
//     <div >
//       <span className='flex justify-center items-center' onMouseOver={handleHover}>hover</span>
//     </div>
//   );
// }

// export default Data;
export default class App extends React.Component{
  state={
    likeList:''
  }
  renderLikeList = () =>{
    return <div className="likes__list" ><Image src={log} /></div>
  }
  handleLeave=()=>{
    return this.setState({likeList:''})
  }
  handleHover=()=>{
    return this.setState({likeList:this.renderLikeList()})
  }
  render(){
    return(
      <div className="likes__wrapper" >
        <div className="likes__relavance" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
          Hover me
          {this.state.likeList}
        </div>
      </div>
    )
  }
}
