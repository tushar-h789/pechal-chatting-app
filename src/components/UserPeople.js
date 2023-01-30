import Button from "./Button";
import Images from "./Images";
// import PButton from "./PButton";
import PButton from "./PButton";


const UserPeople = ({
  buttonName,
  buttonNameTwo,
  userButton,
  fname,
  email,
  singleButton
}) => {
  // let handleFriendRequest= (info)=>{
  //   console.log(info)
  // }

  let handleFriendRequest=(info)=>{
    console.log(info)
  }


  return (
    <>
      <div className="boxHolder">
        <div className="box">
          <div className="boxImgHolder">
            <Images className="img" imgsrc="assets/frndimg.png" />
          </div>
          <div className="title">
            <h3>{fname}</h3>
            <p>{email}</p>
          </div>
          <div>
            {/* <PButton title={buttonName}/> */}
            {userButton ? (
              singleButton ? 
                <>
                  {/* <Button title={buttonName} /> */}
                  <PButton title={buttonName} bname="Button" click={()=>handleFriendRequest()}/>
                </>
               : 
                <>
                  {/* <PButton title={buttonName} /> <PButton title={buttonNameTwo}  /> */}
                  <Button title={buttonName} /> <Button title={buttonNameTwo} />
                </>
              
            ) : (
              "Today, 8:56pm"
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPeople;
