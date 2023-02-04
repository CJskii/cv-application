import React, { useState } from "react";
import Draggable from "react-draggable";

const ProfilePicture = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [reupload, setReupload] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
      setReupload(false);
    };
    reader.readAsDataURL(file);
  };

  const showInput = () => {
    return <input type="file" onChange={(e) => handleFileSelect(e)} />;
  };

  const handleReupload = () => {
    if (reupload) {
      setReupload(false);
    } else {
      setReupload(true);
    }
  };

  return (
    <div className="pfp-container">
      {reupload && showInput()}
      {profilePicture === null ? (
        <Draggable>
          <div className="profile-picture">
            <input type="file" onChange={(e) => handleFileSelect(e)} />
          </div>
        </Draggable>
      ) : (
        <img
          style={{ cursor: "pointer" }}
          className="profile-picture"
          src={profilePicture}
          alt="pfp"
          onClick={handleReupload}
        />
      )}
    </div>
  );
};

// class ProfilePicture extends Component {
//   constructor() {
//     super();

//     this.state = {
//       pfp: null,
//       reupload: false,
//     };
//     this.reupload = this.reupload.bind(this);
//   }

//   handleFileSelect(e) {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       this.setState({
//         pfp: reader.result,
//         reupload: false,
//       });
//     };
//     reader.readAsDataURL(file);
//   }

//   showInput() {
//     return <input type="file" onChange={(e) => this.handleFileSelect(e)} />;
//   }

//   reupload() {
//     if (this.state.reupload) {
//       this.setState({
//         reupload: false,
//       });
//     } else {
//       this.setState({
//         reupload: true,
//       });
//     }
//   }

//   render() {
//     return (
//       <div className="pfp-container">
//         {this.state.reupload && this.showInput()}
//         {this.state.pfp === null ? (
//           <Draggable>
//             <div className="profile-picture">
//               <input type="file" onChange={(e) => this.handleFileSelect(e)} />
//             </div>
//           </Draggable>
//         ) : (
//           <img
//             style={{ cursor: "pointer" }}
//             className="profile-picture"
//             src={this.state.pfp}
//             alt="pfp"
//             onClick={this.reupload}
//           />
//         )}
//       </div>
//     );
//   }
// }

export default ProfilePicture;
