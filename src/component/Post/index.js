import FbImageLibrary from 'react-fb-image-grid'

const CustomPost = ({info}) => {

  const butn = () => {
      alert("Button per kiun click kia bhai woh assignmnet ka part nh tha")
  }

  return (
    <div className="card">

      <div className="header">
          <img className="profilePicture" src={info.avatars} alt="avatar"/>

        <div className="pad">
          <h3>
            {info.createdBy}
          </h3>
          <p>
          Created on: {info.createdAt}
          </p>
        </div>

      </div>

      <div className="text">
        {info.description}
      </div>

      <div className="photos">
        {/* calling grid image component here */}
        <FbImageLibrary images={[info.image[0], info.image[1], info.image[2], info.image[3], info.image[4], info.image[5], info.image[6]]}/>
      </div>
      
      <div className="footer" style={{justifyContent: "space-between"}}>
        <button onClick={butn}><i class="fa fa-thumbs-up"></i> Like </button>
        <button onClick={butn}><i class="fas fa-comment"></i> comment</button>
        <button onClick={butn}><i class="fa fa-share-nodes"></i> share</button>
      </div>

    </div>
  );
};

export default CustomPost;
