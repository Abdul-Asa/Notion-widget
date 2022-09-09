import {
  getDatabase,
  ref,
  child,
  push,
  update,
  set,
  onValue,
} from 'firebase/database';

function addLikes(likes) {
  const db = getDatabase();
  set(ref(db, 'totalLikes/'), {
    likes: likes,
  });
}

const likesCount = ref(database, 'totalLikes/');
onValue(likesCount, snapshot => {
  const data = snapshot.val();
  console.log(data);
});

// function writeNewPost(uid, username, picture, title, body) {
//   const db = getDatabase();

//   // A post entry.
//   const postData = {
//     author: username,
//     uid: uid,
//     body: body,
//     title: title,
//     starCount: 0,
//     authorPic: picture,
//   };

//   // Get a key for a new Post.
//   const newPostKey = push(child(ref(db), 'posts')).key;

//   // Write the new post's data simultaneously in the posts list and the user's post list.
//   const updates = {};
//   updates['/posts/' + newPostKey] = postData;
//   updates['/user-posts/' + uid + '/' + newPostKey] = postData;

//   return update(ref(db), updates);
// }
