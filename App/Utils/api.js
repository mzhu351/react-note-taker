var api = {
  getBio(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json());
  },
  getRepos(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  },
  //get from firebase
  getNotes(username) {
    username = username.toLowerCase().trim();
    var url = `https://notetaker-saver.firebaseio.com/${username}.json`;
    return fetch(url).then((res) => res.json());
  },
  //post to firebase
  addNote(username, note) {
    username = username.toLowerCase().trim();
    var url = `https://notetaker-saver.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    }).then((res) => res.json());
  }
};

module.exports = api;
