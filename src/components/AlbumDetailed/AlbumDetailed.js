import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { StyledAlbumDetailed } from './AlbumDetailed.styled';

const AlbumDetailed = ({ title, username, usermail, userphone, userwebsite, photos, posts }) => {

  const loading = useSelector(state => state.albumsReducer.loading);
  const [showPic, setShowPic] = useState(false)
  const [url, setUrl] = useState();
  //TODO: logic to container

  const showBigPicture = (url) => {
    setShowPic(true);
    setUrl(url);
  }

  return (
    <StyledAlbumDetailed>
      { loading && <Spinner />}
      <div>
          <p>Title: {title}</p>
          <p>Username: {username}</p>
          <p>E-mail: {usermail}</p>
          <p>Phone: {userphone}</p>
          <p>Website: {userwebsite}</p>
          {photos && photos.map(photo => <div key={photo.id}><p>Photo title: {photo.title}</p><img alt="smallPicture" onClick={() => showBigPicture(photo.url)} src={photo.thumbnailUrl} /></div>)}
          { posts && <div>
            <p>1st post title: {posts[0].title}</p>
            <p>2nd post title: {posts[1].title}</p>
            </div>}

          </div>
          {showPic &&
            <div className='big-picture'>
              <button onClick={() => setShowPic(false)}>close</button>
              <img alt="bigPicture" src={url} />
            </div>}
    </StyledAlbumDetailed>
  );
}

export default AlbumDetailed;
